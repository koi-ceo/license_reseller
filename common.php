<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2023-09-06
 */

error_reporting(E_CORE_ERROR | E_CORE_WARNING | E_COMPILE_ERROR | E_ERROR | E_WARNING | E_PARSE | E_USER_ERROR | E_USER_WARNING);

error_reporting(E_ALL);
ini_set('display_errors', '1');

// 보안설정이나 프레임이 달라도 쿠키가 통하도록 설정
header('P3P: CP="ALL CURa ADMa DEVa TAIa OUR BUS IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC OTC"');

$ext_arr = array('PHP_SELF', '_ENV', '_GET', '_POST', '_FILES', '_SERVER', '_COOKIE', '_SESSION', '_REQUEST',
    'HTTP_ENV_VARS', 'HTTP_GET_VARS', 'HTTP_POST_VARS', 'HTTP_POST_FILES', 'HTTP_SERVER_VARS',
    'HTTP_COOKIE_VARS', 'HTTP_SESSION_VARS', 'GLOBALS');
$ext_cnt = count($ext_arr);
for ($i = 0; $i < $ext_cnt; $i++) {
    // POST, GET 으로 선언된 전역변수가 있다면 unset() 시킴
    if (isset($_GET[$ext_arr[$i]])) unset($_GET[$ext_arr[$i]]);
    if (isset($_POST[$ext_arr[$i]])) unset($_POST[$ext_arr[$i]]);
}

$isSecure = false;
// https 검사 추가 20201130 holic 로드밸런싱에서는 SERVER 변수로 확인 불가능한 이슈
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
    $isSecure = true;
} else if (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' || !empty($_SERVER['HTTP_X_FORWARDED_SSL']) && $_SERVER['HTTP_X_FORWARDED_SSL'] == 'on') {
    $isSecure = true;
}

function koi_path()
{
    $chroot = substr($_SERVER['SCRIPT_FILENAME'], 0, strpos($_SERVER['SCRIPT_FILENAME'], dirname(__FILE__)));
    $result['path'] = str_replace('\\', '/', $chroot . dirname(__FILE__));
    $server_script_name = preg_replace('/\/+/', '/', str_replace('\\', '/', $_SERVER['SCRIPT_NAME']));
    $server_script_filename = preg_replace('/\/+/', '/', str_replace('\\', '/', $_SERVER['SCRIPT_FILENAME']));
    $tilde_remove = preg_replace('/^\/\~[^\/]+(.*)$/', '$1', $server_script_name);
    $document_root = str_replace($tilde_remove, '', $server_script_filename);
    $pattern = '/.*?' . preg_quote($document_root, '/') . '/i';
    $root = preg_replace($pattern, '', $result['path']);
    $port = ($_SERVER['SERVER_PORT'] == 80 || $_SERVER['SERVER_PORT'] == 443) ? '' : ':' . $_SERVER['SERVER_PORT'];
    $http = 'http' . ((isset($isSecure) && $isSecure) ? 's' : '') . '://';
    $user = str_replace(preg_replace($pattern, '', $server_script_filename), '', $server_script_name);
    $host = $_SERVER['HTTP_HOST'] ?? $_SERVER['SERVER_NAME'];
    if (isset($_SERVER['HTTP_HOST']) && preg_match('/:[0-9]+$/', $host))
        $host = preg_replace('/:[0-9]+$/', '', $host);
    $host = preg_replace("/[\<\>\'\"\\\'\\\"\%\=\(\)\/\^\*]/", '', $host);
    $result['url'] = $http . $host . $port . $user . $root;
    return $result;
}

$koi_path = koi_path();

include_once($koi_path['path'] . "/config.php");

$_POST = array_map_deep(KOI_ESCAPE_FUNCTION, $_POST);
$_GET = array_map_deep(KOI_ESCAPE_FUNCTION, $_GET);
$_COOKIE = array_map_deep(KOI_ESCAPE_FUNCTION, $_COOKIE);
$_REQUEST = array_map_deep(KOI_ESCAPE_FUNCTION, $_REQUEST);

@extract($_GET);
@extract($_POST);
@extract($_SERVER);

@ini_set("session.use_trans_sid", 0);    // PHPSESSID를 자동으로 넘기지 않음
@ini_set("url_rewriter.tags", ""); // 링크에 PHPSESSID가 따라다니는것을 무력화함 (해뜰녘님께서 알려주셨습니다.)

// SQL Injection 대응 문자열 필터링
function sql_escape_string($str)
{
    if (defined('KOI_ESCAPE_PATTERN') && defined('KOI_ESCAPE_REPLACE')) {
        $pattern = KOI_ESCAPE_PATTERN;
        $replace = KOI_ESCAPE_REPLACE;

        if ($pattern)
            $str = preg_replace($pattern, $replace, $str);
    }

    $str = call_user_func('addslashes', $str);

    return $str;
}

@session_start();

function array_map_deep($fn, $array)
{
    if (is_array($array)) {
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $array[$key] = array_map_deep($fn, $value);
            } else {
                $array[$key] = call_user_func($fn, $value);
            }
        }
    } else {
        $array = call_user_func($fn, $array);
    }

    return $array;
}

$member = array();

include_once(KOI_LIB_PATH . "/common.lib.php");
include_once(KOI_LIB_PATH . '/hook.lib.php');    // hook 함수 파일

include_once(KOI_DATA_PATH . '/' . KOI_DBCONFIG_FILE);

$connect_db = sql_connect(KOI_MYSQL_HOST, KOI_MYSQL_USER, KOI_MYSQL_PASSWORD) or die('MySQL Connect Error!!!');
$select_db = sql_select_db(KOI_MYSQL_DB, $connect_db) or die('MySQL DB Error!!!');

// mysql connect resource $koi 배열에 저장
$koi['connect_db'] = $connect_db;

sql_set_charset('utf8', $connect_db);
if (defined('KOI_MYSQL_SET_MODE') && KOI_MYSQL_SET_MODE) sql_query("SET SESSION sql_mode = ''");
if (defined('KOI_TIMEZONE')) sql_query(" set time_zone = '" . KOI_TIMEZONE . "'");

// 로그인 처리
if (isset($_SESSION['ss_mb_id']) && $_SESSION['ss_mb_id']) { // 로그인중이라면
    $member = get_member($_SESSION['ss_mb_id']);

    // 차단된 회원이면 ss_mb_id 초기화
    if ($member['mb_intercept_date'] && $member['mb_intercept_date'] <= date("Ymd", KOI_SERVER_TIME)) {
        set_session('ss_mb_id', '');
        $member = array();
    } else {
        // 오늘 처음 로그인 이라면
        if (substr($member['mb_today_login'], 0, 10) != KOI_TIME_YMD) {
            // 첫 로그인 포인트 지급
//                f_point_earn($member['mb_no'], $config['cf_login_point'], G5_TIME_YMD . " 첫 로그인", '4', '365');

            // 오늘의 로그인이 될 수도 있으며 마지막 로그인일 수도 있음
            // 해당 회원의 접근일시와 IP 를 저장
            $ip = get_ip_address();
            $sql = " update tbl_member set mb_today_login = '" . KOI_TIME_YMDHIS . "', mb_login_ip = '{$ip}' where mb_email = '{$member['mb_email']}' ";
            sql_query($sql);

            // 접속 로그 추가 20200914 holic
            sql_query("insert into tbl_member_visit set mb_no = '{$member['mb_no']}', ip = '{$ip}', reg_date = '" . KOI_TIME_YMDHIS . "'");
        }
    }
}

$is_member = $is_guest = false;
$is_admin = '';
if (isset($member['mb_no']) && $member['mb_no']) {
    $is_member = true;
    $is_admin = is_admin($member['mb_email']);
} else {
    $is_guest = true;
    $member['mb_no'] = '';
    $member['mb_level'] = 1; // 비회원의 경우 회원레벨을 가장 낮게 설정
}
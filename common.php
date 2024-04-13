<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2023-09-06
 */

include_once "./config.php";

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

include_once "./lib/common.lib.php";

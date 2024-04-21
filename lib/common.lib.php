<?php
if (!defined('_KOI_')) exit;
include_once(dirname(__FILE__) . '/pbkdf2.compat.php');

function add_stylesheet($stylesheet, $order = 0)
{
    global $html_process;

    if (trim($stylesheet) && method_exists($html_process, 'merge_stylesheet'))
        $html_process->merge_stylesheet($stylesheet, $order);
}

function add_javascript($javascript, $order = 0)
{
    global $html_process;

    if (trim($javascript) && method_exists($html_process, 'merge_javascript'))
        $html_process->merge_javascript($javascript, $order);
}

function alert($msg = '', $url = '', $error = true, $post = false, $version = 1, $icon = 'success')
{
    global $koi;

    run_event('alert', $msg, $url, $error, $post, $version, $icon);

    $msg = $msg ? strip_tags($msg, '<br>') : '올바른 방법으로 이용해 주십시오.';

    $header = '';
    if (isset($koi['title'])) {
        $header = $koi['title'];
    }
    include_once(KOI_BBS_PATH . '/alert.php');

    if ($version != 3)
        exit;
}

function check_url_host($url, $msg = '', $return_url = KOI_URL, $is_redirect = false)
{
    if (!$msg)
        $msg = 'url에 타 도메인을 지정할 수 없습니다.';

    $p = @parse_url($url);
    $host = preg_replace('/:[0-9]+$/', '', $_SERVER['HTTP_HOST']);
    $is_host_check = false;

    // url을 urlencode 를 2번이상하면 parse_url 에서 scheme와 host 값을 가져올수 없는 취약점이 존재함
    if ($is_redirect && !isset($p['host']) && urldecode($url) != $url) {
        $i = 0;
        while ($i <= 3) {
            $url = urldecode($url);
            if (urldecode($url) == $url) break;
            $i++;
        }

        if (urldecode($url) == $url) {
            $p = @parse_url($url);
        } else {
            $is_host_check = true;
        }
    }

    if (stripos($url, 'http:') !== false) {
        if (!isset($p['scheme']) || !$p['scheme'] || !isset($p['host']) || !$p['host'])
            alert('url 정보가 올바르지 않습니다.', $return_url);
    }

    //php 5.6.29 이하 버전에서는 parse_url 버그가 존재함
    //php 7.0.1 ~ 7.0.5 버전에서는 parse_url 버그가 존재함
    if ($is_redirect && (isset($p['host']) && $p['host'])) {
        $bool_ch = false;
        foreach (array('user', 'host') as $key) {
            if (isset($p[$key]) && strpbrk($p[$key], ':/?#@')) {
                $bool_ch = true;
            }
        }
        if ($bool_ch) {
            $regex = '/https?\:\/\/' . $host . '/i';
            if (!preg_match($regex, $url)) {
                $is_host_check = true;
            }
        }
    }

    if ((isset($p['scheme']) && $p['scheme']) || (isset($p['host']) && $p['host']) || $is_host_check) {
        //if ($p['host'].(isset($p['port']) ? ':'.$p['port'] : '') != $_SERVER['HTTP_HOST']) {
        if (($p['host'] != $host) || $is_host_check) {
            echo '<script>' . PHP_EOL;
            echo 'alert("url에 타 도메인을 지정할 수 없습니다.");' . PHP_EOL;
            echo 'document.location.href = "' . $return_url . '";' . PHP_EOL;
            echo '</script>' . PHP_EOL;
            echo '<noscript>' . PHP_EOL;
            echo '<p>' . $msg . '</p>' . PHP_EOL;
            echo '<p><a href="' . $return_url . '">돌아가기</a></p>' . PHP_EOL;
            echo '</noscript>' . PHP_EOL;
            exit;
        }
    }
}

function get_member($mb_id, $fields = '*', $is_cache = false)
{
    global $koi;

    $mb_id = preg_replace("/[^0-9a-z_@.]+/i", "", $mb_id);

    static $cache = array();

    $key = md5($fields);

    if ($is_cache && isset($cache[$mb_id]) && isset($cache[$mb_id][$key])) {
        return $cache[$mb_id][$key];
    }

    $sql = " select $fields from tbl_member where mb_email = TRIM('$mb_id') ";

    $cache[$mb_id][$key] = run_replace('get_member', sql_fetch($sql), $mb_id, $fields, $is_cache);

    return $cache[$mb_id][$key];
}

function sql_connect($host, $user, $pass, $db = KOI_MYSQL_DB)
{
    global $koi;

    $link = mysqli_connect($host, $user, $pass, $db);

    // 연결 오류 발생 시 스크립트 종료
    if (mysqli_connect_errno()) {
        die('Connect Error: ' . mysqli_connect_error());
    }
    return $link;
}


// DB 선택
function sql_select_db($db, $connect)
{
    global $koi;

    if (function_exists('mysqli_select_db'))
        return @mysqli_select_db($connect, $db);
}


function sql_set_charset($charset, $link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    if (function_exists('mysqli_set_charset'))
        mysqli_set_charset($link, $charset);

}

function sql_data_seek($result, $offset = 0)
{
    if (!$result) return;

    if (function_exists('mysqli_set_charset'))
        mysqli_data_seek($result, $offset);
}

// mysqli_query 와 mysqli_error 를 한꺼번에 처리
// mysql connect resource 지정 - 명랑폐인님 제안
function sql_query($sql, $error = false, $link = null, $is_catch = false)
{
    global $koi, $koi_debug;

    if (!$link)
        $link = $koi['connect_db'];

    // Blind SQL Injection 취약점 해결
    $sql = trim($sql);
    // union의 사용을 허락하지 않습니다.
    //$sql = preg_replace("#^select.*from.*union.*#i", "select 1", $sql);
    $sql = preg_replace("#^select.*from.*[\s\(]+union[\s\)]+.*#i ", "select 1", $sql);
    // `information_schema` DB로의 접근을 허락하지 않습니다.
    $sql = preg_replace("#^select.*from.*where.*`?information_schema`?.*#i", "select 1", $sql);

    $is_debug = get_permission_debug_show();

    $start_time = $is_debug ? get_microtime() : 0;

    if (function_exists('mysqli_query')) {
        if ($error) {
            $result = @mysqli_query($link, $sql) or die("<p>$sql<p>" . mysqli_errno($link) . " : " . mysqli_error($link) . "<p>error file : {$_SERVER['SCRIPT_NAME']}");
        } else {
            $result = @mysqli_query($link, $sql);
            $error_str = @mysqli_error($link);
            $error_no = @mysqli_errno($link);
            if ($is_catch) {
                if (!$result && !empty($error_str) && $error_no != 0) {
                    throw new Exception($error_str . "___@:" . $sql, $error_no);
                }
            }
        }
    } else {
        if ($error) {
            $result = @sql_query($sql, $link) or die("<p>$sql<p>" . sql_error_info() . "<p>error file : {$_SERVER['SCRIPT_NAME']}");
        } else {
            $result = @sql_query($sql, $link);
        }
    }

    if ($result && $is_debug) {
        // 여기에 실행한 sql문을 화면에 표시하는 로직 넣기
        $koi_debug['sql'][] = array(
            'sql' => $sql,
            'start_time' => $start_time,
            'end_time' => get_microtime(),
        );
    }

    return $result;
}


// 쿼리를 실행한 후 결과값에서 한행을 얻는다.
function sql_fetch($sql, $error = false, $link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    $result = sql_query($sql, $error, $link);
    //$row = @sql_fetch_array($result) or die("<p>$sql<p>" . mysqli_errno() . " : " .  mysqli_error() . "<p>error file : $_SERVER['SCRIPT_NAME']");
    $row = sql_fetch_array($result);
    return $row;
}


// 결과값에서 한행 연관배열(이름으로)로 얻는다.
function sql_fetch_array($result)
{
    if (function_exists('mysqli_fetch_assoc'))
        $row = @mysqli_fetch_assoc($result);

    return $row;
}


// $result에 대한 메모리(memory)에 있는 내용을 모두 제거한다.
// sql_free_result()는 결과로부터 얻은 질의 값이 커서 많은 메모리를 사용할 염려가 있을 때 사용된다.
// 단, 결과 값은 스크립트(script) 실행부가 종료되면서 메모리에서 자동적으로 지워진다.
function sql_free_result($result)
{
    if (function_exists('mysqli_free_result'))
        mysqli_free_result($result);
}


function sql_password($value)
{
    // mysql 4.0x 이하 버전에서는 password() 함수의 결과가 16bytes
    // mysql 4.1x 이상 버전에서는 password() 함수의 결과가 41bytes
    $row = sql_fetch(" select password('$value') as pass ");

    return $row['pass'];
}


function sql_insert_id($link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    if (function_exists('mysqli_insert_id'))
        return mysqli_insert_id($link);
}


function sql_num_rows($result)
{
    if (function_exists('mysqli_num_rows'))
        return mysqli_num_rows($result);
}


function sql_field_names($table, $link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    $columns = array();

    $sql = " select * from `$table` limit 1 ";
    $result = sql_query($sql, $link);

    if (function_exists('mysqli_fetch_field')) {
        while ($field = mysqli_fetch_field($result)) {
            $columns[] = $field->name;
        }
    }

    return $columns;
}


function sql_error_info($link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    if (function_exists('mysqli_error')) {
        return mysqli_errno($link) . ' : ' . mysqli_error($link);
    }
}

function get_permission_debug_show()
{
    global $member;

    $bool = false;
    if (defined('KOI_DEBUG') && KOI_DEBUG) {
        $bool = true;
    }

    return run_replace('get_permission_debug_show', $bool, $member);
}

function clean_xss_tags($str, $check_entities = 0, $except = false)
{
    $str_len = strlen($str);

    $i = 0;
    while ($i <= $str_len) {
        if ($except) {
            $result = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $str);
        } else {
            $result = preg_replace('#</*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|i(?:frame|layer)|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|title|xml)[^>]*+>#i', '', $str);
        }

        if ($check_entities) {
            $result = str_replace(array('&colon;', '&lpar;', '&rpar;', '&NewLine;', '&Tab;'), '', $result);
        }

        $result = preg_replace('#([^\p{L}]|^)(?:javascript|jar|applescript|vbscript|vbs|wscript|jscript|behavior|mocha|livescript|view-source)\s*:(?:.*?([/\\\;()\'">]|$))#ius',
            '$1$2', $result);

        if ((string)$result === (string)$str) break;

        $str = $result;
        $i++;
    }

    return $str;
}

function get_encrypt_string($str)
{
    if (defined('KOI_STRING_ENCRYPT_FUNCTION') && KOI_STRING_ENCRYPT_FUNCTION) {
        $encrypt = call_user_func(KOI_STRING_ENCRYPT_FUNCTION, $str);
    } else {
        $encrypt = sql_password($str);
    }

    return $encrypt;
}

// 로그인 패스워드 체크
function login_password_check($mb, $pass, $hash)
{
    global $koi;

    $mb_id = isset($mb['mb_email']) ? $mb['mb_email'] : '';

    if (!$mb_id)
        return false;

    if (KOI_STRING_ENCRYPT_FUNCTION === 'create_hash' && (strlen($hash) === KOI_MYSQL_PASSWORD_LENGTH || strlen($hash) === 16)) {
        if (sql_password($pass) === $hash) {
            if (!isset($mb['mb_password2'])) {
                $sql = "ALTER TABLE tbl_member ADD `mb_password2` VARCHAR(255) NOT NULL default '' AFTER `mb_password`";
                sql_query($sql);
            }

            $new_password = create_hash($pass);
            $sql = " update tbl_member set mb_password = '$new_password', mb_password2 = '$hash' where mb_email = '$mb_id' ";
            sql_query($sql);
            return true;
        }
    }
    return check_password($pass, $hash);
}

function check_password($pass, $hash)
{
    if (defined('KOI_STRING_ENCRYPT_FUNCTION') && KOI_STRING_ENCRYPT_FUNCTION === 'create_hash') {
        return validate_password($pass, $hash);
    }

    $password = get_encrypt_string($pass);

    return ($password === $hash);
}

// 휴대폰번호의 숫자만 취한 후 중간에 하이픈(-)을 넣는다.
function hyphen_hp_number($hp)
{
    $hp = preg_replace("/[^0-9]/", "", $hp);
    return preg_replace("/([0-9]{3})([0-9]{3,4})([0-9]{4})$/", "\\1-\\2-\\3", $hp);
}

function set_session($session_name, $value)
{
    global $koi;

    static $check_cookie = null;

    if ($check_cookie === null) {
        $cookie_session_name = session_name();
        if (!isset($koi['session_cookie_samesite']) && !($cookie_session_name && isset($_COOKIE[$cookie_session_name]) && $_COOKIE[$cookie_session_name]) && !headers_sent()) {
            @session_regenerate_id(false);
        }

        $check_cookie = 1;
    }

    // PHP 버전별 차이를 없애기 위한 방법
    $$session_name = $_SESSION[$session_name] = $value;
}


// 세션변수값 얻음
function get_session($session_name)
{
    return isset($_SESSION[$session_name]) ? $_SESSION[$session_name] : '';
}


// 쿠키변수 생성
function set_cookie($cookie_name, $value, $expire)
{
    global $koi;

    setcookie(md5($cookie_name), base64_encode($value), KOI_SERVER_TIME + $expire, '/', '');
}


// 쿠키변수값 얻음
function get_cookie($cookie_name)
{
    $cookie = md5($cookie_name);
    if (array_key_exists($cookie, $_COOKIE))
        return base64_decode($_COOKIE[$cookie]);
    else
        return "";
}

function check_mail_bot($ip = '')
{

    //아이피를 체크하여 메일 크롤링을 방지합니다.
    $check_ips = array('211.249.40.');
    $bot_message = 'bot 으로 판단되어 중지합니다.';

    if ($ip) {
        foreach ($check_ips as $c_ip) {
            if (preg_match('/^' . preg_quote($c_ip) . '/', $ip)) {
                die($bot_message);
            }
        }
    }

    // user agent를 체크하여 메일 크롤링을 방지합니다.
    $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
    if ($user_agent === 'Carbon' || strpos($user_agent, 'BingPreview') !== false || strpos($user_agent, 'Slackbot') !== false) {
        die($bot_message);
    }
}

function get_ip_address()
{
    if (isset($_SERVER['HTTP_CLIENT_IP']) && $_SERVER['HTTP_CLIENT_IP'])
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if (isset($_SERVER['HTTP_X_FORWARDED']) && $_SERVER['HTTP_X_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if (isset($_SERVER['HTTP_FORWARDED_FOR']) && $_SERVER['HTTP_FORWARDED_FOR'])
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if (isset($_SERVER['HTTP_FORWARDED']) && $_SERVER['HTTP_FORWARDED'])
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'])
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function print_r2($var)
{
    ob_start();
    print_r($var);
    $str = ob_get_contents();
    ob_end_clean();
    $str = str_replace(" ", "&nbsp;", $str);
    echo nl2br("<span style='font-family:Tahoma, 굴림; font-size:9pt;'>$str</span>");
}

function get_real_client_ip()
{
    $real_ip = $_SERVER['REMOTE_ADDR'];
    if (isset($_SERVER['HTTP_X_FORWARDED_FOR']) && preg_match('/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\z/', $_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $real_ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    return preg_replace('/[^0-9.]/', '', $real_ip);
}

function goto_url($url)
{
    $url = str_replace("&amp;", "&", $url);
    //echo "<script> location.replace('$url'); </script>";

    if (!headers_sent())
        header('Location: ' . $url);
    else {
        echo '<script>';
        echo 'location.replace("' . $url . '");';
        echo '</script>';
        echo '<noscript>';
        echo '<meta http-equiv="refresh" content="0;url=' . $url . '" />';
        echo '</noscript>';
    }
    exit;
}


function is_admin($mb_id)
{
    if (!$mb_id) return '';

    $is_authority = '';

    if ('info.koicorp@gmail.com' == $mb_id) {
        $is_authority = 'super';
    }

    return run_replace('is_admin', $is_authority, $mb_id);
}

?>
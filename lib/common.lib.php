<?php
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
    global $koi, $config, $member;
    global $is_admin;

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

    $sql = " select $fields from tbl_member where mb_id = TRIM('$mb_id') ";

    $cache[$mb_id][$key] = run_replace('get_member', sql_fetch($sql), $mb_id, $fields, $is_cache);

    return $cache[$mb_id][$key];
}

function sql_connect($host, $user, $pass, $db = KOI_MYSQL_DB)
{
    global $koi;

    if (function_exists('mysqli_connect') && KOI_MYSQLI_USE) {
        $link = mysqli_connect($host, $user, $pass, $db);

        // 연결 오류 발생 시 스크립트 종료
        if (mysqli_connect_errno()) {
            die('Connect Error: ' . mysqli_connect_error());
        }
    } else {
        $link = mysql_connect($host, $user, $pass);
    }

    return $link;
}


// DB 선택
function sql_select_db($db, $connect)
{
    global $koi;

    if (function_exists('mysqli_select_db') && KOI_MYSQLI_USE)
        return @mysqli_select_db($connect, $db);
    else
        return @mysql_select_db($db, $connect);
}


function sql_set_charset($charset, $link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    if (function_exists('mysqli_set_charset') && KOI_MYSQLI_USE)
        mysqli_set_charset($link, $charset);
    else
        mysql_query(" set names {$charset} ", $link);
}

function sql_data_seek($result, $offset = 0)
{
    if (!$result) return;

    if (function_exists('mysqli_set_charset') && KOI_MYSQLI_USE)
        mysqli_data_seek($result, $offset);
    else
        mysql_data_seek($result, $offset);
}

// mysqli_query 와 mysqli_error 를 한꺼번에 처리
// mysql connect resource 지정 - 명랑폐인님 제안
function sql_query($sql, $error = KOI_DISPLAY_SQL_ERROR, $link = null, $is_catch = false)
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
            $buy_process = get_session('buy_process');
            if ($buy_process) {
                $result = @mysqli_query($link, $sql);
                $error_str = mysqli_error($link);
                if (!$result) {
                    order_fail($error_str);
                }
            } else {
                $result = @mysqli_query($link, $sql) or die("<p>$sql<p>" . mysqli_errno($link) . " : " . mysqli_error($link) . "<p>error file : {$_SERVER['SCRIPT_NAME']}");
            }
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
            $result = @mysql_query($sql, $link) or die("<p>$sql<p>" . mysql_errno() . " : " . mysql_error() . "<p>error file : {$_SERVER['SCRIPT_NAME']}");
        } else {
            $result = @mysql_query($sql, $link);
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
    else
        $row = @mysql_fetch_assoc($result);

    return $row;
}


// $result에 대한 메모리(memory)에 있는 내용을 모두 제거한다.
// sql_free_result()는 결과로부터 얻은 질의 값이 커서 많은 메모리를 사용할 염려가 있을 때 사용된다.
// 단, 결과 값은 스크립트(script) 실행부가 종료되면서 메모리에서 자동적으로 지워진다.
function sql_free_result($result)
{
    if (function_exists('mysqli_free_result') && KOI_MYSQLI_USE)
        return mysqli_free_result($result);
    else
        return mysql_free_result($result);
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

    if (function_exists('mysqli_insert_id') && KOI_MYSQLI_USE)
        return mysqli_insert_id($link);
    else
        return mysql_insert_id($link);
}


function sql_num_rows($result)
{
    if (function_exists('mysqli_num_rows') && KOI_MYSQLI_USE)
        return mysqli_num_rows($result);
    else
        return mysql_num_rows($result);
}


function sql_field_names($table, $link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    $columns = array();

    $sql = " select * from `$table` limit 1 ";
    $result = sql_query($sql, $link);

    if (function_exists('mysqli_fetch_field') && KOI_MYSQLI_USE) {
        while ($field = mysqli_fetch_field($result)) {
            $columns[] = $field->name;
        }
    } else {
        $i = 0;
        $cnt = mysql_num_fields($result);
        while ($i < $cnt) {
            $field = mysql_fetch_field($result, $i);
            $columns[] = $field->name;
            $i++;
        }
    }

    return $columns;
}


function sql_error_info($link = null)
{
    global $koi;

    if (!$link)
        $link = $koi['connect_db'];

    if (function_exists('mysqli_error') && KOI_MYSQLI_USE) {
        return mysqli_errno($link) . ' : ' . mysqli_error($link);
    } else {
        return mysql_errno($link) . ' : ' . mysql_error($link);
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

?>
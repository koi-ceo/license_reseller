<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2023-09-06
 */

define('_KOI_', true);

date_default_timezone_set("Asia/Seoul");

define('KOI_ESCAPE_FUNCTION', 'sql_escape_string');

define('KOI_SERVER_TIME', time());
define('KOI_TIME_YMDHIS', date('Y-m-d H:i:s', KOI_SERVER_TIME));
define('KOI_TIME_YMDH', date('Y-m-d H', KOI_SERVER_TIME));
define('KOI_TIME_YMD_01', date('Y-m-01', KOI_SERVER_TIME));
define('KOI_TIME_YMDHIS_YESTERDAY', date('Y-m-d H:i:s', KOI_SERVER_TIME - 86400));
define('KOI_TIME_YMDHIS_20MIN', date('Y-m-d H:i:s', KOI_SERVER_TIME - 1200));
define('KOI_TIME_YMDHIS_HOUR_AFTER', date('Y-m-d H:i:s', KOI_SERVER_TIME + 3600));
define('KOI_TIME_YM', substr(KOI_TIME_YMDHIS, 0, 7));
define('KOI_TIME_YM_LAST', date("Y-m", strtotime("-1 month", time())));
define('KOI_TIME_YM_EXPIRE', date("Y-m-d", strtotime("+1 month", time())));
define('KOI_TIME_YMD', substr(KOI_TIME_YMDHIS, 0, 10));
define('KOI_TIME_YMD_TOMORROW', date("Y-m-d", strtotime("+1 day", time())));
define('KOI_TIME_YMD_YESTERDAY', substr(KOI_TIME_YMDHIS_YESTERDAY, 0, 10));
define('KOI_TIME_YMD_2DAY_AGO', date('Y-m-d H:i:s', KOI_SERVER_TIME - 172800));
define('KOI_TIME_YMD_WEEK_AGO', date("Y-m-d", strtotime("-7 day", time())));
define('KOI_TIME_YMD_2WEEK_AGO', date("Y-m-d", strtotime("-14 day", time())));
define('KOI_TIME_YMD_10DAY_AGO', date("Y-m-d", strtotime("-10 day", time())));
define('KOI_TIME_YMD_NEXT', date("Y-m-d", strtotime("+1 month", time() - 86400)));
define('KOI_TIME_YMD_LAST', date("Y-m-d", strtotime("-1 month", time())));
define('KOI_TIME_YMD_3MONTH_AGO', date("Y-m-d", strtotime("-3 month", time())));
define('KOI_TIME_YMD_HALF_YEAR_AGO', date("Y-m-d", strtotime("-6 month", time())));
define('KOI_TIME_YMD_YEAR_AGO', date("Y-m-d", strtotime("-1 year", time())));
define('KOI_TIME_YMD_YEAR_AFTER', date("Y-m-d", strtotime("+1 year", time())));
define('KOI_TIME_HIS', substr(KOI_TIME_YMDHIS, 11, 8));
define('KOI_TIME_YEAR', substr(KOI_TIME_YMDHIS, 0, 4));
define('KOI_TIME_MONTH', substr(KOI_TIME_YMDHIS, 5, 2));
define('KOI_TIME_TADA', date('m', KOI_SERVER_TIME));
define('KOI_TIME_TADA_YM', date('Ym', KOI_SERVER_TIME));
define('KOI_TIME_YMDHIS_CANCEL', date('Y-m-d H:i:s', KOI_SERVER_TIME - 3600));

if ($_SERVER['HTTP_HOST'] == 'localhost' || $_SERVER['HTTP_HOST'] == '127.0.0.1') {
    define('KOI_DOMAIN', '');
    define('KOI_HTTPS_DOMAIN', '');
} else {
    define('KOI_DOMAIN', 'https://seeattractions.com');
    define('KOI_HTTPS_DOMAIN', 'https://seeattractions.com');
}

if (KOI_DOMAIN) {
    define('KOI_URL', KOI_DOMAIN);
} else {
    if (isset($koi_path['url']))
        define('KOI_URL', $koi_path['url']);
    else
        define('KOI_URL', '');
}
if (isset($koi_path['path'])) {
    define('KOI_PATH', $koi_path['path']);
} else {
    define('KOI_PATH', '');
}

define('KOI_ADMIN_DIR', 'adm');
define('KOI_BBS_DIR', 'bbs');
define('KOI_CSS_DIR', 'css');
define('KOI_DATA_DIR', 'data');
define('KOI_IMG_DIR', 'img');
define('KOI_JS_DIR', 'js');
define('KOI_LIB_DIR', 'lib');
define('KOI_PLUGIN_DIR', 'plugin');
define('KOI_EDITOR_DIR', 'editor');
define('KOI_PHPMAILER_DIR', 'PHPMailer');
define('KOI_SESSION_DIR', 'session');
define('KOI_AJAX_CALL_DIR', 'ajax_call');

define('KOI_ADMIN_URL', KOI_URL . '/' . KOI_ADMIN_DIR);
define('KOI_BBS_URL', KOI_URL . '/' . KOI_BBS_DIR);
define('KOI_CSS_URL', KOI_URL . '/' . KOI_CSS_DIR);
define('KOI_DATA_URL', KOI_URL . '/' . KOI_DATA_DIR);
define('KOI_IMG_URL', KOI_URL . '/' . KOI_IMG_DIR);
define('KOI_JS_URL', KOI_URL . '/' . KOI_JS_DIR);
define('KOI_PLUGIN_URL', KOI_URL . '/' . KOI_PLUGIN_DIR);
define('KOI_EDITOR_URL', KOI_PLUGIN_URL . '/' . KOI_EDITOR_DIR);
define('KOI_AJAX_CALL_URL', KOI_URL . '/' . KOI_AJAX_CALL_DIR);

define('KOI_ADMIN_PATH', KOI_PATH . '/' . KOI_ADMIN_DIR);
define('KOI_BBS_PATH', KOI_PATH . '/' . KOI_BBS_DIR);
define('KOI_DATA_PATH', KOI_PATH . '/' . KOI_DATA_DIR);
define('KOI_LIB_PATH', KOI_PATH . '/' . KOI_LIB_DIR);
define('KOI_PLUGIN_PATH', KOI_PATH . '/' . KOI_PLUGIN_DIR);
define('KOI_SESSION_PATH', KOI_DATA_PATH . '/' . KOI_SESSION_DIR);
define('KOI_EDITOR_PATH', KOI_PLUGIN_PATH . '/' . KOI_EDITOR_DIR);
define('KOI_PHPMAILER_PATH', KOI_PLUGIN_PATH . '/' . KOI_PHPMAILER_DIR);
define('KOI_AJAX_CALL_PATH', KOI_PATH . '/' . KOI_AJAX_CALL_DIR);


?>
<?php
/**
 * 로그인 > 로그인 검사
 * User: holic
 * Date: 2024-04-20
 */

include_once('./_common.php');

$mb_email = $_POST['mb_email'] ? trim($_POST['mb_email']) : '';
$mb_password = $_POST['mb_password'] ? trim($_POST['mb_password']) : '';
if (!$mb_email || !$mb_password)
    alert('회원아이디나 비밀번호가 공백이면 안됩니다.');

$mb = get_member($mb_email);

if (!$mb) {
    alert('가입된 회원아이디가 아니거나,\\n 비밀번호가 틀립니다.\\n비밀번호는 대소문자를 구분합니다.');
}

if (!login_password_check($mb, $mb_password, $mb['mb_password'])) {
    run_event('password_is_wrong', 'login', $mb);
    alert('가입된 회원아이디가 아니거나,\\n 비밀번호가 틀립니다.\\n비밀번호는 대소문자를 구분합니다.');
}
// 차단된 아이디인가?
if ($mb['mb_intercept_date'] && $mb['mb_intercept_date'] <= date("Ymd", KOI_SERVER_TIME)) {
    $date = preg_replace("/([0-9]{4})([0-9]{2})([0-9]{2})/", "\\1년 \\2월 \\3일", $mb['mb_intercept_date']);
    alert('회원님의 아이디는 접근이 금지되어 있습니다.\n처리일 : ' . $date);
}

// 탈퇴한 아이디인가?
if ($mb['mb_leave_date'] && $mb['mb_leave_date'] <= date("Ymd", KOI_SERVER_TIME)) {
    $date = preg_replace("/([0-9]{4})([0-9]{2})([0-9]{2})/", "\\1년 \\2월 \\3일", $mb['mb_leave_date']);
    alert('탈퇴한 아이디이므로 접근하실 수 없습니다.\n탈퇴일 : ' . $date);
}

// 메일인증 설정이 되어 있다면
if (!$mb['mb_email_certify']) {
    $ckey = md5($mb['mb_ip'] . $mb['mb_datetime']);
    alert("{$mb['mb_email']} 메일로 메일인증을 받으셔야 로그인 가능합니다.", KOI_URL);
}

set_session('ss_mb_id', $mb['mb_email']);
set_session('ss_mb_key', md5($mb['mb_datetime'] . get_real_client_ip() . $_SERVER['HTTP_USER_AGENT']));

if (isset($auto_login) && $auto_login) {
    // 3.27
    // 자동로그인 ---------------------------
    // 쿠키 저장
    $key = md5($_SERVER['SERVER_SOFTWARE'] . $_SERVER['HTTP_USER_AGENT'] . $mb['mb_password']);
    set_cookie('ck_mb_id', $mb['mb_email'], 86400 * 9999);
    set_cookie('ck_auto', $key, 86400 * 9999);
    // 자동로그인 end ---------------------------
} else {
    set_cookie('ck_mb_id', '', 0);
    set_cookie('ck_auto', '', 0);
}

if (isset($url) && $url) {
    // url 체크
    check_url_host($url, '', KOI_URL, true);

    $link = urldecode($url);
    // 2003-06-14 추가 (다른 변수들을 넘겨주기 위함)
    if (preg_match("/\?/", $link))
        $split = "&amp;";
    else
        $split = "?";

    // $_POST 배열변수에서 아래의 이름을 가지지 않은 것만 넘김
    $post_check_keys = array('mb_id', 'mb_password', 'x', 'y', 'url');

    //소셜 로그인 추가
    if (isset($is_social_login) && $is_social_login) {
        $post_check_keys[] = 'provider';
    }

    $post_check_keys = run_replace('login_check_post_check_keys', $post_check_keys, $link, $is_social_login);

    foreach ($_POST as $key => $value) {
        if ($key && !in_array($key, $post_check_keys)) {
            $link .= "$split$key=$value";
            $split = "&amp;";
        }
    }

} else {
    $link = KOI_URL;
}

run_event('member_login_check', $mb, $link, '');
goto_url($link);
?>
<?php
/**
 * 로그인 > 로그인 검사
 * User: holic
 * Date: 2024-04-20
 */

include_once('./_common.php');

if (!$mb_email || !$mb_password)
    alert('회원아이디나 비밀번호가 공백이면 안됩니다.');

$mb = get_member($mb_email);

echo $mb_password . "<BR>";
echo $mb['mb_password'] . "<BR>";
echo get_encrypt_string($mb_password);
die;
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
?>
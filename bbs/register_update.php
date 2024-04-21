<?php
/**
 * 회원가입 > form update
 * User: holic
 * Date: 2024-04-20
 */

include_once('./_common.php');
include_once(KOI_LIB_PATH . '/register.lib.php');
include_once(KOI_LIB_PATH . '/mailer.lib.php');

if (!$mb_hp || strlen($mb_hp) < 10) {
    alert('휴대폰 번호를 정확히 입력해 주세요.');
}
if ($mb_password != $mb_password_re) {
    alert('비밀번호가 일치하지 않습니다.');
}
if (strlen($mb_password) < 10) {
    alert('비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여 10자리 이상 입력해주세요.');
}
if (valid_mb_email($mb_email)) {
    alert('이메일 주소가 형식에 맞지 않습니다.');
}
if (exist_mb_id($mb_email)) {
    alert('이미 사용중인 아이디입니다.');
}
if (exist_mb_hp($mb_hp, $mb_email)) {
    alert('이미 사용중인 휴대폰 번호입니다.');
}

$mb_md5 = md5(pack('V*', rand(), rand(), rand(), rand()));
$mb_password = get_encrypt_string($mb_password);
$mb_hp = hyphen_hp_number($mb_hp);
sql_query("insert into tbl_member set 
                                    mb_email = '{$mb_email}', 
                                    mb_password = '{$mb_password}',
                                    mb_level = '1', 
                                    mb_hp = '{$mb_hp}', 
                                    mb_datetime = '" . KOI_TIME_YMDHIS . "',
                                    mb_date = '" . KOI_TIME_YMD . "',
                                    mb_email_certify_md = '{$mb_md5}'");

// 이메일 전송
$subject = '[코이] 회원가입을 축하드립니다. 이메일 인증 링크가 포함되어 있습니다.';

// 어떠한 회원정보도 포함되지 않은 일회용 난수를 생성하여 인증에 사용
$certify_href = KOI_BBS_URL . '/email_certify.php?mb_email=' . $mb_email . '&amp;mb_md5=' . $mb_md5;

ob_start();
include_once('./register_update_mail1.php');
$content = ob_get_contents();
ob_end_clean();

$content = run_replace('register_form_update_mail_mb_content', $content, $mb_email);

mailer('코이', 'info.koicorp@gmail.com', $mb_email, $subject, $content, 1);

run_event('register_form_update_send_mb_mail', '코이', 'info.koicorp@gmail.com', $mb_email, $subject, $content);

set_session('ss_mb_reg', $mb_email);
?>
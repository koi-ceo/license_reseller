<?php
/**
 * 이메일 인증 링크
 * User: holic
 * Date: 2024-04-21
 */

include_once('./_common.php');

// 봇의 메일 링크 크롤링을 방지합니다.
if (function_exists('check_mail_bot')) {
    check_mail_bot(get_ip_address());
}

$mb_email = trim($_GET['mb_email']);
$mb_md5 = trim($_GET['mb_md5']);

$sql = " select * from tbl_member where mb_email = '{$mb_email}' ";
$row = sql_fetch($sql);
if (!$row['no'])
    alert('존재하는 회원이 아닙니다.', KOI_URL);

if ($row['mb_leave_date'] || $row['mb_intercept_date']) {
    alert('탈퇴 또는 차단된 회원입니다.', KOI_URL);
}

if ($row['mb_email_certify']) {
    alert("이미 이메일 인증이 완료된 회원입니다.", KOI_URL);
}

if ($mb_md5) {
    if ($mb_md5 == $row['mb_email_certify_md']) {
        sql_query(" update tbl_member set mb_email_certify = '" . KOI_TIME_YMDHIS . "' where mb_email = '{$mb_email}' ");

        alert("메일인증 처리를 완료 하였습니다.\\n\\n지금부터 로그인 가능합니다.", KOI_URL);
    } else {
        alert('메일인증 요청 정보가 올바르지 않습니다.', KOI_URL);
    }
}

alert('제대로 된 값이 넘어오지 않았습니다.', KOI_URL);
?>
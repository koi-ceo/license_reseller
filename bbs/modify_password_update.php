<?php
/**
 * 정보수정 > 비밀번호 변경 > form update
 * User: holic
 * Date: 2024-04-22
 */

include_once('./_common.php');

if (isset($member) && $member['mb_no']) {
    if ($mb_new_password != $mb_new_password_re) {
        alert('변경할 비밀번호가 일치하지 않습니다.');
    }
    if (strlen($mb_new_password) < 10) {
        alert('비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여 10자리 이상 입력해주세요.');
    }
    $mb_password = get_encrypt_string($mb_new_password);
    sql_query("update tbl_member set mb_password = '{$mb_password}' where mb_no = '{$member['mb_no']}'");

    alert("비밀번호가 변경되었습니다.", KOI_URL);
} else {
    alert("비정상 접근입니다.");
}
?>
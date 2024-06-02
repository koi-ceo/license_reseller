<?php
/**
 * 관리자 > 회원리스트 > 삭제(탈퇴처리)
 * User: holic
 * Date: 2024-06-01
 */

include_once('./_common.php');

$mb_no = $_POST['mb_no'] ?? '';
$action = $_POST['action'] ?? '';

if ($action == 'delete') {
    $sql = "update tbl_member set mb_intercept_date = '" . KOI_TIME_YMD . "' where mb_no = '{$mb_no}'";
    sql_query($sql);
    alert('탈퇴처리 되었습니다.', './member_list.php');
} else if ($action == 'initial') {
    $sql = "update tbl_member set mb_intercept_date = NULL, mb_leave_date = NULL where mb_no = '{$mb_no}'";
    sql_query($sql);
    alert('초기화 되었습니다.', './member_list.php');
}
?>
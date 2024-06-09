<?php
/**
 * 관리자 > 포인트 내역 추가 > search member ajax
 * User: holic
 * Date: 2024-06-09
 */

include_once('./_common.php');

$srch_stx = $_POST['srch_stx'] ?? "";
$member_list = sql_query("select * from tbl_member where mb_email like '%$srch_stx%' or mb_hp like '%$srch_stx%'");

while ($member = sql_fetch_array($member_list)) {
    echo "<option value='{$member['mb_no']}'>{$member['mb_email']} ({$member['mb_hp']})</option>";
}
if ($member_list->num_rows == 0) {
    echo "<option>검색 결과가 없습니다.</option>";
}
?>
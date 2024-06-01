<?php
/**
 * 관리자 > 회원상세 > 회원이미지 보기
 * User: holic
 * Date: 2024-06-01
 */

include_once "./_common.php";

$mb_no = $_GET['mb_no'] ?? '';
$custom_member = sql_fetch("SELECT * FROM tbl_member WHERE mb_no = '{$mb_no}'");
if ($custom_member['mb_image']) {
    ?>
    <img src="<?= KOI_DATA_URL . '/member/' . $custom_member['mb_image'] ?>">
    <?php
}
?>
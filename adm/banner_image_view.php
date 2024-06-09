<?php
/**
 * 관리자 > 배너 > 이미지 상세보기
 * User: holic
 * Date: 2024-06-09
 */

include_once "./_common.php";
$idx = $_GET['idx'] ?? '';
$banner = sql_fetch("SELECT * FROM tbl_banner WHERE idx = '{$idx}'");
if ($banner['image']) {
    ?>
    <img src="<?= KOI_DATA_URL . '/banner/' . $banner['image'] ?>">
    <?php
}
?>
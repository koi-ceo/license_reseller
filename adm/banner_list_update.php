<?php
/**
 * 관리자 > 배너리스트 > 삭제
 * User: holic
 * Date: 2024-06-01
 */

include_once('./_common.php');

$idx = $_POST['idx'] ?? '';
$action = $_POST['action'] ?? '';

if ($action == 'delete') {
    $upload_dir = KOI_DATA_PATH . '/banner/';
    $banner = sql_fetch("select image from tbl_banner where idx = '{$idx}'");
    if ($banner['image']) {
        $file_img = $upload_dir . '/' . $banner['image'];
        @unlink($file_img);
    }

    $sql = "delete from tbl_banner where idx = '{$idx}'";
    sql_query($sql);
    alert('삭제되었습니다.', './banner_list.php');
}
?>
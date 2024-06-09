<?php
/**
 * 관리자 > 배너리스트 > form > update
 * User: holic
 * Date: 2024-05-18
 */

include_once('./_common.php');
include_once(KOI_LIB_PATH . '/thumbnail.lib.php');

$w = isset($_POST['w']) ? trim($_POST['w']) : '';
$idx = isset($_POST['idx']) ? trim($_POST['idx']) : '';
$banner_title = isset($_POST['banner_title']) ? trim(strip_tags($_POST['banner_title'])) : '';
$banner_description = isset($_POST['banner_description']) ? trim(strip_tags($_POST['banner_description'])) : '';
$priority = isset($_POST['priority']) ? trim($_POST['priority']) : '';
$position = isset($_POST['position']) ? trim($_POST['position']) : '';
$alt_tag = isset($_POST['alt_tag']) ? trim(strip_tags($_POST['alt_tag'])) : '';
$title_tag = isset($_POST['title_tag']) ? trim(strip_tags($_POST['title_tag'])) : '';
$link = isset($_POST['link']) ? trim(strip_tags($_POST['link'])) : '';
$visible_start = isset($_POST['visible_start']) ? trim($_POST['visible_start']) : '';
$visible_end = isset($_POST['visible_end']) ? trim($_POST['visible_end']) : '';
$image = $_FILES['image'] ?? '';

if ($w == 'u') { // update
    $sql = "update tbl_banner
               set banner_title = '{$banner_title}',
                   banner_description = '{$banner_description}',
                   priority = '{$priority}',
                   position = '{$position}',
                   alt_tag = '{$alt_tag}',
                   title_tag = '{$title_tag}',
                   link = '{$link}',
                   visible_start = '{$visible_start}',
                   visible_end = '{$visible_end}',
                   last_modify = '" . KOI_TIME_YMDHIS . "'
             where idx = '{$idx}' ";
    sql_query($sql);
} else { // insert
    sql_query("insert into tbl_banner set 
                                    banner_title = '{$banner_title}', 
                                    banner_description = '{$banner_description}', 
                                    priority = '{$priority}', 
                                    position = '{$position}', 
                                    alt_tag = '{$alt_tag}', 
                                    title_tag = '{$title_tag}', 
                                    link = '{$link}', 
                                    visible_start = '{$visible_start}', 
                                    visible_end = '{$visible_end}',
                                    reg_date = '" . KOI_TIME_YMDHIS . "',
                                    last_modify = '" . KOI_TIME_YMDHIS . "'");
    $idx = sql_insert_id();
}

if ($image) {
    $upload_dir = KOI_DATA_PATH . '/banner/';
    if ($image['name']) {
        preg_match('/\.(gif|jpe?g|png)$/i', $image['name'], $m);
        $image_name = date('YmdHis') . (microtime(true) * 10000) . '.' . strtolower($m[1]);
        $image = mb_img_upload($_FILES['image']['tmp_name'], $image_name, $upload_dir);
        if (isset($image['error']) && $image['error']) {
            alert($image['error']);
        }
        // delete old image
        $banner = sql_fetch("select image from tbl_banner where idx = '{$idx}'");
        if ($banner['image']) {
            $file_img = $upload_dir . '/' . $banner['image'];
            @unlink($file_img);
        }
        sql_query("update tbl_banner set image = '{$image}' where idx = '{$idx}'");
    }
}

alert("수정되었습니다.");
?>
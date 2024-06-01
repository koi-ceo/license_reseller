<?php
/**
 * 정보수정 update
 * User: holic
 * Date: 2024-04-21
 */

include_once('./_common.php');

if (isset($member) && $member['mb_no']) {
    $mb_company_num = isset($_POST['mb_company_num']) ? trim($_POST['mb_company_num']) : '';
    $mb_company_email = isset($_POST['mb_company_email']) ? trim($_POST['mb_company_email']) : '';
    $mb_image = $_FILES['mb_image'] ?? '';

    if ($mb_company_num == '') {
        alert('사업자번호를 입력해주세요.');
    }

    if ($mb_company_email == '') {
        alert('이메일을 입력해주세요.');
    }

    $it_img_dir = KOI_DATA_PATH . '/member';
    if ($mb_image['name']) {
        preg_match('#.+\.([a-z]+)$#', $mb_image['name'], $m);
        $image_name = date('YmdHis') . (microtime(true) * 10000) . '.' . strtolower($m[1]);
        $mb_image = mb_img_upload($_FILES['mb_image']['tmp_name'], $image_name, $it_img_dir);
        if (isset($mb_image['error']) && $mb_image['error']) {
            alert($mb_image['error']);
        }
        // delete old image
        if ($member['mb_image']) {
            @unlink($it_img_dir . '/' . $member['mb_image']);
        }
    }

    $sql = "update tbl_member
               set mb_company_num = '{$mb_company_num}',
                   mb_company_email = '{$mb_company_email}' ";
    if ($mb_image) {
        $sql .= ", mb_image = '{$mb_image}' ";
    }
    $sql .= " where mb_email = '{$member['mb_email']}' ";
    sql_query($sql);

    alert('정보가 수정되었습니다.', KOI_URL);
}
?>
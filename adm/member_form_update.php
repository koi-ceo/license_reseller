<?php
/**
 * 관리자 > 회원리스트 > form > update
 * User: holic
 * Date: 2024-05-18
 */

include_once('./_common.php');
include_once(KOI_LIB_PATH . '/thumbnail.lib.php');

$w = isset($_POST['w']) ? trim($_POST['w']) : '';
$mb_no = isset($_POST['mb_no']) ? trim($_POST['mb_no']) : '';
$mb_email = isset($_POST['mb_email']) ? get_email_address(trim($_POST['mb_email'])) : '';
$mb_password = isset($_POST['mb_password']) ? trim($_POST['mb_password']) : '';
$mb_hp = isset($_POST['mb_hp']) ? trim(strip_tags($_POST['mb_hp'])) : '';
$mb_memo = isset($_POST['mb_memo']) ? trim(strip_tags($_POST['mb_memo'])) : '';
$mb_company_email = isset($_POST['mb_company_email']) ? get_email_address(trim($_POST['mb_company_email'])) : '';
$mb_company_num = isset($_POST['mb_company_num']) ? trim($_POST['mb_company_num']) : '';
$mb_image = $_FILES['mb_image'] ?? '';
$mb_hp = hyphen_hp_number($mb_hp);

if (valid_mb_email($mb_email)) {
    alert('이메일 주소가 형식에 맞지 않습니다.');
}
if (strlen($mb_password) < 10) {
    alert('비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여 10자리 이상 입력해주세요.');
}
if (!$mb_hp || strlen($mb_hp) < 10) {
    alert('휴대폰 번호를 정확히 입력해 주세요.');
}
if ($mb_company_email && valid_mb_email($mb_company_email)) {
    alert('회사 이메일 주소가 형식에 맞지 않습니다.');
}

if ($w == 'u') { // update
    $sql_certify = "";
    if ($mb_password) {
        $sql_certify .= " , mb_password = '{$mb_password}' ";
    } else {
        unset($mb_password);
    }
    $sql = "update tbl_member
               set mb_password = '{$mb_password}',
                   mb_hp = '{$mb_hp}',
                   mb_memo = '{$mb_memo}',
                   mb_company_email = '{$mb_company_email}',
                   mb_company_num = '{$mb_company_num}'
                   {$sql_certify}
             where mb_email = '{$mb_email}' ";
    sql_query($sql);
} else { // insert
    $mb_password = get_encrypt_string($mb_password);
    sql_query("insert into tbl_member set 
                                    mb_email = '{$mb_email}', 
                                    mb_password = '{$mb_password}',
                                    mb_level = '2', 
                                    mb_hp = '{$mb_hp}', 
                                    mb_memo = '{$mb_memo}',
                                    mb_company_email = '{$mb_company_email}',
                                    mb_company_num = '{$mb_company_num}',
                                    mb_datetime = '" . KOI_TIME_YMDHIS . "',
                                    mb_date = '" . KOI_TIME_YMD . "',
                                    mb_email_certify = '" . KOI_TIME_YMDHIS . "',
                                    mb_email_certify_md = ''");
    $mb_no = sql_insert_id();
}

if ($mb_image) {
    $it_img_dir = KOI_DATA_PATH . '/member';
    if ($mb_image['name']) {
        preg_match('#.+\.([a-z]+)$#', $mb_image['name'], $m);
        $image_name = date('YmdHis') . (microtime(true) * 10000) . '.' . strtolower($m[1]);
        $mb_image = mb_img_upload($_FILES['mb_image']['tmp_name'], $image_name, $it_img_dir);
        if (isset($mb_image['error']) && $mb_image['error']) {
            alert($mb_image['error']);
        }
        // delete old image
        $custom_member = sql_fetch("select mb_image from tbl_member where mb_no = '{$mb_no}'");
        if ($custom_member['mb_image']) {
            $file_img = $it_img_dir . '/' . $custom_member['mb_image'];
            @unlink($file_img);
        }
        sql_query("update tbl_member set mb_image = '{$mb_image}' where mb_no = '{$mb_no}'");
    }
}

alert("정보가 수정되었습니다.");
?>
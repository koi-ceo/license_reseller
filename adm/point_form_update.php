<?php
/**
 * 관리자 > 포인트 내역 추가 > form update
 * User: holic
 * Date: 2024-06-09
 */

include_once('./_common.php');

$mb_no = $_POST['mb_no'] ?? '';
$point_type = $_POST['point_type'] ?? '';
$contents = isset($_POST['contents']) ? trim(strip_tags($_POST['contents'])) : '';
$point = $_POST['point'] ?? '';
$od_id = $_POST['od_id'] ?? '';

if (!$mb_no) {
    alert('회원정보를 선택해주세요.');
}
if (!$point_type) {
    alert('포인트 타입을 선택해주세요.');
}
if (!$contents) {
    alert('내용을 입력해주세요.');
}
if (!$point) {
    alert('포인트를 입력해주세요.');
}

if ($point_type == '1' || $point_type == '2') { // earn
    if ($point_type == '1') {
        if (!$od_id) {
            alert('주문번호를 입력해주세요.');
        }
        sql_query("insert into tbl_point_earn set 
                                        mb_no = '{$mb_no}', 
                                        type = '0', 
                                        contents = '{$contents}', 
                                        point = '{$point}', 
                                        od_id = '{$od_id}', 
                                        reg_date = '" . KOI_TIME_YMDHIS . "'");
        sql_query("update tbl_member set mb_point = mb_point + '{$point}' where mb_no = '{$mb_no}'");
    } else {
        sql_query("insert into tbl_point_earn set 
                                        mb_no = '{$mb_no}', 
                                        type = '1', 
                                        contents = '{$contents}', 
                                        point = '{$point}', 
                                        reg_date = '" . KOI_TIME_YMDHIS . "'");
        sql_query("update tbl_member set mb_point = mb_point + '{$point}' where mb_no = '{$mb_no}'");
    }
} else { // use
    // call function
}
alert("내역을 추가했습니다.");
?>
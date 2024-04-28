<?php
include_once('../common.php');

if (!isset($member) || !$member['mb_level'] || $member['mb_level'] < 100) {
    alert('관리자만 접근 가능합니다.', KOI_URL);
    exit;
}
?>
<?php
/**
 * 로그인 > 로그인 검사
 * User: holic
 * Date: 2024-04-20
 */

include_once('./_common.php');

if (!$mb_id || !$mb_password)
    alert('회원아이디나 비밀번호가 공백이면 안됩니다.');

$mb = get_member($mb_id);

?>
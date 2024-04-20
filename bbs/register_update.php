<?php
/**
 * 회원가입 > form update
 * User: holic
 * Date: 2024-04-20
 */

include_once('./_common.php');
include_once(KOI_LIB_PATH . '/register.lib.php');
include_once(KOI_LIB_PATH . '/mailer.lib.php');


$mb_password = trim($_POST['mb_password']);
$mb_password_re = trim($_POST['mb_password_re']);
echo $mb_hp;
?>
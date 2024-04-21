<?php
if (!defined('_KOI_')) exit;

function empty_mb_id($reg_mb_id)
{
    if (trim($reg_mb_id) == '')
        return "회원아이디를 입력해 주십시오.";
    else
        return "";
}

function valid_mb_id($reg_mb_id)
{
    if (preg_match("/[^0-9a-z_]+/i", $reg_mb_id))
        return "회원아이디는 영문자, 숫자, _ 만 입력하세요.";
    else
        return "";
}

function count_mb_id($reg_mb_id)
{
    if (strlen($reg_mb_id) < 3)
        return "회원아이디는 최소 3글자 이상 입력하세요.";
    else
        return "";
}

function exist_mb_id($reg_mb_id)
{
    global $koi;

    $reg_mb_id = trim($reg_mb_id);
    if ($reg_mb_id == "") return "";

    $sql = " select count(*) as cnt from tbl_member where mb_email = '$reg_mb_id' ";
    $row = sql_fetch($sql);
    if ($row && $row['cnt'])
        return true;
    else
        return false;
}

function empty_mb_nick($reg_mb_nick)
{
    if (!trim($reg_mb_nick))
        return "닉네임을 입력해 주십시오.";
    else
        return "";
}

function count_mb_nick($reg_mb_nick)
{
    if (strlen($reg_mb_nick) < 4)
        return "닉네임은 한글 2글자, 영문 4글자 이상 입력 가능합니다.";
    else
        return "";
}

function valid_mb_email($reg_mb_email)
{
    if (!preg_match("/([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/", $reg_mb_email))
        return true;
    else
        return false;
}


function empty_mb_name($reg_mb_name)
{
    if (!trim($reg_mb_name))
        return "이름을 입력해 주십시오.";
    else
        return "";
}

function valid_mb_hp($reg_mb_hp)
{
    $reg_mb_hp = preg_replace("/[^0-9]/", "", $reg_mb_hp);
    if (!$reg_mb_hp)
        return "휴대폰번호를 입력해 주십시오.";
    else {
        if (preg_match("/^01[0-9]{8,9}$/", $reg_mb_hp))
            return "";
        else
            return "휴대폰번호를 올바르게 입력해 주십시오.";
    }
}

function exist_mb_hp($reg_mb_hp, $reg_mb_id)
{
    global $koi;

    if (!trim($reg_mb_hp)) return "";

    $reg_mb_hp = hyphen_hp_number($reg_mb_hp);

    $sql = "select count(*) as cnt from tbl_member where mb_hp = '$reg_mb_hp' and mb_id <> '$reg_mb_id' ";
    $row = sql_fetch($sql);

    if ($row && $row['cnt'])
        return true;
    else
        return false;
}

?>
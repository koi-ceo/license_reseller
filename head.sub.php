<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2024-04-10
 */

if (!defined('_KOI_')) exit; // 개별 페이지 접근 불가

$koi['title'] = strip_tags("KOI");
$koi_head_title = strip_tags("코이");
$koi['description'] = "";
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $koi['title'] ?></title>
    <link rel="stylesheet" href="/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.css">
    <link rel="stylesheet" href="/css/common.css">
</head>
<body>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <h1 class="title is-1"><?= $koi['title'] ?></h1>
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item" href="/">회사소개</a>
                <a class="navbar-item" href="/product.php">제품소개</a>
                <a class="navbar-item" href="/contact.php">문의하기</a>
            </div>
        </div>
    </div>
</nav>
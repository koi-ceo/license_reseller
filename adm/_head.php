<?php
if (!defined('_KOI_')) exit; // 개별 페이지 접근 불가

$koi['title'] = $koi['title'] ?? strip_tags("KOI");
$koi['title'] .= " | " . strip_tags("코이");
$koi_head_title = $koi_head_title ?? strip_tags("코이");
$koi['description'] = $koi['description'] ?? "";
$adm_depth1 = $adm_depth1 ?? "";
$adm_depth2 = $adm_depth2 ?? "";
?>
<!DOCTYPE html>
<html lang="en" class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $koi['title'] ?></title>

    <link rel="stylesheet" href="<?= KOI_ADMIN_URL ?>/css/main.min.css">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css">
</head>
<body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="<?= KOI_JS_URL ?>/sweetalert2function.js"></script>


<div id="app">
    <nav id="navbar-main" class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item is-hidden-desktop koi-aside-mobile-toggle">
                <span class="icon"><i class="mdi mdi-forwardburger mdi-24px"></i></span>
            </a>
        </div>
        <div class="navbar-brand is-right">
            <a class="navbar-item is-hidden-desktop koi-navbar-menu-toggle" data-target="navbar-menu">
                <span class="icon"><i class="mdi mdi-dots-vertical"></i></span>
            </a>
        </div>
        <div class="navbar-menu fadeIn animated faster" id="navbar-menu">
            <div class="navbar-end">
                <a title="Log out" class="navbar-item is-desktop-icon-only" href="<?= KOI_BBS_URL ?>/logout.php">
                    <span class="icon"><i class="mdi mdi-logout"></i></span>
                    <span>Log out</span>
                </a>
            </div>
        </div>
    </nav>
    <?php include_once(KOI_ADMIN_PATH . '/aside.php'); ?>

    <section class="section is-title-bar">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <ul>
                        <li><?= $adm_depth1 ?></li>
                        <li><?= $adm_depth2 ?></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

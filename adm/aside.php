<?php
/**
 * aside
 * User: holic
 * Date: 2024-04-28
 */

?>
<aside class="aside is-placed-left is-expanded">
    <div class="aside-tools">
        <div class="aside-tools-label">
            <span><b>KOI</b></span>
        </div>
    </div>
    <div class="menu is-menu-main">
        <p class="menu-label">General</p>
        <ul class="menu-list">
            <li>
                <a href="<?= KOI_ADMIN_URL ?>" class="is-active router-link-active has-icon">
                    <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
                    <span class="menu-item-label">Dashboard</span>
                </a>
            </li>
        </ul>
        <p class="menu-label">배너</p>
        <ul class="menu-list">
            <li>
                <a href="<?= KOI_ADMIN_URL ?>/banner_list.php?position=1" class="has-icon">
                    <span class="icon"><i class="mdi mdi-page-first"></i></span>
                    <span class="menu-item-label">메인</span>
                </a>
            </li>
            <li>
                <a href="<?= KOI_ADMIN_URL ?>/banner_list.php?position=2" class="has-icon">
                    <span class="icon"><i class="mdi mdi-page-last"></i></span>
                    <span class="menu-item-label">하단</span>
                </a>
            </li>
        </ul>
        <p class="menu-label">회원</p>
        <ul class="menu-list">
            <li>
                <a href="<?= KOI_ADMIN_URL ?>/member_list.php" class="has-icon">
                    <span class="icon"><i class="mdi mdi-table"></i></span>
                    <span class="menu-item-label">회원리스트</span>
                </a>
            </li>
            <li>
                <a href="<?= KOI_ADMIN_URL ?>/point_list.php" class="has-icon">
                    <span class="icon"><i class="mdi mdi-table"></i></span>
                    <span class="menu-item-label">포인트내역</span>
                </a>
            </li>
        </ul>
        <p class="menu-label">상품</p>
        <ul class="menu-list">
            <li>
                <a href="tables.html" class="has-icon">
                    <span class="icon"><i class="mdi mdi-table"></i></span>
                    <span class="menu-item-label">상품리스트</span>
                </a>
            </li>
        </ul>
        <p class="menu-label">주문</p>
        <ul class="menu-list">
            <li>
                <a href="tables.html" class="has-icon">
                    <span class="icon"><i class="mdi mdi-cart"></i></span>
                    <span class="menu-item-label">주문내역</span>
                </a>
            </li>
        </ul>
        <p class="menu-label">게시판</p>
        <ul class="menu-list">
            <li>
                <a href="tables.html" class="has-icon">
                    <span class="icon"><i class="mdi mdi-table"></i></span>
                    <span class="menu-item-label">공지사항</span>
                </a>
            </li>
            <li>
                <a href="tables.html" class="has-icon">
                    <span class="icon"><i class="mdi mdi-table"></i></span>
                    <span class="menu-item-label">FAQ</span>
                </a>
            </li>

            <li>
                <a href="forms.html" class="has-icon">
                    <span class="icon"><i class="mdi mdi-table"></i></span>
                    <span class="menu-item-label">견적내역</span>
                </a>
            </li>
        </ul>
    </div>
</aside>

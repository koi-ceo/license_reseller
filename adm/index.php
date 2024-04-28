<?php
include_once('./_common.php');
include_once('./_head.php');
?>

<div id="app">
    <nav id="navbar-main" class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
                <span class="icon"><i class="mdi mdi-forwardburger mdi-24px"></i></span>
            </a>
            <div class="navbar-item has-control">
                <div class="control"><input placeholder="Search everywhere..." class="input"></div>
            </div>
        </div>
        <div class="navbar-brand is-right">
            <a class="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
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
    <aside class="aside is-placed-left is-expanded">
        <div class="aside-tools">
            <div class="aside-tools-label">
                <span><b>Admin</b> One HTML</span>
            </div>
        </div>
        <div class="menu is-menu-main">
            <p class="menu-label">General</p>
            <ul class="menu-list">
                <li>
                    <a href="index.html" class="is-active router-link-active has-icon">
                        <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
                        <span class="menu-item-label">Dashboard</span>
                    </a>
                </li>
            </ul>
            <p class="menu-label">Examples</p>
            <ul class="menu-list">
                <li>
                    <a href="tables.html" class="has-icon">
                        <span class="icon has-update-mark"><i class="mdi mdi-table"></i></span>
                        <span class="menu-item-label">Tables</span>
                    </a>
                </li>
                <li>
                    <a href="forms.html" class="has-icon">
                        <span class="icon"><i class="mdi mdi-square-edit-outline"></i></span>
                        <span class="menu-item-label">Forms</span>
                    </a>
                </li>
                <li>
                    <a href="profile.html" class="has-icon">
                        <span class="icon"><i class="mdi mdi-account-circle"></i></span>
                        <span class="menu-item-label">Profile</span>
                    </a>
                </li>
                <li>
                    <a class="has-icon has-dropdown-icon">
                        <span class="icon"><i class="mdi mdi-view-list"></i></span>
                        <span class="menu-item-label">Submenus</span>
                        <div class="dropdown-icon">
                            <span class="icon"><i class="mdi mdi-plus"></i></span>
                        </div>
                    </a>
                    <ul>
                        <li>
                            <a href="#void">
                                <span>Sub-item One</span>
                            </a>
                        </li>
                        <li>
                            <a href="#void">
                                <span>Sub-item Two</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <p class="menu-label">About</p>
            <ul class="menu-list">
                <li>
                    <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" target="_blank" class="has-icon">
                        <span class="icon"><i class="mdi mdi-github-circle"></i></span>
                        <span class="menu-item-label">GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://justboil.me/bulma-admin-template/free-html-dashboard/" class="has-icon">
                        <span class="icon"><i class="mdi mdi-help-circle"></i></span>
                        <span class="menu-item-label">About</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
    <section class="section is-title-bar">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <ul>
                        <li>Admin</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <div class="buttons is-right">
                        <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" target="_blank" class="button is-primary">
                            <span class="icon"><i class="mdi mdi-github-circle"></i></span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="hero is-hero-bar">
        <div class="hero-body">
            <div class="level">
                <div class="level-left">
                    <div class="level-item"><h1 class="title">
                            Dashboard
                        </h1></div>
                </div>
                <div class="level-right" style="display: none;">
                    <div class="level-item"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-main-section">
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="card tile is-child">
                    <div class="card-content">
                        <div class="level is-mobile">
                            <div class="level-item">
                                <div class="is-widget-label"><h3 class="subtitle is-spaced">
                                        Clients
                                    </h3>
                                    <h1 class="title">
                                        512
                                    </h1>
                                </div>
                            </div>
                            <div class="level-item has-widget-icon">
                                <div class="is-widget-icon"><span class="icon has-text-primary is-large"><i
                                                class="mdi mdi-account-multiple mdi-48px"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="card tile is-child">
                    <div class="card-content">
                        <div class="level is-mobile">
                            <div class="level-item">
                                <div class="is-widget-label"><h3 class="subtitle is-spaced">
                                        Sales
                                    </h3>
                                    <h1 class="title">
                                        $7,770
                                    </h1>
                                </div>
                            </div>
                            <div class="level-item has-widget-icon">
                                <div class="is-widget-icon"><span class="icon has-text-info is-large"><i
                                                class="mdi mdi-cart-outline mdi-48px"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="card tile is-child">
                    <div class="card-content">
                        <div class="level is-mobile">
                            <div class="level-item">
                                <div class="is-widget-label"><h3 class="subtitle is-spaced">
                                        Performance
                                    </h3>
                                    <h1 class="title">
                                        256%
                                    </h1>
                                </div>
                            </div>
                            <div class="level-item has-widget-icon">
                                <div class="is-widget-icon"><span class="icon has-text-success is-large"><i
                                                class="mdi mdi-finance mdi-48px"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-finance"></i></span>
                    Performance
                </p>
                <a href="#" class="card-header-icon">
                    <span class="icon"><i class="mdi mdi-reload"></i></span>
                </a>
            </header>
            <div class="card-content">
                <div class="chart-area">
                    <div style="height: 100%;">
                        <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                                <div></div>
                            </div>
                            <div class="chartjs-size-monitor-shrink">
                                <div></div>
                            </div>
                        </div>
                        <canvas id="big-line-chart" width="2992" height="1000" class="chartjs-render-monitor" style="display: block; height: 400px; width: 1197px;"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="card has-table has-mobile-sort-spaced">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
                    Clients
                </p>
                <a href="#" class="card-header-icon">
                    <span class="icon"><i class="mdi mdi-reload"></i></span>
                </a>
            </header>
            <div class="card-content">
                <div class="b-table has-pagination">
                    <div class="table-wrapper has-mobile-cards">
                        <table class="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>City</th>
                                <th>Progress</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Rebecca Bauch</td>
                                <td data-label="Company">Daugherty-Daniel</td>
                                <td data-label="City">South Cory</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="79">79</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Oct 25, 2020">Oct 25, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Felicita Yundt</td>
                                <td data-label="Company">Johns-Weissnat</td>
                                <td data-label="City">East Ariel</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="67">67</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Jan 8, 2020">Jan 8, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Mr. Larry Satterfield V</td>
                                <td data-label="Company">Hyatt Ltd</td>
                                <td data-label="City">Windlerburgh</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="16">16</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Dec 18, 2020">Dec 18, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Mr. Broderick Kub</td>
                                <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                                <td data-label="City">New Kirstenport</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="71">71</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Sep 13, 2020">Sep 13, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/barry-weber.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Barry Weber</td>
                                <td data-label="Company">Schulist, Mosciski and Heidenreich</td>
                                <td data-label="City">East Violettestad</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="80">80</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Jul 24, 2020">Jul 24, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/bert-kautzer-md.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Bert Kautzer MD</td>
                                <td data-label="Company">Gerhold and Sons</td>
                                <td data-label="City">Mayeport</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="62">62</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Mar 30, 2020">Mar 30, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/lonzo-steuber.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Lonzo Steuber</td>
                                <td data-label="Company">Skiles Ltd</td>
                                <td data-label="City">Marilouville</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="17">17</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Feb 12, 2020">Feb 12, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/jonathon-hahn.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Jonathon Hahn</td>
                                <td data-label="Company">Flatley Ltd</td>
                                <td data-label="City">Billiemouth</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="74">74</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Dec 30, 2020">Dec 30, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/ryley-wuckert.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Ryley Wuckert</td>
                                <td data-label="Company">Heller-Little</td>
                                <td data-label="City">Emeraldtown</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="54">54</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Jun 28, 2020">Jun 28, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="is-image-cell">
                                    <div class="image">
                                        <img src="https://avatars.dicebear.com/v2/initials/sienna-hayes.svg" class="is-rounded">
                                    </div>
                                </td>
                                <td data-label="Name">Sienna Hayes</td>
                                <td data-label="Company">Conn, Jerde and Douglas</td>
                                <td data-label="City">Jonathanfort</td>
                                <td data-label="Progress" class="is-progress-cell">
                                    <progress max="100" class="progress is-small is-primary" value="55">55</progress>
                                </td>
                                <td data-label="Created">
                                    <small class="has-text-grey is-abbr-like" title="Mar 7, 2020">Mar 7, 2020</small>
                                </td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <button class="button is-small is-primary" type="button">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </button>
                                        <button class="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                            <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="notification">
                        <div class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <div class="buttons has-addons">
                                        <button type="button" class="button is-active">1</button>
                                        <button type="button" class="button">2</button>
                                        <button type="button" class="button">3</button>
                                    </div>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="level-item">
                                    <small>Page 1 of 3</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div id="sample-modal" class="modal">
    <div class="modal-background jb-modal-close"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Confirm action</p>
            <button class="delete jb-modal-close" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <p>This will permanently delete <b>Some Object</b></p>
            <p>This is sample modal</p>
        </section>
        <footer class="modal-card-foot">
            <button class="button jb-modal-close">Cancel</button>
            <button class="button is-danger jb-modal-close">Delete</button>
        </footer>
    </div>
    <button class="modal-close is-large jb-modal-close" aria-label="close"></button>
</div>

<script type="text/javascript" src="<?= KOI_ADMIN_URL ?>/js/main.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script type="text/javascript" src="<?= KOI_ADMIN_URL ?>/js/chart.sample.js"></script>
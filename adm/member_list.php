<?php
/**
 * 관리자 > 회원리스트
 * User: holic
 * Date: 2024-04-28
 */

include_once('./_common.php');
$adm_depth1 = '관리자';
$koi['title'] = $adm_depth2 = '회원리스트';
include_once('./_head.php');

$qstr = '';
$sql_search = "where 1";
if (isset($sfl) && $sfl && isset($stx) && $stx) {
    $sql_search .= " and ({$sfl} like '%{$stx}%') ";
    $qstr = "sfl={$sfl}&amp;stx={$stx}";
}
if (!isset($sst) || !$sst) {
    $sst = "mb_no";
    $sod = "desc";
}
$sql_order = " order by {$sst} {$sod} ";

$sql_common = " from tbl_member mb";

$sql = " select count(*) as cnt {$sql_common} {$sql_search} {$sql_order} ";
$row = sql_fetch($sql);
$total_count = $row['cnt'] ?? 0;

$rows = 10; // 한 페이지에 보여줄 행의 수
$total_page = ceil($total_count / $rows);  // 전체 페이지 계산
if (!isset($page) || $page < 1) $page = 1; // 페이지가 없으면 첫 페이지 (1 페이지)
$from_record = ($page - 1) * $rows; // 시작 열을 구함

$sql = " select *, (CASE WHEN EXISTS (SELECT 1 FROM tbl_shop_order od WHERE od.mb_no = mb.mb_no and (od.od_status = '완료' or od.od_status = '입금' or od.od_status = '준비' or od.od_status = '완료')) THEN 1 END) AS first_purchase {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";
$result = sql_query($sql);
?>
    <section class="section is-main-section">
        <div class="card has-table">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-account-search"></i></span>
                    회원검색
                </p>
            </header>
            <form name="member_form" method="get">
                <div class="card-content">
                    <div class="b-table has-pagination">
                        <div class="table-wrapper has-mobile-cards">
                            <div class="field-body">
                                <div class="field is-narrow">
                                    <div class="control">
                                        <div class="select is-fullwidth">
                                            <select name="sfl" id="sfl">
                                                <option value="mb_email" <?= isset($sfl) && $sfl == 'mb_email' ? "selected='selected'" : "" ?>>회원이메일</option>
                                                <option value="mb_hp" <?= isset($sfl) && $sfl == 'mb_hp' ? "selected='selected'" : "" ?>>휴대폰</option>
                                                <option value="mb_company_num" <?= isset($sfl) && $sfl == 'mb_company_num' ? "selected='selected'" : "" ?>>사업자번호</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Search anything" name="stx" id="stx" value="<?= $stx ?? ''; ?>">
                                        <span class="icon is-small is-left"><i class="mdi mdi-account-search"></i></span>
                                    </p>
                                </div>
                                <div class="control">
                                    <button type="submit" class="button is-info">
                                        <span>검색하기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </section>
    <section class="section is-main-section">
        <div class="card has-table">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
                    Member
                </p>
                <a href="./member_list.php" class="card-header-icon">
                    <span class="icon"><i class="mdi mdi-reload"></i></span>
                </a>
            </header>
            <div class="card-content">
                <div class="b-table has-pagination">
                    <div class="table-wrapper has-mobile-cards">
                        <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
                            <thead>
                            <tr>
                                <th><?php echo subject_sort_link('mb_no', $qstr) ?>No.</a></th>
                                <th><?php echo subject_sort_link('mb_email', $qstr) ?>이메일</a></th>
                                <th><?php echo subject_sort_link('mb_hp', $qstr) ?>연락처</a></th>
                                <th><?php echo subject_sort_link('mb_company_num', $qstr) ?>사업자번호</a></th>
                                <th><?php echo subject_sort_link('mb_company_email', $qstr) ?>회사이메일</a></th>
                                <th><?php echo subject_sort_link('mb_point', $qstr) ?>포인트</a></th>
                                <th><?php echo subject_sort_link('mb_date', $qstr) ?>회원가입일</a></th>
                                <th>단계</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php while ($row = sql_fetch_array($result)) {
                                $mb_step = 0;
                                if ($row['first_purchase']) {
                                    $mb_step = 100;
                                } else if ($row['mb_company_num']) {
                                    $mb_step = 66;
                                } else if ($row['mb_email_certify']) {
                                    $mb_step = 33;
                                }
                                ?>
                                <tr>
                                    <td class="is-image-cell"><?= $row['mb_no'] ?></td>
                                    <td data-label="email"><?= $row['mb_email'] ?></td>
                                    <td data-label="hp"><?= $row['mb_hp'] ?></td>
                                    <td data-label="company_num"><?= $row['mb_company_num'] ?></td>
                                    <td><?= $row['mb_company_email'] ?></td>
                                    <td><?= $row['mb_point'] > 0 ? number_format($row['mb_point']) : 0; ?></td>
                                    <td><?= $row['mb_date'] ?></td>
                                    <td data-label="Progress" class="is-progress-cell">
                                        <?php if ($row['mb_intercept_date']) { ?>
                                            <progress max="100" class="progress is-small is-danger" value="100">100</progress>
                                        <?php } else if ($row['mb_leave_date']) { ?>
                                            <progress max="100" class="progress is-small is-black" value="100">100</progress>
                                        <?php } else { ?>
                                            <progress max="100" class="progress is-small is-primary" value="<?= $mb_step ?>"><?= $mb_step ?></progress>
                                        <?php } ?>
                                    </td>
                                    <td class="is-actions-cell">
                                        <div class="buttons is-right">
                                            <a class="button is-small is-primary" href="<?= KOI_ADMIN_URL ?>/member_form.php?mb_no=<?= $row['mb_no'] ?>">
                                                <span class="icon"><i class="mdi mdi-eye"></i></span>
                                            </a>
                                            <a class="button is-small is-danger koi-modal" data-target="sample-modal" type="button">
                                                <span class="icon"><i class="mdi mdi-trash-can"></i></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            <?php } ?>
                            </tbody>
                        </table>
                    </div>
                    <?php echo get_paging(15, $page, $total_page, '?' . $qstr . '&amp;page='); ?>
                </div>
            </div>
        </div>
    </section>

    <div id="sample-modal" class="modal">
        <div class="modal-background koi-modal-close"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Confirm action</p>
                <button class="delete koi-modal-close" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <p>This will permanently delete <b>Some Object</b></p>
                <p>This is sample modal</p>
            </section>
            <footer class="modal-card-foot">
                <button class="button koi-modal-close">Cancel</button>
                <button class="button is-danger koi-modal-close">Delete</button>
            </footer>
        </div>
        <button class="modal-close is-large koi-modal-close" aria-label="close"></button>
    </div>

<?php include_once(KOI_ADMIN_PATH . '/_tail.php'); ?>
<?php
/**
 * 관리자 > 포인트 내역
 * User: holic
 * Date: 2024-06-09
 */

include_once('./_common.php');
$adm_depth1 = '관리자';
$koi['title'] = $adm_depth2 = '포인트내역';
include_once('./_head.php');

$qstr = '';
$sql_search = "where 1";
if (isset($sfl) && $sfl && isset($stx) && $stx) {
    $sql_search .= " and ({$sfl} like '%{$stx}%') ";
    $qstr = "sfl={$sfl}&amp;stx={$stx}";
}
if (!isset($sst) || !$sst) {
    $sst = "reg_date";
    $sod = "desc";
}
$sql_order = " order by {$sst} {$sod} ";

$sql_common = "FROM 
(
select idx, mb_no, od_id, point, contents, type, reg_date, '1' as flag from tbl_point_earn
union all
select idx, mb_no, od_id, point, contents, type, reg_date, '2' as flag from tbl_point_use 
) point_list
 left join (select mb_no, mb_email, mb_company_num, mb_hp from tbl_member) mb on mb.mb_no=point_list.mb_no
 ";

$sql = " select count(*) as cnt {$sql_common} {$sql_search} {$sql_order} ";
$row = sql_fetch($sql);
$total_count = $row['cnt'] ?? 0;

$rows = 10; // 한 페이지에 보여줄 행의 수
$total_page = ceil($total_count / $rows);  // 전체 페이지 계산
if (!isset($page) || $page < 1) $page = 1; // 페이지가 없으면 첫 페이지 (1 페이지)
$from_record = ($page - 1) * $rows; // 시작 열을 구함

$sql = " select * {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";
$result = sql_query($sql);
?>

    <section class="section is-main-section">
        <div class="card has-table">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-account-search"></i></span>
                    회원검색
                </p>
                <a href="./point_list.php" class="card-header-icon">
                    <span class="icon"><i class="mdi mdi-reload"></i></span>
                </a>
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
                    Point List
                </p>
                <a href="./point_list.php" class="card-header-icon">
                    <span class="icon"><i class="mdi mdi-reload"></i></span>
                </a>
            </header>
            <div class="card-content">
                <div class="b-table has-pagination">
                    <div class="table-wrapper has-mobile-cards">
                        <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
                            <thead>
                            <tr>
                                <th><?php echo subject_sort_link('reg_date', $qstr) ?>No.</a></th>
                                <th><?php echo subject_sort_link('mb_email', $qstr) ?>이메일</a></th>
                                <th><?php echo subject_sort_link('mb_hp', $qstr) ?>연락처</a></th>
                                <th><?php echo subject_sort_link('mb_company_num', $qstr) ?>사업자번호</a></th>
                                <th><?php echo subject_sort_link('contents', $qstr) ?>내역</a></th>
                                <th><?php echo subject_sort_link('point', $qstr) ?>포인트</a></th>
                                <th><?php echo subject_sort_link('reg_date', $qstr) ?>등록일시</a></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php while ($row = sql_fetch_array($result)) {
                                ?>
                                <tr>
                                    <td class="is-image-cell"><?= $row['mb_no'] ?></td>
                                    <td data-label="email"><?= $row['mb_email'] ?></td>
                                    <td data-label="hp"><?= $row['mb_hp'] ?></td>
                                    <td data-label="company_num"><?= $row['mb_company_num'] ?></td>
                                    <td><?= $row['contents'] ?></td>
                                    <td><?= $row['point'] > 0 ? number_format($row['point']) : 0; ?></td>
                                    <td><?= $row['reg_date'] ?></td>
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
<?php include_once(KOI_ADMIN_PATH . '/_tail.php'); ?>
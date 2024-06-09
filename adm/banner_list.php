<?php
/**
 * 관리자 > 배너리스트
 * User: holic
 * Date: 2024-05-18
 */

include_once('./_common.php');
$adm_depth1 = '관리자';
$position = $position ?? 1;
$position_text = $position == 1 ? '메인' : '하단';
$koi['title'] = $adm_depth2 = '배너리스트(' . $position_text . ')';
include_once('./_head.php');

$visible_start = $visible_start ?? '';
$visible_end = $visible_end ?? '';
$qstr = 'position=' . $position;
$sql_search = "where position = '{$position}'";
if ($visible_start && $visible_end) {
    $qstr = "&ampvisible_start={$visible_start}&amp;visible_end={$visible_end}";
    $sql_search .= " and (visible_start <= '{$visible_end}' and visible_end >= '{$visible_start}')";
} else if ($visible_start) {
    $qstr = "&ampvisible_start={$visible_start}";
    $sql_search .= " and visible_start >= '{$visible_start}'";
} else if ($visible_end) {
    $qstr = "&ampvisible_end={$visible_end}";
    $sql_search .= " and visible_end <= '{$visible_end}'";
}
if (!isset($sst) || !$sst) {
    $sst = "idx";
    $sod = "desc";
}
$sql_order = " order by {$sst} {$sod} ";

$sql_common = " from tbl_banner";

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
                <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
                Banner
            </p>
            <div class="level-right">
                <div class="level-item">
                    <a href="./banner_form.php" class="button is-primary">
                        <span class="icon"><i class="mdi mdi-plus"></i></span>
                        <span>배너추가</span>
                    </a>
                </div>
            </div>
            <a href="./banner_list.php" class="card-header-icon">
                <span class="icon"><i class="mdi mdi-reload"></i></span>
            </a>
        </header>
        <div class="card-content">
            <div class="b-table has-pagination">
                <div class="table-wrapper has-mobile-cards">
                    <table class="table is-fullwidth is-striped is-hoverable is-fullwidth">
                        <thead>
                        <tr>
                            <th><?php echo subject_sort_link('idx', $qstr) ?>No.</a></th>
                            <th>이미지</th>
                            <th><?php echo subject_sort_link('priority', $qstr) ?>우선순위</a></th>
                            <th><?php echo subject_sort_link('visible_start', $qstr) ?>노출시작일시</a></th>
                            <th><?php echo subject_sort_link('visible_end', $qstr) ?>노출마감일시</a></th>
                            <th><?php echo subject_sort_link('reg_date', $qstr) ?>등록일시</a></th>
                            <th><?php echo subject_sort_link('last_modify', $qstr) ?>최종수정일시</a></th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php while ($row = sql_fetch_array($result)) { ?>
                            <tr>
                                <td class="is-image-cell"><?= $row['idx'] ?></td>
                                <td><a href="./banner_image_view.php?idx=<?= $row['idx'] ?>" onclick="return f_href_form(this.href);" target="_blank"><?= $row['image'] ?></a></td>
                                <td><?= $row['priority']; ?></td>
                                <td><?= $row['visible_start'] ?></td>
                                <td><?= $row['visible_end']; ?></td>
                                <td><?= $row['reg_date']; ?></td>
                                <td><?= $row['last_modify']; ?></td>
                                <td class="is-actions-cell">
                                    <div class="buttons is-right">
                                        <a class="button is-small is-primary" href="<?= KOI_ADMIN_URL ?>/banner_form.php?w=u&idx=<?= $row['idx'] ?>">
                                            <span class="icon"><i class="mdi mdi-eye"></i></span>
                                        </a>
                                        <a class="button is-small is-danger delete_banner" type="button" data-idx="<?= $row['idx'] ?>" data-action="delete">
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


<script>
    function f_href_form(href) {
        window.open(href, 'win_view_image', 'left=0,top=0,scrollbars=1,resizable=1,location=0,width=800,height=600');
        return false;
    }

    $(document).on("click", ".delete_banner", function () {
        let action = $(this).data('action');
        let msg = "해당 배너를 삭제 하시겠습니까?";
        let param = {
            idx   : $(this).data('idx'),
            action: action
        };
        sweetConfirm(msg, "banner_list_update.php", param);
    });
</script>

<?php include_once(KOI_ADMIN_PATH . '/_tail.php'); ?>

<?php
/**
 * 관리자 > 배너리스트 > form
 * User: holic
 * Date: 2024-05-18
 */

include_once('./_common.php');
$adm_depth1 = '관리자';

if (!isset($w) || $w == '') {
    $w = '';
    $koi['title'] = $adm_depth2 = '배너추가';
    $banner = [
        'banner_title' => '',
        'banner_description' => '',
        'image' => '',
        'priority' => 0,
        'position' => '1',
        'alt_tag' => '',
        'title_tag' => '',
        'link' => '',
        'visible_start' => date('Y-m-d'),
        'visible_end' => date('Y-m-d', strtotime('+1 month')),
        'reg_date' => date('Y-m-d H:i:s'),
        'last_modify' => date('Y-m-d H:i:s')
    ];
} else {
    $koi['title'] = $adm_depth2 = '배너수정';
    $idx = $idx ?? '';
    if (!$idx) alert('잘못된 접근입니다.');
    $sql = "select * from tbl_banner where idx = '{$idx}'";
    $banner = sql_fetch($sql);
}
include_once('./_head.php');
include_once(KOI_PLUGIN_PATH . '/jquery-ui/datepicker.php');
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
                    <a href="./banner_list.php" class="button is-primary">
                        <span class="icon"><i class="mdi mdi-format-list-bulleted"></i></span>
                        <span>목록</span>
                    </a>
                </div>
            </div>
        </header>
        <div class="card-content">
            <form name="fitemform" method="post" action="./banner_form_update.php" enctype="multipart/form-data">
                <input type="hidden" name="w" value="<?php echo $w; ?>">
                <input type="hidden" name="idx" value="<?php echo $idx; ?>">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">노출기간</label>
                    </div>
                    <div class="field-body is-narrow">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input type="text" class="input" name="visible_start" id="visible_start" value="<?php echo $banner['visible_start']; ?>" placeholder="시작일" required>
                            </p>
                            <p class="control">
                                <a class="button is-static">~</a>
                            </p>
                            <p class="control is-expanded">
                                <input type="text" class="input" name="visible_end" id="visible_end" value="<?php echo $banner['visible_end']; ?>" placeholder="종료일" required>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">배너이미지</label>
                    </div>
                    <div class="field-body">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input type="file" class="input" name="banner_image" id="banner_image" accept="image/*" <?php echo $w == 'u' ? '' : 'required'; ?>>
                            </p>
                            <?php if ($w == 'u') { ?>
                                <p class="control">
                                    <a href="<?php echo $banner['banner_image']; ?>" target="_blank" class="button is-primary">
                                        <span class="icon"><i class="mdi mdi-image"></i></span>
                                        <span>이미지보기</span>
                                    </a>
                                </p>
                            <?php } ?>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">우선순위</label>
                    </div>
                    <div class="field-body is-narrow">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input type="number" class="input" name="priority" id="priority" value="<?php echo $banner['priority']; ?>" required>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">링크</label>
                    </div>
                    <div class="field-body is-narrow">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input type="text" class="input" name="link" id="link" value="<?php echo $banner['link']; ?>" required>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">등록일시</label>
                    </div>
                    <div class="field-body is-narrow">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input type="text" class="input" name="reg_date" id="reg_date" value="<?php echo $banner['reg_date']; ?>" readonly>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">최종수정일시</label>
                    </div>
                    <div class="field-body is-narrow">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input type="text" class="input" name="last_modify" id="last_modify" value="<?php echo $banner['last_modify']; ?>" readonly>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label"></div>
                    <div class="field-body is-narrow">
                        <div class="field is-grouped">
                            <p class="control">
                                <button type="submit" class="button is-primary">
                                    <span class="icon"><i class="mdi mdi-check"></i></span>
                                    <span>저장</span>
                                </button>
                            </p>
                            <p class="control">
                                <button type="button" class="button is-danger" onclick="history.back();">
                                    <span class="icon"><i class="mdi mdi-close"></i></span>
                                    <span>취소</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
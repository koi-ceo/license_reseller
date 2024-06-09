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
        'visible_start' => date('Y-m-d H:i'),
        'visible_end' => date('Y-m-d H:i', strtotime('+1 month')),
        'reg_date' => date('Y-m-d H:i:s'),
        'last_modify' => date('Y-m-d H:i:s')
    ];
} else {
    $koi['title'] = $adm_depth2 = '배너수정';
    $idx = $idx ?? '';
    if (!$idx) alert('잘못된 접근입니다.');
    $sql = "select *, LEFT(visible_start, 16) as visible_start, LEFT(visible_end, 16) as visible_end from tbl_banner where idx = '{$idx}'";
    $banner = sql_fetch($sql);
}
include_once('./_head.php');
include_once(KOI_PLUGIN_PATH . '/jquery-ui/datepicker.php');
?>
    <section class="section is-main-section">
        <form name="fbanner" id="fbanner" action="./banner_form_update.php" onsubmit="return fbanner_submit(this);" method="post" enctype="multipart/form-data">
            <input type="hidden" name="w" value="<?= $w ?>">
            <input type="hidden" name="idx" value="<?= $idx ?>">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        <span class="icon"><i class="mdi mdi-ballot"></i></span>
                        배너
                    </p>
                </header>
                <div class="card-content">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">타이틀</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input" name="banner_title" type="text" placeholder="배너 타이틀" value="<?= $banner['banner_title'] ?>">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal"><label class="label">디스크립션</label></div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" name="banner_description" type="text" placeholder="디스크립션" value="<?= $banner['banner_description'] ?>">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal"><label class="label">배너이미지</label></div>
                        <div class="field-body">
                            <div class="field">
                                <div class="field file">
                                    <label class="upload control">
                                        <a class="button is-info">
                                            <span class="icon"><i class="mdi mdi-upload"></i></span>
                                            <span>파일 업로드</span>
                                        </a>
                                        <input type="file" name="image" id="image">
                                        <div class="field-label">
                                            <!-- Left empty for spacing -->
                                        </div>
                                        <?php if ($banner['image']) { ?>
                                            <a class="button is-success" href="./banner_image_view.php?idx=<?= $idx ?>" onclick="return f_href_form(this.href);" target="_blank">
                                                <span class="icon"><i class="mdi mdi-view-carousel"></i></span>
                                                <span>파일 보기</span>
                                            </a>
                                        <?php } ?>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">배너 링크</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input" type="text" name="link" value="<?= $banner['link'] ?>" placeholder="full link">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Alt Tag</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input" type="text" name="alt_tag" value="<?= $banner['alt_tag'] ?>" placeholder="alt tag">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Title Tag</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input" type="text" name="title_tag" value="<?= $banner['title_tag'] ?>" placeholder="title tag">
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <!-- Left empty for spacing -->
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="field is-grouped">
                                    <div class="control">
                                        <button type="submit" class="button is-primary">
                                            <span>저장하기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">노출위치</label>
                        </div>
                        <div class="field-body">
                            <div class="field is-narrow">
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select name="position">
                                            <option value="1">메인</option>
                                            <option value="2">하단</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">우선순위(낮을수록 높음)</label>
                        </div>
                        <div class="field-body">
                            <div class="field is-narrow">
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select name="priority">
                                            <?php for ($i = 1; $i <= 100; $i++) { ?>
                                                <option value="<?= $i ?>"><?= $i ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">노출시작일시</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" id="visible_start" name="visible_start" type="datetime" value="<?= $banner['visible_start'] ?>" placeholder="노출시작일시">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">노출종료일시</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" name="visible_end" type="datetime" value="<?= $banner['visible_end'] ?>" placeholder="노출종료일시">
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php if ($w == 'u') { ?>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">등록일시</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-warning" type="text" value="<?= $banner['reg_date'] ?>" readonly="readonly">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">최종수정일시</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <input class="input is-warning" type="text" value="<?= $banner['last_modify'] ?>" readonly="readonly">
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <hr>
                    <div class="field is-horizontal">
                        <div class="field-label">
                            <!-- Left empty for spacing -->
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="field is-grouped">
                                    <div class="control">
                                        <button type="submit" class="button is-primary">
                                            <span>저장하기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>

    <script>
        function fbanner_submit(f) {
            if (!f.image.value.match(/\.(gif|jpe?g|png)$/i) && f.image.value) {
                sweet_alert('업로드는 이미지 파일만 가능합니다.', 1);
                return false;
            }
            return true;
        }

        function f_href_form(href) {
            window.open(href, 'win_view_image', 'left=0,top=0,scrollbars=1,resizable=1,location=0,width=800,height=600');
            return false;
        }
    </script>

<?php include_once(KOI_ADMIN_PATH . '/_tail.php'); ?>
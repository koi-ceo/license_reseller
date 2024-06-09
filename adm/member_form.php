<?php
/**
 * 관리자 > 회원리스트 > form
 * User: holic
 * Date: 2024-05-18
 */

include_once('./_common.php');
$adm_depth1 = '관리자';

if (!isset($w) || $w == '') {
    $w = $mb_no = '';
    $koi['title'] = $adm_depth2 = '회원추가';
    $custom_member = array();
    $custom_member['mb_email'] = $custom_member['mb_hp'] = $custom_member['mb_datetime'] = $custom_member['mb_login_ip'] = $custom_member['mb_email_certify'] = $custom_member['mb_intercept_date'] = $custom_member['mb_leave_date'] = $custom_member['mb_today_login'] = $custom_member['mb_memo'] = $custom_member['mb_company_email'] = $custom_member['mb_company_num'] = $custom_member['mb_image'] = '';
    $custom_member['mb_point'] = $custom_member['tot_earn_point'] = $custom_member['tot_visit_cnt'] = $custom_member['tot_od_cnt'] = $custom_member['tot_od_price'] = 0;
} else {
    $koi['title'] = $adm_depth2 = '회원상세';
    $custom_member = sql_fetch("SELECT *, LEFT(mb_intercept_date, 16) as mb_intercept_date, IFNULL((select sum(point) from tbl_point_earn where mb_no = mb.mb_no), 0) as tot_earn_point, IFNULL((select count(idx) from tbl_member_visit where mb_no = mb.mb_no), 0) as tot_visit_cnt, IFNULL((select count(od_id) from tbl_shop_order where mb_no = mb.mb_no and (od_status != '주문' or od_status != '취소')), 0) as tot_od_cnt, IFNULL((select sum(od_receipt_price) from tbl_shop_order where mb_no = mb.mb_no and (od_status != '주문' or od_status != '취소')), 0) as tot_od_price FROM tbl_member mb WHERE mb_no = '{$mb_no}'");
}
include_once('./_head.php');
include_once(KOI_PLUGIN_PATH . '/jquery-ui/datepicker.php');
?>
    <section class="section is-main-section">
        <form name="fmember" id="fmember" action="./member_form_update.php" onsubmit="return fmember_submit(this);" method="post" enctype="multipart/form-data">
            <input type="hidden" name="w" value="<?= $w ?>">
            <input type="hidden" name="mb_no" value="<?= $mb_no ?>">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        <span class="icon"><i class="mdi mdi-ballot"></i></span>
                        회원 기본정보
                    </p>
                </header>
                <div class="card-content">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">회원가입정보</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input" name="mb_email" type="email" placeholder="Email" value="<?= $custom_member['mb_email'] ?>">
                                    <span class="icon is-small is-left"><i class="mdi mdi-mail"></i></span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" name="mb_hp" type="text" placeholder="연락처" value="<?= $custom_member['mb_hp'] ?>">
                                    <span class="icon is-small is-left"><i class="mdi mdi-phone"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal"><label class="label">비밀번호</label></div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" name="mb_password" type="text" placeholder="New Password">
                                    <span class="icon is-small is-left"><i class="mdi mdi-textbox-password"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">가입일시</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input is-warning" type="text" value="<?= $custom_member['mb_datetime'] ?>" readonly="readonly" placeholder="가입일시">
                                    <span class="icon is-small is-left"><i class="mdi mdi-timeline-clock"></i></span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input is-warning" type="text" value="<?= $custom_member['mb_login_ip'] ?>" readonly="readonly" placeholder="로그인아이피">
                                    <span class="icon is-small is-left"><i class="mdi mdi-ip-network"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">이메일 인증일시</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-warning" type="text" value="<?= $custom_member['mb_email_certify'] ?>" readonly="readonly" placeholder="이메일인증일시">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">차단일시</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" name="mb_intercept_date" type="datetime_init" value="<?= $custom_member['mb_intercept_date'] ?>" placeholder="차단일시">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">탈퇴일시</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input" name="mb_leave_date" type="date_init" value="<?= $custom_member['mb_leave_date'] ?>" placeholder="탈퇴일시">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">최종로그인</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-warning" type="text" value="<?= $custom_member['mb_today_login'] ?>" readonly="readonly" placeholder="최종르그인">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">관리자메모</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <textarea class="textarea" name="mb_memo"><?= $custom_member['mb_memo'] ?></textarea>
                                </div>
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
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        <span class="icon"><i class="mdi mdi-ballot-outline default"></i></span>
                        추가정보
                    </p>
                </header>
                <div class="card-content">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">포인트정보</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input is-warning" type="text" value="<?= number_format($custom_member['mb_point']) ?> 포인트 보유" readonly="readonly">
                                    <span class="icon is-small is-left"><i class="mdi mdi-point-of-sale"></i></span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input is-warning" type="text" value="<?= number_format($custom_member['tot_earn_point']) ?> 포인트 적립" readonly="readonly">
                                    <span class="icon is-small is-left"><i class="mdi mdi-summit"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">총 방문횟수</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input is-warning" type="text" value="<?= number_format($custom_member['tot_visit_cnt']) ?>" readonly="readonly">
                                    <span class="icon is-small is-left"><i class="mdi mdi-timeline-plus"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">사업자정보</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input" type="text" name="mb_company_email" value="<?= $custom_member['mb_company_email'] ?>" placeholder="사업자 이메일">
                                    <span class="icon is-small is-left"><i class="mdi mdi-email"></i></span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" name="mb_company_num" value="<?= $custom_member['mb_company_num'] ?>" placeholder="사업자번호" maxlength="10">
                                    <span class="icon is-small is-left"><i class="mdi mdi-wallet-membership"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="field is-horizontal">
                        <div class="field-label is-normal"><label class="label">사업자등록증</label></div>
                        <div class="field-body">
                            <div class="field">
                                <div class="field file">
                                    <label class="upload control">
                                        <a class="button is-info">
                                            <span class="icon"><i class="mdi mdi-upload"></i></span>
                                            <span>파일 업로드</span>
                                        </a>
                                        <input type="file" name="mb_image" id="mb_image">
                                        <div class="field-label">
                                            <!-- Left empty for spacing -->
                                        </div>
                                        <?php if ($custom_member['mb_image']) { ?>
                                            <a class="button is-success" href="./member_image_view.php?mb_no=<?= $mb_no ?>" onclick="return f_href_form(this.href);" target="_blank">
                                                <span class="icon"><i class="mdi mdi-view-carousel"></i></span>
                                                <span>파일 보기</span>
                                            </a>
                                        <?php } ?>
                                    </label>
                                </div>
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
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        <span class="icon"><i class="mdi mdi-ballot-outline default"></i></span>
                        구매정보
                    </p>
                </header>
                <div class="card-content">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">주문정보</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left has-icons-right">
                                    <input class="input is-warning" type="text" value="<?= number_format($custom_member['tot_od_cnt']) ?>회 구매" readonly="readonly">
                                    <span class="icon is-small is-left"><i class="mdi mdi-counter"></i></span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input is-warning" type="text" value="<?= number_format($custom_member['tot_od_price']) ?>원 구매" readonly="readonly">
                                    <span class="icon is-small is-left"><i class="mdi mdi-wallet"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>

    <script>
        function fmember_submit(f) {
            if (!f.company_image.value.match(/\.(gif|jpe?g|png)$/i) && f.company_image.value) {
                sweet_alert('사업자등록증은 이미지 파일만 가능합니다.', 1);
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
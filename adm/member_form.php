<?php
/**
 * 관리자 > 회원리스트 > form
 * User: holic
 * Date: 2024-05-18
 */

include_once('./_common.php');
if (!isset($mb_no) || !$mb_no) {
    sweet_alert('잘못된 접근입니다.');
}
$adm_depth1 = '관리자';
$koi['title'] = $adm_depth2 = '회원상세 번호 : ' . $mb_no;
include_once('./_head.php');
$custom_member = sql_fetch("SELECT *, IFNULL((select sum(point) from tbl_point_earn where mb_no = mb.mb_no), 0) as tot_earn_point, IFNULL((select count(idx) from tbl_member_visit where mb_no = mb.mb_no), 0) as tot_visit_cnt, IFNULL((select count(od_id) from tbl_shop_order where mb_no = mb.mb_no and (od_status != '주문' or od_status != '취소')), 0) as tot_od_cnt, IFNULL((select sum(od_receipt_price) from tbl_shop_order where mb_no = mb.mb_no and (od_status != '주문' or od_status != '취소')), 0) as tot_od_price FROM tbl_member mb WHERE mb_no = '{$mb_no}'");
?>
    <section class="section is-main-section">
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
                                <input class="input" type="email" placeholder="Email" value="<?= $custom_member['mb_email'] ?>">
                                <span class="icon is-small is-left"><i class="mdi mdi-mail"></i></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control is-expanded has-icons-left">
                                <input class="input" type="text" placeholder="연락처" value="<?= $custom_member['mb_hp'] ?>">
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
                                <input class="input" type="text" placeholder="New Password">
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
                                <input class="input is-warning" type="text" value="<?= $custom_member['mb_datetime'] ?>" readonly="readonly">
                                <span class="icon is-small is-left"><i class="mdi mdi-timeline-clock"></i></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control is-expanded has-icons-left">
                                <input class="input is-warning" type="text" value="<?= $custom_member['mb_login_ip'] ?>" readonly="readonly">
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
                                <input class="input is-warning" type="text" value="<?= $custom_member['mb_email_certify'] ?>" readonly="readonly">
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
                                <input class="input" type="text" value="<?= $custom_member['mb_intercept_date'] ?>">
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
                                <input class="input" type="text" value="<?= $custom_member['mb_leave_date'] ?>">
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
                                <input class="input is-warning" type="text" value="<?= $custom_member['mb_today_login'] ?>" readonly="readonly">
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
                                <input class="input" type="text" value="<?= $custom_member['mb_company_email'] ?>">
                                <span class="icon is-small is-left"><i class="mdi mdi-email"></i></span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control is-expanded has-icons-left">
                                <input class="input" type="text" value="<?= $custom_member['mb_company_num'] ?>">
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
                                    <input type="file">
                                    <div class="field-label">
                                        <!-- Left empty for spacing -->
                                    </div>
                                    <?php if ($custom_member['mb_image']) { ?>
                                        <a class="button is-success">
                                            <span class="icon"><i class="mdi mdi-download"></i></span>
                                            <span>파일 다운로드</span>
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
    </section>

<?php include_once(KOI_ADMIN_PATH . '/_tail.php'); ?>
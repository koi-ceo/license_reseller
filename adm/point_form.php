<?php
/**
 * 관리자 > 포인트관리 > 포인트추가
 * User: holic
 * Date: 2024-06-09
 */

include_once('./_common.php');
$adm_depth1 = '관리자';
$koi['title'] = $adm_depth2 = '포인트 내역 추가';
include_once('./_head.php');
?>

<section class="section is-main-section">
    <form name="fmember" id="fmember" action="./point_form_update.php" onsubmit="return fmember_submit(this);" method="post" enctype="multipart/form-data">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-ballot"></i></span>
                    회원 검색
                </p>
            </header>
            <div class="card-content">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">회원정보</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input class="input" name="srch_stx" id="srch_stx" type="text" placeholder="이메일 or 휴대폰">
                                <span class="icon is-small is-left"><i class="mdi mdi-mail"></i></span>
                            </p>
                        </div>
                        <div class="field">
                            <div class="field is-grouped">
                                <div class="control">
                                    <button type="button" class="button is-info" id="srch_btn">
                                        <span>검색하기</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">검색결과</label>
                    </div>
                    <div class="field-body">
                        <div class="field is-narrow">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name="mb_no" id="mb_no">
                                        <option>회원정보를 검색해주세요</option>
                                    </select>
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
                    포인트 내역 추가
                </p>
            </header>
            <div class="card-content">
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">포인트정보</label>
                    </div>
                    <div class="field-body">
                        <div class="field is-narrow">
                            <div class="control">
                                <div class="select is-fullwidth">
                                    <select name="point_type">
                                        <option value="1">구매 적립</option>
                                        <option value="2">기타 적립</option>
                                        <option value="3">포인트 소진</option>
                                        <option value="4">포인트 소멸</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">포인트 내역</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input class="input" name="contents" type="text">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">포인트</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input class="input" name="point" type="text">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-normal">
                        <label class="label">주문번호</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input class="input" name="od_id" type="text">
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
            </div>
        </div>
    </form>
</section>


<script>
    let ajaxSeq = false;

    $(document).ready(function () {
        $('#srch_stx').keypress(function (e) {
            if (e.which === 13) {
                $('#srch_btn').click();
                return false;
            }
        });
    });

    function fmember_submit(f) {

        return true;
    }

    $(document).on("click", "#srch_btn", function (e) {
        e.preventDefault();
        let param = {
            "srch_stx": $("#srch_stx").val()
        };
        if (!ajaxSeq) {
            ajaxSeq = true;
            $.ajax({
                type    : "POST",
                url     : "point_form_ajax.php",
                data    : param,
                cache   : false,
                dataType: "html",
                success : function (html) {
                    ajaxSeq = false;
                    $("#mb_no").html(html);
                },
                error   : function (e) {
                    console.log("ajax 오류");
                }
            });
        }

    });
</script>

<?php include_once(KOI_ADMIN_PATH . '/_tail.php'); ?>

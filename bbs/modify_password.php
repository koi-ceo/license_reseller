<?php
/**
 * 정보수정 > 비밀번호 변경
 * User: holic
 * Date: 2024-04-22
 */

$koi['title'] = "비밀번호 변경";

include_once('./_common.php');
include_once('./_head.php');

if (!isset($member) || !$member['mb_no']) {
    if (isset($url) && $url)
        goto_url($url);
    else
        goto_url(KOI_URL);
}
?>


<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-centered">정보수정</h3>
                <hr class="login-hr">
                <div class="box koi-background">
                    <form id="form_register" method="post" autocomplete="off" enctype="multipart/form-data" action="<?= KOI_BBS_URL ?>/modify_password_update.php">
                        <div class="field">
                            <label class="label has-text-white">변경할 비밀번호</label>
                            <div class="control">
                                <input class="input is-medium" type="password" name="mb_new_password" id="mb_new_password" required="required" autocomplete="off">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">변경할 비밀번호 확인</label>
                            <div class="control">
                                <input class="input is-medium" type="password" name="mb_new_password_re" id="mb_new_password_re" required="required" autocomplete="off">
                            </div>
                        </div>
                        <button class="button is-block is-info is-large is-fullwidth">수정하기 <i class="fa fa-user-plus" aria-hidden="true"></i></button>
                    </form>
                </div>
                <p class="has-text-grey has-text-centered">
                    <a href="javascript:history.back();">돌아가기</a>
                </p>
            </div>
        </div>
    </div>
</section>

<script>
    let validate = false;

    $(document).on("submit", "#form_register", function () {
        if ($("#mb_new_password").val() !== $("#mb_new_password_re").val()) {
            alert("비밀번호가 일치하지 않습니다.");
            $("#mb_new_password_re").focus()
            return false;
        }

        if (!validate) {
            alert("비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여 10자리 이상 입력해주세요.");
            return false;
        }
    });

    $(document).on("keyup", "#mb_new_password", function () {
        let pattern = new RegExp('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{10,}', 'g');
        let value = $(this).val();
        if (!pattern.test(value)) {
            $(this).addClass("is-danger");
            $(this).removeClass("is-success");
        } else {
            $(this).removeClass("is-danger");
            $(this).addClass("is-success");
            validate = true;
        }
    });
</script>


<?php
include_once('./_tail.php');
?>

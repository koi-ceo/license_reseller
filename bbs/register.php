<?php
/**
 * 회원가입
 * User: holic
 * Date: 2024-04-18
 */

$koi['title'] = "회원가입";

include_once('./_common.php');
include_once('./_head.php');

// 이미 로그인 중이라면
if (isset($is_member) && $is_member) {
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
                    <h3 class="title has-text-centered">회원가입</h3>
                    <hr class="login-hr">
                    <div class="box koi-background">
                        <form id="form_register" method="post" autocomplete="off" enctype="multipart/form-data" action="<?= KOI_BBS_URL ?>/register_update.php">
                            <div class="field">
                                <label class="label has-text-white">이메일</label>
                                <div class="control">
                                    <input class="input is-medium" type="email" autofocus="" name="mb_email" required="required">
                                </div>
                            </div>

                            <div class="field">
                                <label class="label has-text-white">비밀번호</label>
                                <div class="control">
                                    <input class="input is-medium" type="password" name="mb_password" required="required" id="mb_password">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label has-text-white">비밀번호 확인</label>
                                <div class="control">
                                    <input class="input is-medium" type="password" name="mb_password_re" required="required" id="mb_password_re">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label has-text-white">휴대폰</label>
                                <div class="control">
                                    <input class="input is-medium" type="text" name="mb_hp" id="mb_hp" required="required">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">회원가입 <i class="fa fa-user-plus" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey has-text-centered">
                        <a href="<?= KOI_BBS_URL ?>/login.php">돌아가기</a>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <script>
        let validate = false;

        $(document).on("keyup", "#mb_hp", function () {
            let pattern = new RegExp('[^0-9]+', 'g');
            let value = $(this).val();
            value = value.replace(pattern, '');
            $(this).val(value);
        });

        $(document).on("submit", "#form_register", function () {
            if ($("#mb_password").val() !== $("#mb_password_re").val()) {
                alert("비밀번호가 일치하지 않습니다.");
                $("#mb_password_re").focus()
                return false;
            }
            if ($("#mb_hp").val().length < 10) {
                alert("휴대폰번호를 정확히 입력해 주십시오.");
                $("#mb_hp").focus();
                return false;
            }
            if (!validate) {
                alert("비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함하여 10자리 이상 입력해주세요.");
                return false;
            }
        });

        $(document).on("keyup", "#mb_password", function () {
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
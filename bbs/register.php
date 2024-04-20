<?php
/**
 * 회원가입
 * User: holic
 * Date: 2024-04-18
 */

include_once('./_common.php');
include_once('./_head.sub.php');
?>
<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-centered">회원가입</h3>
                <hr class="login-hr">
                <div class="box koi-background">
                    <form method="post" autocomplete="off" enctype="multipart/form-data" action="<?= KOI_BBS_URL ?>/register_update.php">
                        <div class="field">
                            <label class="label has-text-white">이메일</label>
                            <div class="control">
                                <input class="input is-medium" type="email" autofocus="" name="mb_email">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">비밀번호</label>
                            <div class="control">
                                <input class="input is-medium" type="password" name="mb_password">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">비밀번호 확인</label>
                            <div class="control">
                                <input class="input is-medium" type="password" name="mb_password_re">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">휴대폰</label>
                            <div class="control">
                                <input class="input is-medium" type="text" name="mb_hp" id="mb_hp">
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
    $(document).on("keyup", "#mb_hp", function () {
        let pattern = new RegExp('[^0-9]+', 'g');
        let value = $(this).val();
        value = value.replace(pattern, '');
        $(this).val(value);
    });
</script>
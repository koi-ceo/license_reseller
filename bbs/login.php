<?php
/**
 * 로그인 페이지
 * User: holic
 * Date: 2024-04-18
 */

$koi['title'] = "로그인";

include_once('./_common.php');
include_once('./_head.sub.php');
?>
<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-centered">로그인</h3>
                <hr class="login-hr">
                <div class="box koi-background">
                    <form method="post" autocomplete="off" enctype="multipart/form-data" action="<?= KOI_BBS_URL ?>/login_check.php">
                        <div class="field">
                            <label class="label has-text-white">이메일</label>
                            <div class="control">
                                <input class="input is-medium" type="email" autofocus="" name="mb_id">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">비밀번호</label>
                            <div class="control">
                                <input class="input is-medium" type="password" name="mb_password">
                            </div>
                        </div>
                        <div class="field">
                            <label class="checkbox has-text-white">
                                <input type="checkbox" name="auto_login">
                                자동로그인
                            </label>
                        </div>
                        <button class="button is-block is-info is-large is-fullwidth">로그인 <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                    </form>
                </div>
                <p class="has-text-grey has-text-centered">
                    <a href="register.php"">회원가입</a> &nbsp;·&nbsp;
                    <a href="reset_password.php">비밀번호 재설정</a>
                </p>
            </div>
        </div>
    </div>
</section>

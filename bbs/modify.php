<?php
/**
 * 정보수정
 * User: holic
 * Date: 2024-04-21
 */

$koi['title'] = "정보수정";

include_once('./_common.php');
include_once('./_head.php');
?>

<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-centered">정보수정</h3>
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
                    <a href="<?= KOI_BBS_URL ?>/login.php">돌아가기</a> &nbsp;·&nbsp;
                    <a href="register.php"">비밀번호 변경</a> &nbsp;·&nbsp;
                    <a href="register.php"">회원탈퇴</a>
                </p>
            </div>
        </div>
    </div>
</section>


<?php
include_once('./_tail.php');
?>

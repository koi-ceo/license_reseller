<?php
/**
 * 비밀번호 재설정
 * User: holic
 * Date: 2024-04-18
 */

$koi['title'] = "비밀번호 찾기";

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
                    <h3 class="title has-text-centered">비밀번호 재설정</h3>
                    <hr class="login-hr">
                    <div class="box koi-background">
                        <form action="reset_password_result.php" method="post" autocomplete="off" enctype="multipart/form-data">
                            <div class="field">
                                <label class="label has-text-white">이메일</label>
                                <div class="control">
                                    <input class="input is-medium" type="email" autofocus="">
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">비밀번호 찾기 <i class="fa fa-key" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey has-text-centered">
                        <a href="<?= KOI_BBS_URL ?>/login.php">돌아가기</a>
                    </p>
                </div>
            </div>
        </div>
    </section>


<?php
include_once('./_tail.php');
?>
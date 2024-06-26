<?php
/**
 * 비밀번호 찾기 결과
 * User: holic
 * Date: 2024-04-18
 */

$koi['title'] = "비밀번호 찾기 결과";

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
                    <h3 class="title has-text-centered">비밀번호 찾기</h3>
                    <hr class="login-hr">
                    <div class="box koi-background">
                        <div class="field has-text-centered has-text-white">
                            가입된 이메일이 없습니다.<BR>
                            비밀번호 재설정을 위한 링크를 이메일로 전송했습니다.
                        </div>
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
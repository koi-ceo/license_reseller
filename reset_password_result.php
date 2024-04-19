<?php
/**
 * 비밀번호 찾기 결과
 * User: holic
 * Date: 2024-04-18
 */

include_once "_common.php";
include_once "./head.php";
?>
<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="column is-4 is-offset-4">
                <h3 class="title has-text-centered">비밀번호 찾기</h3>
                <hr class="login-hr">
                <div class="box koi-background">
                    <div class="field has-text-centered">
                        일치한 이메일이 없습니다.<BR>
                        이메일로 비밀번호 재설정을 위한 링크를 전송했습니다.
                    </div>
                </div>
                <p class="has-text-grey has-text-centered">
                    <a href="./login.php">돌아가기</a>
                </p>
            </div>
        </div>
    </div>
</section>
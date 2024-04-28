<?php
/**
 * 정보수정
 * User: holic
 * Date: 2024-04-21
 */

$koi['title'] = "정보수정";

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
                    <form id="form_register" method="post" autocomplete="off" enctype="multipart/form-data" action="<?= KOI_BBS_URL ?>/modify_update.php">
                        <div class="field">
                            <label class="label has-text-white">사업자번호</label>
                            <div class="control">
                                <input class="input is-medium" type="text" name="mb_company_num" id="mb_company_num" required="required" value="<?= $member['mb_company_num'] ?>">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label has-text-white">이메일(전자세금계산서 발급용)</label>
                            <div class="control">
                                <input class="input is-medium" type="email" name="mb_company_email" id="mb_company_email" required="required" value="<?= $member['mb_company_email'] ?>">
                            </div>
                        </div>
                        <div class="field">
                            <div class="file has-name">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="mb_image" id="mb_image">
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fa fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            사업자등록증
                                        </span>
                                    </span>
                                    <span class="file-name <?= $member['mb_image'] ? "" : "is-hidden" ?> has-text-white" id="mb_image_wrap">
                                        <?= $member['mb_image'] ?>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <button class="button is-block is-info is-large is-fullwidth">수정하기 <i class="fa fa-user-plus" aria-hidden="true"></i></button>
                    </form>
                </div>
                <p class="has-text-grey has-text-centered">
                    <a href="<?= KOI_BBS_URL ?>/logout.php">로그아웃</a> &nbsp;·&nbsp;
                    <a href="<?= KOI_BBS_URL ?>/modify_password.php"">비밀번호 변경</a> &nbsp;·&nbsp;
                    <a href="<?= KOI_BBS_URL ?>/register.php"">회원탈퇴</a>
                </p>
            </div>
        </div>
    </div>
</section>

<script>
    document.getElementById('mb_image').addEventListener('change', function (e) {
        let fileName = e.target.files[0].name;
        document.getElementById('mb_image_wrap').classList.remove('is-hidden');
        document.getElementById('mb_image_wrap').textContent = fileName;
    });
</script>


<?php
include_once('./_tail.php');
?>

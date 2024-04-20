<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2024-04-20
 */

include_once('./_common.php');

if ($error) {
    $koi['title'] = "오류안내 페이지";
} else {
    $koi['title'] = "결과안내 페이지";
}
include_once(KOI_PATH . './head.sub.php');

$msg = isset($msg) ? strip_tags($msg) : '';
$msg2 = $msg = str_replace("\\n", "<br>", $msg);

$url = clean_xss_tags($url, 1);
if (!$url) $url = clean_xss_tags($_SERVER['HTTP_REFERER'], 1);

$url = preg_replace("/[\<\>\'\"\\\'\\\"\(\)]/", "", $url);
$url = preg_replace('/\r\n|\r|\n|[^\x20-\x7e]/', '', $url);

// url 체크
check_url_host($url, $msg);

if ($error) {
    $header2 = "다음 항목에 오류가 있습니다.";
} else {
    $header2 = "다음 내용을 확인해 주세요.";
}
?>

<?php if ($version == 1) { ?>
    <script>
        Swal.fire({
            html              : "<?php echo $msg; ?>",
            confirmButtonColor: '#1C6EE8'
        }).then(() => {
            <?php if ($url) { ?>
            document.location.replace("<?php echo str_replace('&amp;', '&', $url); ?>");
            <?php } else { ?>
            history.back();
            <?php } ?>
        });
    </script>
<?php } else if ($version == 2) { ?>
    <script>
        Swal.fire({
            html              : "<?php echo $msg; ?>",
            icon              : '<?=$icon?>',
            showCancelButton  : true,
            confirmButtonColor: '#1C6EE8',
            cancelButtonColor : '#F45E5E',
            confirmButtonText : '네',
            cancelButtonText  : '아니요'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    html             : "<?php echo $msg; ?>",
                    icon             : 'success',
                    showConfirmButton: false,
                    timer            : 1000
                });
                document.location.replace("<?php echo str_replace('&amp;', '&', $url); ?>");
            } else {
                return false;
            }
        });
    </script>
<?php } else if ($version == 3) { ?>
    <script>
        Swal.fire({
            html              : "<?php echo $msg; ?>",
            confirmButtonColor: '#1C6EE8'
        });
    </script>
<?php } else { ?>
    <noscript>
        <div id="validation_check">
            <h1><?php echo $header2 ?></h1>
            <p class="cbg">
                <?php echo $msg2 ?>
            </p>
            <?php if ($post) { ?>
                <form method="post" action="<?php echo $url ?>">
                    <?php
                    foreach ($_POST as $key => $value) {

                        $key = clean_xss_tags($key);
                        $value = clean_xss_tags($value);

                        if (strlen($value) < 1)
                            continue;

                        if (preg_match("/pass|pwd|capt|url/", $key))
                            continue;
                        ?>
                        <input type="hidden" name="<?php echo htmlspecialchars($key); ?>" value="<?php echo htmlspecialchars($value); ?>">
                        <?php
                    }
                    ?>
                    <input type="submit" value="돌아가기">
                </form>
            <?php } else { ?>
                <div class="btn_confirm">
                    <a href="<?php echo $url ?>">돌아가기</a>
                </div>
            <?php } ?>

            <?php /*
<article id="validation_check">
<header>
    <hgroup>
        <!-- <h1>회원가입 정보 입력 확인</h1> --> <!-- 수행 중이던 작업 내용 -->
        <h1><?php echo $header ?></h1> <!-- 수행 중이던 작업 내용 -->
        <h2><?php echo $header2 ?></h2>
    </hgroup>
</header>
<p>
    <!-- <strong>항목</strong> 오류내역 -->
    <!--
    <strong>이름</strong> 필수 입력입니다. 한글만 입력할 수 있습니다.<br>
    <strong>이메일</strong> 올바르게 입력하지 않았습니다.<br>
    -->
    <?php echo $msg2 ?>
</p>

<a href="<?php echo $url ?>">돌아가기</a>
</article>
*/ ?>

        </div>
    </noscript>
<?php } ?>
<?php
include_once(KOI_PATH . '/tail.sub.php');
?>
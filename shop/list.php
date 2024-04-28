<?php
/**
 * 상품 리스트
 * User: holic
 * Date: 2024-04-27
 */

$koi['title'] = "상품 목록";

include_once('./_common.php');
include_once('./_head.php');

?>
<link rel="stylesheet" href="<?= KOI_CSS_URL ?>/shop.css">
<section class="section">
    <div class="container">
        <div class="buttons has-addons is-centered filter-menu">
            <label class="button is-primary is-active">
                <input type="radio" name="shuffle-filter" value="all" checked="checked"/>All
            </label>
            <label class="button is-primary">
                <input type="radio" name="shuffle-filter" value="jetbrains"/>Jetbrains
            </label>
            <label class="button is-primary">
                <input type="radio" name="shuffle-filter" value="adobe"/>Adobe
            </label>
            <label class="button is-primary">
                <input type="radio" name="shuffle-filter" value="microsoft"/>Microsoft
            </label>
        </div>

        <div class="columns shuffle-wrapper">

            <div class="column is-4-desktop is-6-tablet shuffle-item" data-groups="[&quot;jetbrains&quot;]">
                <div class="is-relative hover-wrapper column">
                    <div class="cause-item">
                        <img src="/img/item1.jpg" class="image is-full is-block" alt="...">
                        <div class="card-body">
                            <h3 class="mb-4"><a href="cause-single.html" class="title">Pycharm</a></h3>
                            <p class="card-text mb-5 pt-5 border-top">파이썬 개발자와 데이터 과학자를 위한 IDE</p>
                            <ul class="list-inline border-bottom border-top py-3 mb-4">
                                <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>연간 : <span>$890</span> (vat포함)</li>
                                <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>월별 : <span>$390</span> (vat포함)</li>
                            </ul>
                            <a href="donation.html" class="btn btn-main is-rounded">장바구니 담기</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column is-4-desktop is-6-tablet shuffle-item" data-groups="[&quot;jetbrains&quot;]">
                <div class="is-relative hover-wrapper column">
                    <div class="cause-item">
                        <img src="/img/item1.jpg" class="image is-full is-block" alt="...">
                        <div class="card-body">
                            <h3 class="mb-4"><a href="cause-single.html" class="title">Pycharm</a></h3>
                            <p class="card-text mb-5 pt-5 border-top">파이썬 개발자와 데이터 과학자를 위한 IDE</p>
                            <ul class="list-inline border-bottom border-top py-3 mb-4">
                                <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>연간 : <span>$890</span> (vat포함)</li>
                                <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>월별 : <span>$390</span> (vat포함)</li>
                            </ul>
                            <a href="donation.html" class="btn btn-main is-rounded">장바구니 담기</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<script src="<?= KOI_JS_URL ?>/shuffle.min.js"></script>
<script>
    // Shuffle js filter and masonry
    let Shuffle = window.Shuffle;
    let jQuery = window.jQuery;

    let myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer      : 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        let input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });


    // Check for click events on the navbar burger icon
    $(".filter-menu .button").click(function () {
        $(this).addClass("is-active").siblings().removeClass('is-active');
    });
</script>
<?php
include_once('./_tail.php');
?>


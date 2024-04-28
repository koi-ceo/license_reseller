<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2024-04-27
 */

$koi['title'] = "상품 목록";

include_once('./_common.php');
include_once('./_head.php');
?>

<section class="section">
    <div class="container">
        <!-- filter menu -->
        <div class="buttons has-addons is-centered filter-menu">
            <label class="button is-primary is-active">
                <input type="radio" name="shuffle-filter" value="all" checked="checked"/>All
            </label>
            <label class="button is-primary">
                <input type="radio" name="shuffle-filter" value="design"/>UI/UX Design
            </label>
            <label class="button is-primary">
                <input type="radio" name="shuffle-filter" value="branding"/>BRANDING
            </label>
            <label class="button is-primary">
                <input type="radio" name="shuffle-filter" value="illustration"/>ILLUSTRATION
            </label>
        </div>
        <!-- /filter menu -->

        <div class="columns shuffle-wrapper">
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/pycharm.jpg" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;branding&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/adobe_icon.png" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;illustration&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/intellij_idea.jpg" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;design&quot;,&quot;branding&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/jetbrains_icon.png" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;illustration&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/microsoft_icon.png" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;design&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/phpstorm.jpg" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item" data-groups="[&quot;branding&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/pycharm.jpg" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item"
                 data-groups="[&quot;design&quot;,&quot;illustration&quot;,&quot;branding&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/pycharm.jpg" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet mb-20 shuffle-item illustration" data-groups="[&quot;illustration&quot;]">
                <div class="is-relative hover-wrapper">
                    <img src="/img/pycharm.jpg" alt="portfolio-image" class="image is-full is-block">
                    <div class="hover-overlay">
                        <div class="hover-content">
                            <a class="button is-light is-small" href="project-single.html">view project</a>
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
        var input = evt.currentTarget;
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

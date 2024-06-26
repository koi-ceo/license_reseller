<?php
/**
 * Created by PhpStorm.
 * User: holic
 * Date: 2024-04-28
 */

$koi['title'] = "상품 목록";

include_once('./_common.php');
include_once('./_head.php');
?>


<section class="section causes">
    <div class="container">
        <div class="columns is-justify-content-center">
            <div class="column is-7-desktop is-8-tablet">
                <div class="section-title has-text-centered">
                    <span class="text-color">Latest Events</span>
                    <h2 class="mt-4 mb-5 is-relative content-title">Our Recent Causes <br> to serve better</h2>
                    <p class="mb-5">We provide services in the area of IFRS and management reporting, helping companies to reach their highest level.</p>
                </div>
            </div>
        </div>

        <div class="columns is-multiline is-justify-content-center">
            <div class="column is-4-desktop is-6-tablet">
                <div class="cause-item">
                    <img src="images/about/image-1.jpg" class=" w-100" alt="...">

                    <div class="card-body">
                        <h3 class="mb-4"><a href="cause-single.html">Save Poor Childrens</a></h3>

                        <ul class="list-inline border-bottom border-top py-3 mb-4">
                            <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Goal: <span>$890</span></li>
                            <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Raised: <span>$390</span></li>
                        </ul>
                        <p class="card-text mb-5">Save poor child by supporting text below as a natural lead-in to additional content.</p>

                        <a href="donation.html" class="btn btn-main is-rounded">Donate Now</a>
                    </div>
                </div>
            </div>

            <div class="column is-4-desktop is-6-tablet">
                <div class="cause-item">
                    <img src="images/about/image-2.jpg" class=" w-100" alt="...">

                    <div class="card-body">
                        <h3 class="mb-4"><a href="cause-single.html">Clean Drink Water</a></h3>

                        <ul class="list-inline border-bottom border-top py-3 mb-4">
                            <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Goal: <span>$890</span></li>
                            <li class="list-inline-item"><i class="icofont-check text-color mr-2"></i>Raised: <span>$390</span></li>
                        </ul>
                        <p class="card-text mb-5">Save poor child by supporting text below as a natural lead-in to additional content.</p>

                        <a href="donation.html" class="btn btn-main is-rounded">Donate Now</a>
                    </div>
                </div>
            </div>
            <div class="column is-4-desktop is-6-tablet">
                <div class="cause-item">
                    <img src="images/about/image-3.jpg" class=" w-100" alt="...">

                    <div class="card-body">
                        <h3 class="mb-4"><a href="cause-single.html">Fund for Education</a></h3>

                        <p class="card-text mb-4">Save poor child by supporting text below as a natural lead-in to additional content. </p>
                        <p class="card-text mb-4">Quia vitae ab maxime cum quod neque .</p>

                        <a href="donation.html" class="btn btn-main is-rounded">Donate Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
include_once('./_tail.php');
?>

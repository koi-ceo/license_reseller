<?php
include_once('./_common.php');
include_once "./head.php";
?>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <section class="hero is-large">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1552872673-9b7b99711ebb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTkyMCUyMDEwODB8ZW58MHx8MHx8fDA%3D" alt="Image 1"></div>
                <div class="swiper-slide"><img src="https://images.unsplash.com/photo-1552872673-9b7b99711ebb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTkyMCUyMDEwODB8ZW58MHx8MHx8fDA%3D" alt="Image 1"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>

    <section class="hero is-small">
        <div class="hero-body">
        </div>
    </section>

    <section class="blog-posts pt-5">
        <div class="container">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="columns featured-post is-multiline">
                        <div class="column is-12 post">
                            <article class="columns featured">
                                <div class="column is-7 post-img ">
                                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="">
                                </div>
                                <div class="column is-5 featured-content va">
                                    <div>
                                        <h3 class="heading post-category">Category Name</h3>
                                        <h2 class="title post-title">Blog Posts Template</h2>
                                        <p class="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                        <br>
                                        <a href="#" class="button is-primary">Read More</a>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
    </section>

    <section class="blog-posts pb-5">
        <div class="container">
            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <div class="columns featured-post is-multiline">
                        <div class="column is-12 post">
                            <article class="columns featured">
                                <div class="column is-5 featured-content va">
                                    <div>
                                        <h3 class="heading post-category">Category Name</h3>
                                        <h2 class="title post-title">Blog Posts Template</h2>
                                        <p class="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                        <br>
                                        <a href="#" class="button is-primary">Read More</a>
                                    </div>
                                </div>
                                <div class="column is-7 post-img ">
                                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt="">
                                </div>
                            </article>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
    </section>

    <section class="hero is-small">
        <div class="hero-body">
        </div>
    </section>

    <section class="section">
        <div class="container has-text-centered">
            <h2 class="title">Tools</h2>
            <!--            <p>summary</p>-->

            <div class="columns is-centered" style="padding: 2rem">
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="/img/intellij_idea.jpg" alt="Intellij IDEA image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">Intellij IDEA</p>
                                    <p class="subtitle is-6">JAVA 및 Kotlin 개발자를 위한 IDE</p>
                                </div>
                            </div>

                            <div class="content">
<!--                                SUMMARY-->
                                <a href="#">#JAVA</a>
                                <a href="#">#Kotlin</a>
                                <a href="#">#Spring</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="/img/pycharm.jpg" alt="Pycharm image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">PyCharm</p>
                                    <p class="subtitle is-6">python 개발자와 데이터 과학자를 위한 IDE</p>
                                </div>
                            </div>

                            <div class="content">
                                <a href="#">#Python</a>
                                <a href="#">#Django</a>
                                <a href="#">#Jupyter</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-2by1">
                                <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">John Smith</p>
                                    <p class="subtitle is-6">@johnsmith</p>
                                </div>
                            </div>

                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                <a>@bulmaio</a>.
                                <a href="#">#css</a>
                                <a href="#">#responsive</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            loop         : true,
            navigation   : {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination   : {
                el       : '.swiper-pagination',
                clickable: true,
            },
        });
    </script>


<?php
include_once "./tail.php";
?>
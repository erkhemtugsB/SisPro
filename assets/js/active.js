(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {
        $(".homepage-slides").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: { autoplay: false },
                768: { autoplay: false },
                1200: { autoplay: true }
            }
        });

        // Commented out animation-related code for homepage slides
        /*
        $(".homepage-slides").on("translate.owl.carousel", function () {
            $(".single-slider-item h1, .single-slider-item p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".single-slider-item .slide-btn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".homepage-slides").on("translated.owl.carousel", function () {
            $(".single-slider-item h1, .single-slider-item p").addClass("animated fadeInUp").css("opacity", "1");
            $(".single-slider-item .slide-btn").addClass("animated fadeInDown").css("opacity", "1");
        });
        */

        // Other slider configurations remain unchanged
        $(".home-three-slider").on("translate.owl.carousel", function () {
            $(".slider-thre-item-wrap h2, .slider-thre-item-wrap p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-thre-item-wrap .vidbtn").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".home-three-slider").on("translated.owl.carousel", function () {
            $(".slider-thre-item-wrap h2, .slider-thre-item-wrap p").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-thre-item-wrap .vidbtn").addClass("animated fadeInDown").css("opacity", "1");
        });

        // Other code remains unchanged...
    });

    jQuery(window).on('load', function () {
        jQuery(".preloader-wrap").fadeOut(500);
    });
}(jQuery));
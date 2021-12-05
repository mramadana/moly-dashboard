$(document).ready(function () {
    "use strict";
    let isRtl = $('html[lang="ar"]').length > 0;

    $('.select-plugin').select2({
        dir: isRtl ? "rtl" : "ltr"
    });

    $('.select').select2({
        dir: isRtl ? "rtl" : "ltr"
    });

    // click to open form 
    $(".search-btn").click(function () {
        $(".search").addClass('active');
    });

    // click to close form 
    $(".search .close-form").click(function () {
        $(".search").removeClass('active');
    });

    // click to nav-btn to show side-bar and overlay

    $(".nav-btn").click(function () {
        $(".nav-btn").addClass('active');
        $(".header .left").addClass('active');
        $(".nav-overlay").addClass('active');
    });

    // click to over-lay-body to close all overlay
    $(".nav-overlay").click(function () {
        $(".nav-btn").removeClass('active');
        $(".header .left").removeClass('active');
        $(".nav-overlay").removeClass('active');
    });

    // background-color to header when scrolling 
    $(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $(".header").addClass('show')
        } else {
            $(".header").removeClass('show')
        }
    });

    // main-slider 
    $('.main-slider').owlCarousel({
        items:1,
        loop:true,
        rtl:isRtl,
        margin:10,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        nav:false,
    });

    // when i click on icon-hear
    $(".heart-icon, .favourite-icon").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
    });
    
    $(".heart-icon .fa-heart").click(function(e) {
        $(this).toggleClass('far');
        $(this).toggleClass('fas');
    });

    $(".icon-h i").click(function(e) {
        $(this).parents('.icon-h').toggleClass('show');
    });

    // success- slider 
    $('.product-details-slid').owlCarousel({
        items:1,
        loop:true,
        rtl:isRtl,
        margin:10,
        autoplaySpeed: 1000,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        nav:false,
        dots: true
    })
    $('.success-slider').owlCarousel({
        loop: false,
        rtl:isRtl,
        margin: 10,
        nav: false,
        autoplay: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                margin: 0,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 2000,
            },

            375: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 2000,
            },

            425: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 2000,
            },
            600: {
                items: 4,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1024: {
                items: 5
            },
            1025: {
                items: 6
            }
        }
    });

   /*====================== responsive-footer-links-collapse=======================*/
    if ($(window).width() <= 768) {
        $(".foot-title").click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).parents('.arrow').removeClass('active');
                $(this).removeClass('active')
                $(this).siblings(".links").stop().slideUp();
            } else {
                $(".foot-title").removeClass('active')
                $(".arrow").removeClass('active');
                $(this).parents('.arrow').addClass('active');
                $(".footer .links").stop().slideUp();
                $(this).addClass('active')
                $(this).siblings(".links").stop().slideDown();
            }
        });
    };

    $('.password-group i').click(function() {
        $(this).toggleClass('active')
        if($(this).hasClass('active')) {
            $(this).siblings('.input').attr('type', 'text')
        } else {
            $(this).siblings('.input').attr('type', 'password')
        }
    });

    
    // copy link 



})

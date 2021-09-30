$(document).ready(function () {

    // Banner SLider

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });


    // Venobox Custom

    $('.venobox').venobox();

    // Team SLider
    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
    });


})
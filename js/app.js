$(document).ready(function(){

    $('.items').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    });
    });
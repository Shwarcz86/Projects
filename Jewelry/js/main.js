$(document).ready(function() {

  //jquery-form-styler
  $('.form-style').styler();

  //catalog
  $('.bottom-header__btn-catalog').on('click', function(e) { 
    $('.bottom-header__btn-catalog span').toggleClass('_active');
  });

  $('.slider-banner').slick ({
    slidesToShow: 1,
    sliderToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
  })

});


$(document).ready(function() {

  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 1) {
        if (window.matchMedia('(min-width: 1024px)').matches) {
          $('.header').addClass('fixed');
        }
      } else if (scrolled < 1) {
        $('.header').removeClass('fixed');
      }
  });

  //menuHamburger
  $('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.header__navigation').toggleClass('_active');
    $('body').toggleClass('_no-scroll');
  })

  $('.header__btn-close').click(function(){
    $('.header__navigation._active').toggleClass('_active');
    $('body').removeClass('_no-scroll');
  })

  //FancyBox
  $(".fancybox").fancybox();

  //ТЕЛЕФОН МАСКА
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  //ТАБЫ
  $('.tab').on('click', function(e) { 
    e.preventDefault();

    $($(this).siblings()).removeClass('tab_active'); 
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content_active');

    $(this).addClass('tab_active'); 
    $($(this).attr('href')).addClass('tabs-content_active');

    if (window.matchMedia('(max-width: 580px)').matches) { // аналог media-queries
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 85 +'px'});
    }
  });


});


/*
  //Выезжающее меню
  $(window).scroll(function() {
    const scrollMenu = $('.header').offset().top;
    const scrolled = $(this).scrollTop();
      if (scrolled > 10) {
        if (window.matchMedia('(min-width: 1151px)').matches) {
          $('.header').addClass('fixed');
          $('.page').addClass('active');
          $('.bottom-header__menu').addClass('active');
        }
      } else if (scrolled < 10) {
        $('.header').removeClass('fixed');
        $('.page').removeClass('active');
        $('.bottom-header__menu').removeClass('active');
      }
  });
  //Кнопка вверх
  var button = $('.top-btn');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 600) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	 
  button.on('click', function() {
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });

  //Обвертка для таблицы в article
  if (window.matchMedia('(max-width: 500px)').matches) {
    $('.articles-page article table').wrap('<div class="some-class"></div>');
  }		 

  //Слайдер
  $('.brand-page__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    speed: 1500,
    variableWidth: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="brand-page__slider-btn brand-page__slider-btnprev"><img src="img/arrow-prev.png" alt=""></button>',
    nextArrow: '<button class="brand-page__slider-btn brand-page__slider-btnnext"><img src="img/arrow-next.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 1421,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        }
      },
    ]
  });

  //Слайдер 2 in 1
  $('.big-slider').each(function(){
    $(this).slick({
      asNavFor: $(this).parents('.portfolio-page__item-sliders').find('.small-slider'),
      slidesToShow: 1,
      sliderToScroll: 1,
      fade: true,
      arrows: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<button class="big-slider__btn big-slider__btn-prev"><img src="img/portfolio/arrow-prev.png" alt=""></button>',
      nextArrow: '<button class="big-slider__btn big-slider__btn-next"><img src="img/portfolio/arrow-next.png" alt=""></button>',
      responsive: [
        {
          breakpoint: 561,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
          }
        },
      ]
    });    
  });
  $('.small-slider').each(function(){
    $(this).slick({
      asNavFor: $(this).parents('.portfolio-page__item-sliders').find('.big-slider'),
      slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    });    
  });



  //Аккордеон
  $(".questions-page__item-title").click(function(e) {
    e.preventDefault();
    $(".questions-page__item").removeClass("_enable");
    $(".questions-page__items article").slideUp(200);
    if ($(this).siblings(".questions-page__items article").is(":hidden")) {
      $(this).parent().addClass("_enable");
      $(this).siblings(".questions-page__items article").slideDown(200);
  
    } else {
      $(this).parent().removeClass("_enable");
      $(this).siblings(".questions-page__items article").slideUp(200);
    }
  });

  //Выпадания списка в меню
  $('.header__menu-link').on('click', function() {
    if (window.matchMedia('(max-width: 940px)').matches) {
      $(this).next().slideToggle('slow');
      $(this).toggleClass('active');
    }
  });

  //Скроллбар
  $(window).on("load",function() {
    $(".main-slider__item-wrapper, .services-slider__item-wrapper, .model-page__item-container").mCustomScrollbar({
      theme: "dark"
    });
  });

  // Анимация чисел
  if ($('body').hasClass('home')) {
    var show = true;
    var countbox = ".home .about-page__numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 850 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.home .about-page__numbers .about-page__item-number').css('opacity', '1');
            $('.home .about-page__numbers .about-page__item-number').spincrement({
                thousandSeparator: " ",
                duration: 2400
            });           
            show = false;
        }
    });
  }
  
  // Плавный скролл к якорю
  $(function(){ $('.bottom-header__menu li a[href^="#"]').click(function(){
    var _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top - 50 +'px'}); return false; });
  });

*/

$(document).ready(function () {
   //Квиз
   var currentStep = 0;
   var allStep = $('.quiz__step').length - 1;
   var quizNextBtn = $('.quiz-control__next');
   var quizPrevBtn = $('.quiz-control__prev');

   quizPrevBtn.click(function () {
      if (currentStep == 0) {
         currentStep = 0;
      } else {
         currentStep--;
         changeStep();
      }
   });

   quizNextBtn.click(function () {
      if (currentStep == allStep) {
         currentStep = allStep;
      } else {
         currentStep++;
         changeStep();
      }
   });

   $('.quiz-control__progress').width(((currentStep + 1) / 6) * 100 + '%');

   function changeStep() {
      $('.quiz-step').removeClass('active');
      $('.quiz-step').eq(currentStep).addClass('active');
      $('.quiz-control__counter_cur').text(currentStep + 1);
      $('.quiz-control__progress').width(((currentStep + 1) / 6) * 100 + '%');
   }

   $('.quiz-step input[type="radio"]').change(function () {
      $(this).parents('.quiz-step').find('.quiz-control__next').prop("disabled", false);

      var val = $(this).val();
      var name = $(this).attr("name");

      $("#quiz-form input[name=" + name + "]").val(val);

      changeStep();

      var next_btn = $(this).parents('.quiz-step').find('.quiz-control__next');
      setTimeout(function () {
         next_btn.trigger('click');
      }, 200);
   });

   $('.quiz-step .main-form input[type="tel"]').keydown(function () {
      var val_lenght = $(this).val().length;

      if (val_lenght == 18) {
         $(this).parents('.quiz-step').find('.quiz-control__next').prop("disabled", false);
      }
   });

   $('.quiz-submit').click(function () {
      //$("#quiz-form").submit();
   });

   //Оверлей
   function showOverlay() {
      $('html').css('overflow', 'hidden');
      $("body").append("<div class='overlay'></div>");
      $("header").css('padding-right', checkScrollWidth);
   };

   function hideOverlay() {
      $('html').css('overflow', 'auto');
      $('.overlay').remove();
      $("header").css('padding-right', '0');
   };

   //Менюха
   var menuBtn = $('.m-btn');
   var closeMenuBtn = $('.mob-menu__close');
   var mobMenu = $('.mob-menu');

   function openMenu() {
      mobMenu.addClass('show');
      menuBtn.addClass('active');
      showOverlay();

   };

   function closeMenu() {
      mobMenu.removeClass('show');
      menuBtn.removeClass('active');
      hideOverlay();

   };

   menuBtn.click(function () {
      if (mobMenu.hasClass('show')) {
         closeMenu();
      } else {
         openMenu();
      }
   });

   //Закрытие моб меню
   $('.mob-menu__nav a').click(function () {
      //$('.menu-btn').removeClass('active');
      closeMenu();
   });

   //Закрытие меню при клике вне
   jQuery(function ($) {
      $(document).mouseup(function (e) {
         if (mobMenu.hasClass('show')) {
            var div = $('.header');
            if (!div.is(e.target)
               && div.has(e.target).length === 0) {
               //$('.m-btn').removeClass('active');
               closeMenu();
            }
         }
      });
   });

   //Ширина скроллбара(что бы не прыгало при открытии меню)
   function checkScrollWidth() {
      let div = document.createElement('div');
      div.className = "sw";
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';

      document.body.append(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      $('.sw').remove();

      return scrollWidth;
   }

   wow = new WOW(
      {
         boxClass: 'wow',      // default
         animateClass: 'animated', // default
         offset: 0,          // default
         mobile: false,       // default
         live: true        // default
      }
   )
   wow.init();

   $(".scroll-link").click(function () {
      event.preventDefault();
      var minus = 50;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1000);
   });

   //TOOLTIP
   tippy('[data-tippy-content]', {
      // trigger: 'hover',
      maxWidth: 270,
      allowHTML: true,
   });


   //Валидация
   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tell: {
               required: true,

            },
            review: "required",
            email: {
               required: true,
               email: true
            },
            // select: "required",
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tell: "Ваш телефон?",
            review: "Текст вашего отзыва?",
            email: {
               required: "Ваш email?",
               email: "Не правильный адрес электронной почты"
            },
         },
         highlight: function (element) {
            $(element)
               .text('').addClass('error')
         },

         success: function (element) {
            element
               .text('').addClass('valid')
         }
      });
   });

   // Маска телефона
   $(function ($) {
      $("input[type='tel']").inputmask({ "mask": "+7 (999) 999-99-99" });
   });

   $("input").attr("autocomplete", "off");


   var problemSlider = $('.problem-slider');

   problemSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var all = slick.slideCount;

      $('.problem-slider--control .slider-control__current').text((i < 10) ? ("0" + i) : i);
      $('.problem-slider--control .slider-control__all').text((all < 10) ? ("0" + all) : all);

   });


   problemSlider.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: true,
      infinite: false,
      mobileFirst: true,
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,
      prevArrow: $('.problem-slider--control .prev'),
      nextArrow: $('.problem-slider--control .next'),

      responsive: [
         {
            breakpoint: 991,
            settings: 'unslick'
         }
      ]
   });

   var goodsSlider = $('.cards-grid');

   goodsSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var all = slick.slideCount;

      $('.goods-slider--control .slider-control__current').text((i < 10) ? ("0" + i) : i);
      $('.goods-slider--control .slider-control__all').text((all < 10) ? ("0" + all) : all);
   });

   goodsSlider.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      mobileFirst: true,
      variableWidth: true,
      infinite: false,
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,
      prevArrow: $('.goods-slider--control .prev'),
      nextArrow: $('.goods-slider--control .next'),

      responsive: [
         {
            breakpoint: 991,
            settings: 'unslick'
         }
      ]
   });


   var workPhotoSlider = $('.works-photo');

   var slider_btn_next = "<div class='slider-btn next'><svg><use xlink:href='img/sprite.svg#slide-next'></use></svg></div>"
   var slider_btn_prev = "<div class='slider-btn prev'><svg><use xlink:href='img/sprite.svg#slide-prev'></use></svg></div>"

   workPhotoSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var all = slick.slideCount;

      $('.works-photo--control .slider-control__current').text((i < 10) ? ("0" + i) : i);
      $('.works-photo--control .slider-control__all').text((all < 10) ? ("0" + all) : all);
   });

   workPhotoSlider.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      infinite: true,
      prevArrow: slider_btn_prev,
      nextArrow: slider_btn_next,
      dots: true,
      fade: true,
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,

      responsive: [{

         breakpoint: 577,
         settings: {
            dots: false,
            prevArrow: $('.works-photo--control .prev'),
            nextArrow: $('.works-photo--control .next'),
         }
      }]
   });

   var workVideo = $('.work-video');

   workVideo.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      mobileFirst: true,
      variableWidth: true,
      infinite: false,
      dots: true,
      prevArrow: '',
      nextArrow: '',
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,

      responsive: [
         {
            breakpoint: 991,
            settings: 'unslick'
         }
      ]
   });


   var mounterSlider = $('.mounter-grid');

   mounterSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var all = slick.slideCount;

      $('.mounter-slider--control .slider-control__current').text((i < 10) ? ("0" + i) : i);
      $('.mounter-slider--control .slider-control__all').text((all < 10) ? ("0" + all) : all);
   });

   mounterSlider.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      mobileFirst: true,
      variableWidth: true,
      infinite: false,
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,
      prevArrow: $('.mounter-slider--control .prev'),
      nextArrow: $('.mounter-slider--control .next'),

      responsive: [
         {
            breakpoint: 991,
            settings: 'unslick'
         }
      ]
   });

   var schemeSlider = $('.scheme-grid');

   schemeSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var all = slick.slideCount;

      $('.scheme-slider--control .slider-control__current').text((i < 10) ? ("0" + i) : i);
      $('.scheme-slider--control .slider-control__all').text((all < 10) ? ("0" + all) : all);
   });

   schemeSlider.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      mobileFirst: true,
      variableWidth: true,
      infinite: false,
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,
      prevArrow: $('.scheme-slider--control .prev'),
      nextArrow: $('.scheme-slider--control .next'),

      responsive: [
         {
            breakpoint: 1201,
            settings: 'unslick'
         }
      ]
   });


   var factSlider = $('.fact-grid');

   factSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var all = slick.slideCount;

      $('.fact-slider--control .slider-control__current').text((i < 10) ? ("0" + i) : i);
      $('.fact-slider--control .slider-control__all').text((all < 10) ? ("0" + all) : all);
   });

   factSlider.slick({
      slidesToScroll: 1,
      swipeToSlide: true,
      mobileFirst: true,
      variableWidth: true,
      infinite: false,
      touchThreshold: 20,
      edgeFriction: 0.5,
      speed: 250,
      prevArrow: $('.fact-slider--control .prev'),
      nextArrow: $('.fact-slider--control .next'),

      responsive: [
         {
            breakpoint: 769,
            settings: 'unslick'
         }
      ]
   });

   $('.footer-nav-btn').click(function () {
      $(this).toggleClass('active');
      $('.footer-nav__list').fadeToggle(500);
   });

   $('.close-popup').click(function () {
      $.magnificPopup.close();
   });

   //Отправка почты
   // sendForm();
   function sendForm() {
      $.magnificPopup.open({
         items: {
            src: '#send-popup'
         },
         type: 'inline',
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };


   $('.lazy').Lazy({
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      visibleOnly: true,

      onError: function (element) {
         console.log('error loading ' + element.data('src'));
      }
   });


   $(window).on('resize orientationchange', function () {

      if ($(window).width() < 1201) {
         schemeSlider.slick('init');
      }
      if ($(window).width() < 992) {
         problemSlider.slick('init');
         goodsSlider.slick('init');
         workVideo.slick('init');
         mounterSlider.slick('init');
      }
      if ($(window).width() < 770) {
         factSlider.slick('init');
      }
      if ($(window).width() < 577) {
         // workPhotoSlider.slick('init');
      }
   });

   $('.btn-popup').magnificPopup({
      type: 'inline',
      fixedContentPos: true,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
   });

   $('.card-goods').click(function () {
      var video_clone = $(this).find('.card-goods__info').data('video');
      var img_clone = $(this).find('.card-goods__info').data('img');
      var list_clone = $(this).find('.popup-card__spec_list').clone();
      var price_clone = $(this).find('.card-goods__price span').text();
      var name_clone = $(this).find('.card-goods__name').text();

      $('#card-popup .see-btn').attr('href', video_clone);
      $('#card-popup .popup-card__img img').attr('src', img_clone);
      $('#card-popup .popup-card__spec_list').remove();
      $('#card-popup .popup-card__spec').append(list_clone);
      $('#card-popup .popup-card__price span').text(price_clone);
      $('#card-popup .popup-card__title').text(name_clone);
   });

   var ww = $(window).width();
   var wh = $(window).height();

   var discount_label = $('.discount-label');

   $(document).mousemove(function (e) {
      var X = e.pageX;
      var Y = e.pageY;

      if (ww - X < 50 && ww > 993) {
         discount_label.addClass('show');
      }
   });

   jQuery(function ($) {
      $(document).mouseout(function (e) {
         if (discount_label.hasClass('show')) {
            var div = discount_label;
            if (!div.is(e.target)
               && div.has(e.target).length === 0) {
               //$('.m-btn').removeClass('active');
               discount_label.removeClass('show');
            }
         }
      });
   });




   var param_name, event_name;
   // Универсальный обработчик
   if (typeof document.hidden != 'undefined') {
      param_name = 'hidden';
      event_name = 'visibilitychange';
   }
   // Mozilla-based браузеры
   else if (typeof document.mozHidden != 'undefined') {
      param_name = 'mozHidden';
      event_name = 'mozvisibilitychange';
   }
   // IE-based браузеры
   else if (typeof document.msHidden != 'undefined') {
      param_name = 'msHidden';
      event_name = 'msvisibilitychange';
   }
   // WebKit-based браузеры
   else if (typeof document.webkitHidden != 'undefined') {
      param_name = 'webkitHidden';
      event_name = 'webkitvisibilitychange';
   }
   // Браузер не поддерживает Page Visibility API
   else {
      param_name = false;
      window.addEventListener('focus', get_focus, false);
      window.addEventListener('blur', lost_focus, false);
   }

   // Установить обработчик события, если оно поддерживается
   if (param_name) {
      document.addEventListener(event_name, function () {
         if (document[param_name]) {
            lost_focus();
         }
         else {
            get_focus();
         }
      }, false);
   }

   function get_focus() {
      // Выполнить действия при активации вкладки
      if (showCatalogCount == 0) {
         //showCatalogPopup();
      }
      showCatalogCount = 1;
   }

   // Обработчик потери фокуса
   function lost_focus() {
      // Выполнить действия при уходе с вкладки
   }

   var showCatalogCount = 0;

   function showCatalogPopup() {
      $.magnificPopup.open({
         items: {
            src: '#pamphlet-popup'
         },

         type: 'inline',
         fixedContentPos: true,
         fixedBgPos: true,
         overflowY: 'auto',
         closeBtnInside: true,
         preloader: false,
         midClick: true,
         removalDelay: 300,
         mainClass: 'my-mfp-zoom-in',
      }, 0);
   };

   var closeFancy = $('<div class="closeFancy fancybox-button--close"><svg><use xlink:href="img/sprite.svg#close"></use></svg></div>')
   $("[data-fancybox]").fancybox({
      afterShow: function () {
         $('.fancybox-content').append(closeFancy);
      }
   });

   $('body').on('click touchstart', '.closeFancy', function () {
      $.fancybox.close();
   });
});

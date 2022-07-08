$(document).ready(function () {
   /*
<!-- load images the lazy way -->
<img class="lazy" data-src="image.jpg" />

<!-- load background images of other element types -->
<div class="lazy" data-src="image.jpg"></div>

<!-- load iframe -->
<div class="lazy" data-loader="youtubeLoader" data-video="pat2c33sbog"></div>
*/

   $('.lazy').Lazy({
      // your configuration goes here
      scrollDirection: 'vertical',
      effect: 'fadeIn',

      //delay: 500,
      visibleOnly: true,
      imageBase: "img/",

      afterLoad: function (elm) {
         $(elm).removeClass("lazy-load");
      },

      // embed a youtube video
      // youtubeLoader: function (element) {
      //    var url = 'https://www.youtube.com/embed/',
      //       frame = $('<iframe />')

      //    frame.attr('width', 700)
      //    frame.attr('height', 394)
      //    frame.attr('frameborder', 0)
      //    frame.attr('src', url + element.data("video"));

      //    element.append(frame).load();
      // },

      onError: function (element) {
         console.log('error loading ' + element.data('src'));
      }
   });





   // Маска телефона
   $(function ($) {
      $("input[type='tel']").mask("+7 (999) 999-99-99");
   });

   $("input").attr("autocomplete", "off");

   //Чексбокс, персон данные
   $('.person-data input').change(function () {
      var button = $(this).parents('form').find('button');

      if ($(this).prop('checked')) {
         button.attr('disabled', false);
      } else {
         button.attr('disabled', true);
      }
   });

   $('.tooltip').tooltipster({
      animation: 'fade',
      delay: 200,
      trigger: 'click',
      // side: ['right']
      // ZIndex: "1000",
      // scroll: true,

   });

   //ФенсиБокс
   $('[data-fancybox]').fancybox({
      backFocus: false,
   });

   $(document).find('.slick-cloned a').removeAttr('data-fancybox');

   //Модалки
   $('.modal_popup').magnificPopup({
      type: 'inline',

      fixedContentPos: true,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      //modal: true,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
   });

   //sendForm();
   //Отправка почты



   //Анимация
   var wow = new WOW(
      {
         boxClass: 'wow',      // animated element css class (default is wow)
         animateClass: 'animated', // animation css class (default is animated)
         offset: 0,          // distance to the element when triggering the animation (default is 0)
         mobile: false,       // trigger animations on mobile devices (default is true)
         live: true,       // act on asynchronously loaded content (default is true)
         callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
         },
         scrollContainer: null,    // optional scroll container selector, otherwise use window,
         resetAnimation: true,     // reset animation on end (default is true)
      }
   );
   wow.init();


});

$(document).ready(function () {
   /*
<!-- load images the lazy way -->
<img class="lazy" data-src="image.jpg" />

<!-- load background images of other element types -->
<div class="lazy" data-src="image.jpg"></div>

<!-- load iframe -->
<div class="lazy" data-loader="youtubeLoader" data-video="pat2c33sbog"></div>
*/

   $('.lazy').Lazy({
      // your configuration goes here
      scrollDirection: 'vertical',
      effect: 'fadeIn',

      //delay: 500,
      visibleOnly: true,
      imageBase: "img/",

      afterLoad: function (elm) {
         $(elm).removeClass("lazy-load");
      },

      // embed a youtube video
      // youtubeLoader: function (element) {
      //    var url = 'https://www.youtube.com/embed/',
      //       frame = $('<iframe />')

      //    frame.attr('width', 700)
      //    frame.attr('height', 394)
      //    frame.attr('frameborder', 0)
      //    frame.attr('src', url + element.data("video"));

      //    element.append(frame).load();
      // },

      onError: function (element) {
         console.log('error loading ' + element.data('src'));
      }
   });





   // Маска телефона
   $(function ($) {
      $("input[type='tel']").mask("+7 (999) 999-99-99");
   });

   $("input").attr("autocomplete", "off");

   //Чексбокс, персон данные
   $('.person-data input').change(function () {
      var button = $(this).parents('form').find('button');

      if ($(this).prop('checked')) {
         button.attr('disabled', false);
      } else {
         button.attr('disabled', true);
      }
   });

   $('.tooltip').tooltipster({
      animation: 'fade',
      delay: 200,
      trigger: 'click',
      // side: ['right']
      // ZIndex: "1000",
      // scroll: true,

   });

   //ФенсиБокс
   $('[data-fancybox]').fancybox({
      backFocus: false,
   });

   $(document).find('.slick-cloned a').removeAttr('data-fancybox');

   //Модалки
   $('.modal_popup').magnificPopup({
      type: 'inline',

      fixedContentPos: true,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      //modal: true,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
   });

   //sendForm();
   //Отправка почты



   //Анимация
   var wow = new WOW(
      {
         boxClass: 'wow',      // animated element css class (default is wow)
         animateClass: 'animated', // animation css class (default is animated)
         offset: 0,          // distance to the element when triggering the animation (default is 0)
         mobile: false,       // trigger animations on mobile devices (default is true)
         live: true,       // act on asynchronously loaded content (default is true)
         callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
         },
         scrollContainer: null,    // optional scroll container selector, otherwise use window,
         resetAnimation: true,     // reset animation on end (default is true)
      }
   );
   wow.init();


});

window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
   }, 500);
}


$(document).ready(function () {
   // $('#pixel-btn').click(function () {
   //    $('.pixel-img').toggleClass('active');
   // });

   //Ширина скроллбара(что бы не прыгало при открытии меню)
   let div = document.createElement('div');
   div.style.overflowY = 'scroll';
   div.style.width = '50px';
   div.style.height = '50px';

   document.body.append(div);
   let scrollWidth = div.offsetWidth - div.clientWidth;

   div.remove();

   //Липкая шапка
   $(function () {
      $(window).scroll(function () {
         if ($(this).scrollTop() >= 290) {
            $('header').addClass('stickytop');
         }
         else {
            $('header').removeClass('stickytop');
         }
      });
   });

   //Оверлей
   function showOverlay() {
      $('html').css('overflow', 'hidden');
      $("body").append("<div class='overlay'></div>");
      $("body").css('padding-right', scrollWidth);
   };

   function hideOverlay() {
      $('html').css('overflow', 'auto');
      $('.overlay').remove();
      $("body").css('padding-right', '0');
   };

   //Менюха
   var openMenuBtn = $('.menu-btn');
   var closeMenuBtn = $('.mob-menu__close');
   var mobMenu = $('.mob-menu');

   function openMenu() {
      mobMenu.addClass('show');
      $(this).addClass('open');
      showOverlay();
   };

   function closeMenu() {
      mobMenu.removeClass('show');
      openMenuBtn.removeClass('open');
      hideOverlay();
   };

   openMenuBtn.click(function () {
      openMenu();
   });

   closeMenuBtn.click(function () {
      closeMenu();
   });

   //Закрытие моб меню
   $('.mob-menu__nav a').click(function () {
      closeMenu();
   });

   //Закрытие меню при клике вне
   jQuery(function ($) {
      $(document).mouseup(function (e) {
         if (mobMenu.hasClass('show')) {
            var div = mobMenu;
            if (!div.is(e.target)
               && div.has(e.target).length === 0) {
               closeMenu();
            }
         }
      });
   });

   //Анимация на главной
   $('#section1').on('mousemove', (e) => {
      var x = e.pageX / $(window).width();
      var y = e.pageY / $(window).height();

      $('.device-img').css(
         'transform',
         'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
      );
   });

   // $('#section7').on('mousemove', (e) => {
   //    var x = e.pageX / $(window).width();
   //    var y = e.pageY / $(window).height();

   //    $('.journal').css(
   //       'transform',
   //       'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
   //    );
   // });





   //Скролл по клику
   $(".scroll-link").click(function () {
      event.preventDefault();
      var minus = 150;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1500);
      closeMenu();
   });

   //скролл SPY
   // $(function () {
   //    $('.navigation').navpoints({
   //       speed: 1500,
   //       offset: 50,
   //       updateHash: false,
   //    });
   // });

   // (function ($) {
   //    "use strict";
   //    // all parameters are optional
   //    smartScroll.init({
   //       speed: 1200, // default 500
   //       addActive: true, // default true
   //       activeClass: "active", // default active
   //       offset: 0 // default 100
   //    }, function () {
   //       //console.log("callback");
   //    });
   // })(jQuery);

   //Слайдер Сертификаты
   $('.certificate-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var outCurrent = $('.certificateS-control .slider-control__current');
      var outTotal = $('.certificateS-control .slider-control__total')

      if (i < 10) {
         outCurrent.text('0' + i);
      } else {
         outCurrent.text(i);
      }

      if (slick.slideCount < 10) {
         outTotal.text('/ ' + '0' + slick.slideCount);
      } else {
         outTotal.text('/ ' + slick.slideCount);
      }
   });

   $('.certificate-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      arrows: true,
      dots: false,
      swipeToSlide: true,
      swipe: true,
      prevArrow: $('.certificateS-control .prev'),
      nextArrow: $('.certificateS-control .next'),

      responsive: [
         { breakpoint: 993, settings: { slidesToShow: 3, } },
         { breakpoint: 769, settings: { slidesToShow: 2, } },
         { breakpoint: 577, settings: { slidesToShow: 1, } },
      ]
   });

   //Слайдер выбор айбак
   $('.choose-ibact__slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;


      var outCurrent = $(this).parents('.choose-ibact__sliderWrap').find('.slider-control2__current');

      var outTotal = $(this).parents('.choose-ibact__sliderWrap').find('.slider-control2__total');
      //var outCurrent = $('.slider-control2 .slider-control__current');
      //var outTotal = $('.slider-control2 .slider-control__total')

      if (i < 10) {
         outCurrent.text('0' + i);
      } else {
         outCurrent.text(i);
      }

      if (slick.slideCount < 10) {
         outTotal.text('/ ' + '0' + slick.slideCount);
      } else {
         outTotal.text('/ ' + slick.slideCount);
      }
   });

   $('.choose-ibact__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      fade: true,
      cssEase: 'linear',
      arrows: false,
      dots: false,
      swipeToSlide: true,
      swipe: true,
      // prevArrow: $('.slider-control2 .prev'),
      // nextArrow: $('.slider-control2 .next'),

      responsive: [
         // { breakpoint: 993, settings: { slidesToShow: 3, } },
         // { breakpoint: 769, settings: { slidesToShow: 2, } },
         // { breakpoint: 577, settings: { slidesToShow: 1, } },
      ]
   });

   $('.next').on('click', function () {
      $(this).parents('.choose-ibact__sliderWrap').find('.choose-ibact__slider').slick('slickNext');
   });
   $('.prev').on('click', function () {
      $(this).parents('.choose-ibact__sliderWrap').find('.choose-ibact__slider').slick('slickPrev');
   });


   //Слайдер Отзывы
   $('.review-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var outCurrent = $('.reviewS-control .slider-control__current');
      var outTotal = $('.reviewS-control .slider-control__total')

      if (i < 10) {
         outCurrent.text('0' + i);
      } else {
         outCurrent.text(i);
      }

      if (slick.slideCount < 10) {
         outTotal.text('/ ' + '0' + slick.slideCount);
      } else {
         outTotal.text('/ ' + slick.slideCount);
      }
   });

   $('.review-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      arrows: true,
      dots: false,
      swipeToSlide: true,
      swipe: true,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      prevArrow: $('.reviewS-control .prev'),
      nextArrow: $('.reviewS-control .next'),

      responsive: [
         { breakpoint: 993, settings: { slidesToShow: 1, } },
         { breakpoint: 769, settings: { slidesToShow: 1, } },
         {
            breakpoint: 577, settings: {
               slidesToShow: 1,
               //adaptiveHeight: true,
            }
         },
      ]
   });


   //Смена изображения, в цвет. решениях
   $('#section7 .solutions-btn').click(function () {
      $('.solutions-btn').removeClass('active');
      $(this).addClass('active');

      var dataImg = $(this).data('img');
      var par = $(this).parents('.color-solutions');
      par.find('img').fadeOut(0);
      par.find('img[data-img="' + dataImg + '"]').fadeIn(500);

   });

   //Табы
   $('.tabs__btn2').click(function () {
      $('.tabs__content1').fadeOut(0);
      $('.tabs__content2').fadeIn(0);
      $('.tabs__btn').removeClass('active');
      $(this).addClass('active');
      $('#section10 .tabs__head h2').empty();
      $('#section10 .tabs__head h2').append('<span class="orange">О нас </span> говорят в <br> СМИ');
      $('#section10').addClass('tab2');
   });

   $('.tabs__btn1').click(function () {
      $('.tabs__content2').fadeOut(0);
      $('.tabs__content1').fadeIn(0);
      $('.tabs__btn').removeClass('active');
      $(this).addClass('active');
      $('#section10 .tabs__head h2').empty();
      $('#section10 .tabs__head h2').append('<span class="orange">Нам доверяют</span> крупнейшие компании России');
      $('#section10').removeClass('tab2');
   });

   //Слайдер с лого
   $('.tabs-slider1').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var outCurrent = $('.tabs__content1 .reviewT-control .slider-control__current');
      var outTotal = $('.tabs__content1 .reviewT-control .slider-control__total')

      if (i < 10) {
         outCurrent.text('0' + i);
      } else {
         outCurrent.text(i);
      }

      if (slick.slideCount < 10) {
         outTotal.text('/ ' + '0' + slick.slideCount);
      } else {
         outTotal.text('/ ' + slick.slideCount);
      }
   });

   if ($(window).width() < 993) {
      $('.tabs-slider1').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         swipeToSlide: true,
         swipe: true,
         variableWidth: true,
         prevArrow: $('.tabs__content1 .reviewT-control .prev'),
         nextArrow: $('.tabs__content1 .reviewT-control .next'),

         responsive: [
            // { breakpoint: 769, settings: { slidesToShow: 2, } },
            // { breakpoint: 577, settings: { slidesToShow: 1, } },
            // { breakpoint: 320, settings: { slidesToShow: 1, } },
         ]
      });
   }

   $('.tabs-slider2').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      var outCurrent = $('.tabs__content2 .reviewT-control .slider-control__current');
      var outTotal = $('.tabs__content2 .reviewT-control .slider-control__total')

      if (i < 10) {
         outCurrent.text('0' + i);
      } else {
         outCurrent.text(i);
      }

      if (slick.slideCount < 10) {
         outTotal.text('/ ' + '0' + slick.slideCount);
      } else {
         outTotal.text('/ ' + slick.slideCount);
      }
   });

   if ($(window).width() < 993) {
      $('.tabs-slider2').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         swipeToSlide: true,
         swipe: true,
         variableWidth: true,
         prevArrow: $('.tabs__content2 .reviewT-control .prev'),
         nextArrow: $('.tabs__content2 .reviewT-control .next'),

         responsive: [
            // { breakpoint: 769, settings: { slidesToShow: 2, } },
            { breakpoint: 577, settings: { slidesToShow: 1, } },
            // { breakpoint: 320, settings: { slidesToShow: 1, } },
         ]
      });
   }


   //Передача в попап данных о продукте
   $('.choose-ibact .goods-card__buy').click(function () {
      var nameProduct = $(this).data('name');
      var areaProduct = $(this).data('area');
      var imgLink = $(this).data('img');

      var outProduct = $('#buy-ibact .order-info__title');
      var outArea = $('#buy-ibact .order-info__area');
      var outImg = $('#buy-ibact .order-info__img img');

      var inputName = $('#buy-ibact input[name="name-product"]');
      var inputArea = $('#buy-ibact input[name="area-product"]');

      outProduct.text(nameProduct);
      outArea.text(areaProduct);
      outImg.attr("src", imgLink);

      inputName.val(nameProduct);
      inputArea.val(areaProduct);

      //console.log(imgLink);
   });



   //Прикрепит файл
   $('.file-upload input[type=file]').change(function () {

      var info = $(this).parents('.upload_wrap').find('.info');
      var add = $(this).val().replace("C:\\fakepath\\", '');
      var num = this.files.length;

      if (num == 1) {
         info.text('прикреплен: ' + add);
      } else if (num > 1) {
         info.text('прикрепленно: ' + num + ' файла');
      } else {

      }
   });

   //Размер файла
   $('#userfile').bind('change', function () {
      var size = (this.files[0].size);
      if (size >= 10000000) {
         $('._form .upload_wrap .info').text('Файл больше 10мб...');
         $('._form .upload_wrap .info').css('color', 'red');
         $('._form .upload_wrap .info').css('color', 'red');
         $(this).parents('._form').find('button[type="submit"]').prop('disabled', true);
      } else {
         $('._form .upload_wrap .info').css('color', '#2b2b2b');
         $(this).parents('._form').find('button[type="submit"]').prop('disabled', false);
      }
   });


   // $('.certificateS-control .prev').click(function () {
   //    $('.certificate-slider').slick('slickPrev');
   // });
   // $('.certificateS-control .next').click(function () {
   //    $('.certificate-slider').slick('slickNext');
   // });




   //Отправка почты
   function sendForm() {
      $.magnificPopup.open({
         items: {
            // src: '#form-send'
            src: '#form-send'
         },
         type: 'inline',
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };

   function errorForm() {
      $.magnificPopup.open({
         items: {
            src: '#form-error'
         },
         type: 'inline',
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };

   //Форма
   $('.form .formgroup input, form .formgroup textarea').blur(function () {
      var inputContent = $(this).val();

      var label = $(this).parents('.formgroup').find('.ef');

      if (inputContent !== '') {
         label.addClass('has-content');
         //$(this).addClass('has-content');
      } else {
         label.removeClass('has-content');
         //$(this).removeClass('has-content');
      }
   });

   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tel: "required",
            // email: {
            //    required: true,
            //    email: true
            // }
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: {
               required: "Ваш email?",
               email: "Введите привильный адрес эл. почты"
            }
         },
         highlight: function (element) {
            $(element)
               .text('').addClass('error');
         },

         success: function (element) {
            element
               .text('').addClass('valid')
         }
      });
   });

   $(".validate2").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tel: "required",
            email: {
               required: true,
               email: true
            }
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: {
               required: "Ваш email?",
               email: "Введите привильный адрес эл. почты"
            }
         },
         highlight: function (element) {
            $(element)
               .text('').addClass('error');
         },

         success: function (element) {
            element
               .text('').addClass('valid')
         }
      });
   });

   $("form").each(function () {
      $(this).submit(function () {
         if ($(this).valid()) {
            // var form_data = $(this).serialize();
            var form_data = new FormData(this);
            $.ajax({
               url: "scripts/phpmailer/send_mail.php",
               type: 'POST',
               data: form_data,
               cache: false,
               contentType: false,
               processData: false,
               success: function () {
                  // $('._form').trigger('reset');

                  ym(65933224, 'reachGoal', 'send_form');
                  $("form")[0].reset();
                  sendForm();
               },
               error: function () {
                  // errorForm();
               }
            });
         } else { }
         return false;
      });
   });

   //закрыть попап по кнопке
   $('.modal-close').click(function () {
      $(this).parents('.modal').find('.mfp-close').trigger('click');
   });

   //Вызов попап
   //callPopup();
   function callPopup() {
      $.magnificPopup.open({
         items: {
            // src: '#form-send'
            src: '#modal-delivery'
         },
         type: 'inline',
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };




   //Квиз
   var quizStep = $('.quiz-step__step');
   var numQuizStep = $('.num-step__item');

   var quizPrevBtn = $('.quiz-step__footer .btn-prev');
   var quizNextBtn = $('.quiz-step__footer .btn-next');

   var numStep = 0;
   var stepProc = 20;


   quizPrevBtn.click(function () {
      if (numStep > 0) {
         numStep--;
         stepProc = stepProc - 20;

         changeStep();
         changeLine();

         // console.log(numStep);
         // console.log(stepProc);
      }
   });

   quizNextBtn.click(function () {
      if (numStep < 4) {
         numStep++;
         stepProc = stepProc + 20;

         changeStep();
         changeLine();

         // console.log(numStep);
         // console.log(stepProc);
      }
   });

   function changeStep() {
      quizStep.fadeOut(0);
      quizStep.eq(numStep).fadeIn(200);

      numQuizStep.removeClass('active');
      numQuizStep.eq(numStep).addClass('active');
   };

   function changeLine() {
      var line = $('.quiz-status__line');
      var lineText = $('.quiz-status__percent');

      if (numStep == 0) {
         line.css('width', '20%');
         lineText.text('20');
      } else if (numStep == 1) {
         line.css('width', '40%');
         lineText.text('40');
      } else if (numStep == 2) {
         line.css('width', '60%');
         lineText.text('60');
      } else if (numStep == 3) {
         line.css('width', '80%');
         lineText.text('80');
      } else if (numStep == 4) {
         line.css('width', '100%');
         lineText.text('100');
      }
   }

   //Выбор в квизе
   var chosenStep1;
   var stepChange1 = $('.ibact-series__item');

   stepChange1.click(function () {
      stepChange1.removeClass('active');
      $(this).addClass('active');

      $(this).parents('.quiz-step__step')
         .find('.btn-next').addClass('active');

      chosenStep1 = $(this).data('series');
      formQuiz();
      //console.log(chosenStep1);
   });

   var chosenStep2;
   var stepChange2 = $('.retail__item');

   stepChange2.click(function () {
      stepChange2.removeClass('active');
      $(this).addClass('active');
      chosenStep2 = $(this).data('retail');

      $(this).parents('.quiz-step__step')
         .find('.btn-next').addClass('active');

      // console.log(chosenStep2);
      formQuiz();
   });

   var chosenStep3;
   var stepChange3 = $('.step-area__item');

   stepChange3.click(function () {
      stepChange3.removeClass('active');
      $(this).addClass('active');
      chosenStep3 = $(this).data('area');

      $(this).parents('.quiz-step__step')
         .find('.btn-next').addClass('active');

      //console.log(chosenStep3);
      formQuiz();
   });

   var chosenStep4 = "Серый";
   //изобр. шаг4
   $('.quiz .solutions-btn').click(function () {
      $('.quiz .solutions-btn').removeClass('active');
      $(this).addClass('active');

      var dataImg = $(this).data('img');
      var par = $(this).parents('.color-solutions');
      par.find('img').fadeOut(0);
      par.find('img[data-img="' + dataImg + '"]').fadeIn(500);

      chosenStep4 = $(this).data('color');

      $(this).parents('.quiz-step__step')
         .find('.btn-next').addClass('active');

      formQuiz();
      // console.log(chosenStep4);
   });

   var chosenStep5 = "Москва";
   var stepChange5 = $('.step-delivery__item');

   stepChange5.click(function () {
      stepChange5.removeClass('active');
      $(this).addClass('active');
      chosenStep5 = $(this).data('city');
      formQuiz();

      // console.log(chosenStep5);
   });

   function formQuiz() {
      $('.form-quiz input[name="name-product"]').val(chosenStep1);
      $('.form-quiz input[name="retail-product"]').val(chosenStep2);
      $('.form-quiz input[name="product-area"]').val(chosenStep3);
      $('.form-quiz input[name="product-color"]').val(chosenStep4);
      $('.form-quiz input[name="delivery-city"]').val(chosenStep5);
   }

   $('.submit-quiz').click(function () {
      $('.form-quiz button.btn-send').trigger('click');
   });

   //Анимация айбакта
   var animateEls = $('.how-work__item');
   var animateEl1 = $('.how-work__item1');
   var animateEl2 = $('.how-work__item2');
   var animateEl3 = $('.how-work__item3');

   setInterval(function () {
      anIbact1();
      anIbact2();
      anIbact3();
   }, 12000);

   start();

   function start() {
      var anImg = '<img src="img/ibact-animate.svg" alt="ibact">';
      $('.how-work__item4').append(anImg);
      anIbact1();
      anIbact2();
      anIbact3();
   }


   function anIbact1() {
      animateEls.removeClass('active');
      animateEl1.addClass('active');
   };

   function anIbact2() {
      setTimeout(function () {
         animateEls.removeClass('active');
         animateEl2.addClass('active');
      }, 3000);
   };

   function anIbact3() {
      setTimeout(function () {
         animateEls.removeClass('active');
         animateEl3.addClass('active');
      }, 7700);
   };









   //Лишнее >>
   $('.block').click(function () {
      $(this).parents('.quiz-body__step').find('.btn-next').addClass('active');
   });

   function animateNum() {
      var numb_start = $(".quiz-status__line .proc").text(); // Получаем начальное число

      $({ numberValue: numb_start }).animate({ numberValue: 1000 }, {

         duration: 500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
         easing: "linear",

         step: function (val) {

            $(".quiz-status__line .proc").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
         }
      });
   }

   // $('#test').click(function () {
   //    animateNum();
   // });


});


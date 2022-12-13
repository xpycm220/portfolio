$(document).ready(function () {
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


   //Sliders
   var mainSlider = new Swiper(".main-slider", {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
         crossFade: true,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      // autoplay: {
      //    delay: 5000,
      // },
   });

   var clientsSlider = new Swiper(".clients-slider", {
      slidesPerView: "auto",
      grid: {
        rows: 1,
      },
      spaceBetween: 0,
      centeredSlides: true,

      breakpoints: {
         320: {
            grid: {
               rows: 1,
            },
            spaceBetween: 0,
            centeredSlides: true,
         },
         577: {
            grid: {
               rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 120,
            centeredSlides: false,
         },
         768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 120,

            grid: {
               rows: 2,
            },
         },
         993: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 120,

            grid: {
               rows: 2,
            },
         },

         1200: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 120,

            grid: {
               rows: 2,
            },
         }
      }
   });

   var contactorSlider = new Swiper(".contractor-slider", {
      slidesPerView: "auto",
      grid: {
        rows: 1,
      },
      spaceBetween: 0,
      centeredSlides: true,

      breakpoints: {
         320: {
            grid: {
               rows: 1,
            },
            spaceBetween: 0,
            centeredSlides: true,
         },
         577: {
            grid: {
               rows: 2,
            },
            slidesPerView: 2,
            spaceBetween: 120,
            centeredSlides: false,
         },
         768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 120,

            grid: {
               rows: 2,
            },
         },
         993: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 120,

            grid: {
               rows: 2,
            },
         },

         1200: {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 120,

            grid: {
               rows: 2,
            },
         }
      }
   });

   $('.form-checkbox input').change(function () {
      var button = $(this).closest('form').find('button');
    
      if ($(this).prop('checked')) {
        button.attr('disabled', false);
      } else {
        button.attr('disabled', true);
      }
   });

   //формы
   $(".form").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tel: "required",
            email: {
               required: true,
               email: true
            },
            message: "required",
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: {
               required: "Ваш email?",
               email: "Пожалуйста, введите привильный адрес электронной почты"
            },
            message: "Ваше сообщение?",
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
      $("input[type='tel']").mask("+7 (999) 999-99-99");
   });

   // sendForm();
   function sendForm() {
      $.magnificPopup.open({
         items: {
            src: '#send-popup'
         },
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };

   //Popup   
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

   //Скролл по клику
   $(".header__nav a").click(function () {
      event.preventDefault();
      var minus = 60;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1500);
   });
   
   //Анимация Диалогов
   

   $(window).on('scroll', () => {
      var wh = $(window).height();
      var windowScrollPosition = $(window).scrollTop();
      var box = $('.stages');


      box.each(function (){
         var pos_box = $(this).offset().top;
   
         if(pos_box < (windowScrollPosition + wh / 2)) {
            $(this).find('.stages__dialog').fadeIn();
         }
      });

      var ww = $(window).width();

      if (ww > 1200) {
         animateMap();
      }
   });

   $('.stages__num').hover(function (){
      $(this).next().fadeIn();
   });

   function animateMap() {
      var trigger = $('.section-advantages');
      var animateBlock = $('.advantages__img');
      var windowScrollPosition = $(window).scrollTop();
      var triggerOffsetTop = trigger.offset().top;
      var triggerHeight = trigger.outerHeight();
      var windowHeight = $(window).height();
      var startAnimation = triggerOffsetTop - windowHeight + (triggerHeight / 3);


      // console.log('scroll ' + windowScrollPosition);
      // console.log('позиция тригера ' + triggerOffsetTop);
      // console.log('высота тригера' + triggerHeight);
      // console.log('высота экрана ' + windowHeight);
      // console.log('Старт ' + startAnimation);

      var start2 = (windowScrollPosition - startAnimation) / 3;
      // console.log('start2 ' + start2);

      if (windowScrollPosition > startAnimation) {
         animateBlock.css({"transform":"translate(0px, -" + start2 + "px )"});
      }
   }




   //Карта
   let center = [55.866658, 37.502787];
   let baloon_coord = [55.868304, 37.498213];

   if ($(window).width() < 993) {
      center = [55.868304, 37.498213];
   }

   function init() {
      let map = new ymaps.Map('map', {
         center: center,
         zoom: 17
      });

      let placemark1 = new ymaps.Placemark(baloon_coord, {
         balloonContent: `
            <div class="balloon">
               <div class="balloon__address">
               г. Москва,<br> улица Клинская дом 6.<br> Офис №224
               </div>
            </div>
         `
      }, {
         iconLayout: 'default#image',
         iconImageHref: 'img/pin.svg',
         iconImageSize: [40, 40],
         iconImageOffset: [-19, -44]
      });

      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
      map.geoObjects.add(placemark1);
   }

   ymaps.ready(init);
});






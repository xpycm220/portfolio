$(document).ready(function () {

   $('.menu-btn').click(function (){
      showMobMenu();
   });

   $('.mobile-menu__close').click(function (){
      hideMobMenu();
   });


   /// меню
   function showMobMenu() {
      $('.mobile-menu').addClass('show');
      showOverlay();
   }

   function hideMobMenu() {
      $('.mobile-menu').removeClass('show');
      hideOverlay();
   }

   $('body').on('click', '.overlay', function () {
      hideMobMenu();
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

   //Слайдер наши работы
   (function () {
      const worksSlider = document.querySelector('.our-works__slider');
   
      let dataSet = false;
      let swiper;
   
      function mobileSlider() {
         if (worksSlider != null) {
            if (window.innerWidth <= 768 && dataSet == false) {
               swiper = new Swiper(worksSlider, {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  loop: false,
                  pagination: {
                     el: ".swiper-pagination",
                     dynamicBullets: true,
                   },
               });
   
               dataSet = true;
            }
   
            if (window.innerWidth > 768) {
               dataSet = false;
   
               if (worksSlider.classList.contains('swiper-initialized')) {
                  swiper.destroy();
               }
            }
         }
      }
   
      mobileSlider();
   
      window.addEventListener('resize', () => {
         mobileSlider();
      });
   })();

   //Валидация
   $("input").attr("autocomplete", "off");

   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tell: {
               required: true,
            },
            message: "required",
            email: {
               required: true,
               email: true
            },
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tell: "Ваш телефон?",
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
   if ($("input[type='tel']").length) {
      $(function ($) {
         $("input[type='tel']").mask("+7 (999) 999-99-99");
      });
   }

   //проверка чекбокса политики
   $('.policy-link input').change(function (){
      if ($(this).is(':checked')) {
         $(this).parents('form').find('.btn').prop('disabled', false);
      } else {
         $(this).parents('form').find('.btn').prop('disabled', true);
      }
   });

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


   //Слайдер фасадов
   (function () {
      const fasadSlider = document.querySelector('.fasad-slider');
   
      let dataSet = false;
      let swiper;
   
      function mobileSlider() {
         if (fasadSlider != null) {
            if (window.innerWidth <= 991 && dataSet == false) {
               swiper = new Swiper(fasadSlider, {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  loop: false,
                  pagination: {
                     el: ".swiper-pagination",
                     dynamicBullets: true,
                   },
                   breakpoints: {
                     768: {
                       slidesPerView: 3,
                       spaceBetween: 50,
                     },
                  }
               });
   
               dataSet = true;
            }
   
            if (window.innerWidth > 991) {
               dataSet = false;
   
               if (fasadSlider.classList.contains('swiper-initialized')) {
                  swiper.destroy();
               }
            }
         }
      }
   
      mobileSlider();
   
      window.addEventListener('resize', () => {
         mobileSlider();
      });
   })();

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

   $('.advantage-list__num').animateNumber(
      {
        number: 15,
      },
      {
        easing: 'swing',
        duration: 2500
      }
    );
});


$(document).ready(function () {
   $('.navigation').scrollSpy({
      scrollDuration: 800,
      scrollEasing: 'easeInBack',
      offsetElement: '.header',
      ignoreAnchors: ['.not'],
   });

   //Чексбокс, персон данные
   $('.person-data input').change(function () {
      var button = $(this).parents('form').find('button');

      if ($(this).prop('checked')) {
         button.attr('disabled', false);
      } else {
         button.attr('disabled', true);
      }
   });

   $(".label-effect").focusout(function () {
      if ($(this).val() != "") {
         $(this).addClass("has-content");
      } else {
         $(this).removeClass("has-content");
      }
   });

   // Маска телефона
   $(function ($) {
      $("input[type='tel']").mask("+7 (000) 000-00-00", {
         // placeholder: "+7 (___) ___-__-__"
      });
   });

   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
   });

   $('.btn-popup').magnificPopup({
      type: 'inline',

      fixedContentPos: true,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      //modal: true,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
   });

   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tel: "required",
            email: "required",
         },
         errorPlacement: function (error, element) {
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: "Ваш e-mail?"
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

   function errorForm() {
      console.log('Ошибка');
   }
   // sendForm();
   function sendForm() {
      $.magnificPopup.open({
         items: {
            src: '#send-popup'
            // src: '#policy-popup'
         },
         type: 'inline',
         mainClass: 'my-mfp-zoom-in',
         removalDelay: 300,
      }, 0);
   };

   ///


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
      $("header").css('padding-right', checkScrollWidth);
   };

   function hideOverlay() {
      $('html').css('overflow', 'auto');
      $('.overlay').remove();
      $("header").css('padding-right', '0');
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


   $(document).on('click', '.js-videoPoster', function (e) {
      //отменяем стандартное действие button
      e.preventDefault();
      var poster = $(this);
      // ищем родителя ближайшего по классу
      var wrapper = poster.closest('.js-videoWrapper');
      videoPlay(wrapper);
   });

   //вопроизводим видео, при этом скрывая постер
   function videoPlay(wrapper) {
      var iframe = wrapper.find('.js-videoIframe');
      // Берем ссылку видео из data
      var src = iframe.data('src');
      // скрываем постер
      wrapper.addClass('videoWrapperActive');
      // подставляем в src параметр из data
      iframe.attr('src', src);
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

   $('.btn-toggle').click(function () {
      $(this).parents('.client-item__body').find('.client-item__text').toggleClass('show');

      var btn = $(this);
      btn.toggleClass('in');

      if (btn.hasClass('in')) {
         btn.text('Скрыть')
      } else {
         btn.text('Читать полностью');
      }
   });

   //Отправка почты
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

                  $("form")[0].reset();
                  sendForm();
               },
               error: function () {
                  errorForm();
               }
            });
         } else { }
         return false;
      });
   });
});

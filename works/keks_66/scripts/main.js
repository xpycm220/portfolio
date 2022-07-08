
$(document).ready(function () {
   var ww = $(window).width();

   $('.close-popup').click(function () {
      $.fancybox.close();
   });

   $('.scroll-spy').scrollSpy({
      offset: 60,
      scrollDuration: 500,
      scrollEasing: 'swing',
   });

   //анимация кнопок
   if (ww > 991) {
      $(function () {
         $('.main-btn, .phone-btn')
            .on('mouseenter', function (e) {
               var parentOffset = $(this).offset(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
               $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
               var parentOffset = $(this).offset(),
                  relX = e.pageX - parentOffset.left,
                  relY = e.pageY - parentOffset.top;
               $(this).find('span').css({ top: relY, left: relX })
            });
      });
   }

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

   $('[data-target]').click(function () {
      var target = $(this).data('target');
      $(target).addClass('show');
      showOverlay();
   });

   $('.sidebar-close').click(function () {
      var target = $(this).parents('.sidebar').prop('id');
      $('#' + target).removeClass('show');
      hideOverlay();
   });

   $('body').on('click', '.overlay', function () {
      $('.sidebar.show').removeClass('show');
      $('.call-menu.show').removeClass('show');
      hideOverlay();
   });

   //Закрытие моб меню
   $('.sidebar-nav a, .sidebar-nav logo').click(function () {
      //$('.menu-btn').removeClass('active');
      $('.sidebar-menu').removeClass('show');
      hideOverlay();
   });

   $('.close-callmenu').click(function () {
      $('#call-menu').removeClass('show')
      hideOverlay();
   });

   $('.trigger-callback').click(function () {
      $('#call-menu').removeClass('show');
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

   const main_slider = new Swiper('.main-slider', {
      loop: true,
      slidesPerView: 1,
      slideToClickedSlide: true,
      lazy: true,
      effect: 'fade',
      speed: 1000,
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
         // delay: 6000,
      },

      pagination: {
         el: '.main-pagination',
         clickable: true,
      },

      navigation: {
         nextEl: '.main-next',
         prevEl: '.main-prev',
      }
   });


   const portfolio_slider = new Swiper('.portfolio-slider', {
      loop: false,
      slidesPerView: "auto",
      slideToClickedSlide: true,
      spaceBetween: 12,
      grabCursor: true,

      pagination: {
         el: '.portfolio-pagination',
         clickable: true,
      },

      navigation: {
         nextEl: '.portfolio-next',
         prevEl: '.portfolio-prev',
      },

      breakpoints: {
         769: {
            spaceBetween: 12,
            spaceBetween: 64,
         }
      },
   });

   $('.client').tooltipster({
      contentAsHTML: true,
      theme: 'tooltipster-super',
      position: 'top',
      trigger: 'custom',
      // trigger: 'click'
   }).mouseover(function () {
      $(this).tooltipster('show');
   }).blur(function () {
      $(this).tooltipster('hide');
   }).mouseout(function () {
      if (document.activeElement !== this) {
         $(this).tooltipster('hide');
      }
   });


   const slider_clients = document.querySelector('.clients');

   let mySwiper;

   function mobileSlider() {
      if (window.innerWidth <= 1200 && slider_clients.dataset.mobile == 'false') {
         mySwiper = new Swiper(slider_clients, {
            spaceBetween: 18,
            loop: true,
            slidesPerView: "auto",
            navigation: {
               nextEl: '.clients-next',
               prevEl: '.clients-prev',
            },
         });

         slider_clients.dataset.mobile = 'true';
      }

      if (window.innerWidth > 1200) {
         slider_clients.dataset.mobile = 'false';
         if (slider_clients.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
         }
      }
   }

   mobileSlider()

   window.addEventListener('resize', () => {
      mobileSlider();
   });

   const sliders_inner = document.querySelectorAll('.portfolio-inner');

   sliders_inner.forEach((el) => {
      let swiper = new Swiper(el, {
         slidesPerView: 1,
         spaceBetween: 0,
         loop: true,
         allowTouchMove: false,
         lazy: true,

         navigation: {
            nextEl: el.querySelector('.inner-next'),
            prevEl: el.querySelector('.inner-prev'),
         },

         pagination: {
            el: ".swiper-pagination",
            type: "fraction",
         },
      });
   });

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

   //Анимация

   if (ww > 1200) {
      $('#section-follow').on('mousemove', (e) => {
         var x = e.pageX / $(window).width();
         var y = e.pageY / $(window).height();

         $('.follow__img picture').css(
            'transform',
            'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
         );
      });
   }


   //Скролл по клику
   $(".scroll-link").click(function () {
      event.preventDefault();
      var minus = 00;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   // Маска телефона
   $(function ($) {
      $("input[type='tel']").inputmask({
         "mask": "+7 (999) 999-99-99",
         showMaskOnHover: false,
      });
   });

   $("input").attr("autocomplete", "off");


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


   //Прикрепит файл
   $('.file-upload input[type=file]').change(function () {

      var input = $(this);
      var info = $(this).parents('.upload_wrap').find('.info');
      var add = $(this).val().replace("C:\\fakepath\\", '');
      var num = this.files.length;

      if (num == 1) {
         info.text('прикреплен: ' + add);
      } else if (num > 1) {
         info.text('прикрепленно: ' + num + ' файла');
      }

      var size = (this.files[0].size);
      if (size >= 10000000) {
         input.val('');
         info.text('Не прикреплён, файл больше 10мб...');
         info.css('color', 'tomato');
      } else {
         info.css('color', '#fff');
         $('.form .upload_wrap .info').css('color', '#fff');
      }
   });

   $(".validate").each(function () {
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
            // error.insertAfter(element);
         },

         messages: {
            name: "Ваше имя?",
            // tel: "Ваш телефон?",
            tel: {
               required: true,
            },
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
               required: false,
               email: true
            }
         },

         errorPlacement: function (error, element) {
            error.insertBefore(element);
            // var error_text = error.text();
            // element.parents('.formgroup').find('.ef').text(error_text);
         },

         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: {
               // required: "Ваш email?",
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


   $('.services-item__btn').click(function () {
      var title = $(this).parents('.services-item').find('.services-item__name').text();
      var text = $(this).parents('.services-item').find('.services-item__text').text();
      $('input[name="service"]').val(title);
      $('input[name="discr"]').val(text);
   });

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


   // Отправка почты
   $("form").each(function () {
      $(this).submit(function () {
         if ($(this).valid()) {
            var form_data = new FormData(this);
            $.ajax({
               url: "scripts/phpmailer/send_mail.php",
               type: 'POST',
               data: form_data,
               cache: false,
               contentType: false,
               processData: false,

               success: function () {
                  $("form")[0].reset();
                  sendForm();
               }
            });
         } else { }
         return false;
      });
   });

   //отправка
   function sendForm() {
      $('.sidebar').removeClass('show');
      hideOverlay();
      $.fancybox.close();
      $.fancybox.open({
         src: '#ok',
      });
   };

   function sendFormPresentation() {
      $('.sidebar').removeClass('show');
      hideOverlay();
      $.fancybox.close();
      $.fancybox.open({
         src: '#ok-present',
      });
   };


   const reviews_slider = new Swiper('.reviews-slider', {
      slidesPerView: 'auto',
      spaceBetween: 30,

      pagination: {
         el: '.reviews-pagination',
         clickable: true,
      },

      navigation: {
         nextEl: '.reviews-next',
         prevEl: '.reviews-prev',
      },

      breakpoints: {
         769: {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
         }
      },
   });

   $().fancybox({
      selector : '.review-item:not(.swiper-slide-duplicate)',
      hash     : false
    });
});


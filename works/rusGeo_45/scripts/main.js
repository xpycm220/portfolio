$(document).ready(function () {


   //Чексбокс, персон данные
   $('.person-data input').change(function () {
      var button = $(this).parents('form').find('button');

      if ($(this).prop('checked')) {
         button.attr('disabled', false);
      } else {
         button.attr('disabled', true);
      }
   });






   /*
   <!-- load images the lazy way -->
   <img class="lazy" data-src="path/to/image.jpg" />

   <!-- load background images of other element types -->
   <div class="lazy" data-src="path/to/image.jpg"></div>

   <!-- load iframe -->
   <div class="lazy" data-loader="youtubeLoader" data-video="pat2c33sbog"></div>
   */

   $('.lazy').Lazy({
      // your configuration goes here
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      visibleOnly: true,
      // imageBase: "img/",
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
});

$(document).ready(function () {
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
      $(".stickytop").css('padding-right', scrollWidth);
      $(".stickytop").addClass('hide');
   };

   function hideOverlay() {
      $('html').css('overflow', 'auto');
      $('.overlay').remove();
      $("body").css('padding-right', '0');
      $(".stickytop").css('padding-right', '0');
      $(".stickytop").removeClass('hide');
   };

   //Menu
   var openMenuBtn = $('.menu-btn');
   var menuBtnIcon = $('.menu-btn__icon');
   var closeMenuBtn = $('.main-menu .btn-close');
   var mainMenu = $('.main-menu');

   function openMenu() {
      openMenuBtn.addClass('active');
      menuBtnIcon.addClass('open');
      mainMenu.addClass('show');
      showOverlay();
   };

   function closeMenu() {
      openMenuBtn.removeClass('active');
      menuBtnIcon.removeClass('open');
      mainMenu.removeClass('show');
      hideOverlay();
   };

   openMenuBtn.click(function () {
      openMenu();
   });

   closeMenuBtn.click(function () {
      closeMenu();
   });

   //Contact-menu
   var openContactBtn = $('.header__contact-btn');
   var contactMenu = $('.contact-menu');
   var closeContactBtn = $('.contact-menu .btn-close');

   function openContactMenu() {
      openContactBtn.addClass('active');
      contactMenu.addClass('show');
      showOverlay();
   };

   function closeContactMenu() {
      openContactBtn.removeClass('active');
      contactMenu.removeClass('show');
      hideOverlay();
   };

   openContactBtn.click(function () {
      openContactMenu();
   });

   closeContactBtn.click(function () {
      closeContactMenu();
   });

   //Закрытие Contact-menu при клике вне
   jQuery(function ($) {
      $(document).mouseup(function (e) {
         if (contactMenu.hasClass('show')) {
            var div = contactMenu;
            if (!div.is(e.target)
               && div.has(e.target).length === 0) {
               closeContactMenu();
            }
         }
      });
   });

   //анимация кнопок
   $(function () {
      $('.popup-btn, button[type="submit"]')
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


   //mainSlider text
   let textSlider = new Swiper('.text-main-slider', {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },
   });

   //mainSlider
   let mainSlider = new Swiper('.main-slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,

      thumbs: {
         swiper: textSlider,
      },

      pagination: {
         el: '.swiper-pagination-main',
         dynamicBullets: true,
         dynamicMainBullets: 1,
         clickable: true,
         renderBullet: function (index, className) {
            if ((index + 1) < 10) {
               return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            } else {
               return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
         },
      },

      navigation: {
         prevEl: '.main-slider-prev',
         nextEl: '.main-slider-next',
      },
   });

   mainSlider.on('slideChangeTransitionEnd', function () {
      nextSlide();
   });

   nextSlide();
   function nextSlide() {
      if ($('.main-slider').length > 0) {
         let outImg = $('.section-main__nextSlideImg');
         $('.section-main__nextSlideImg img').remove();
         let img = $('.main-slider .swiper-slide-next img').clone();
         outImg.append(img);

         let nextText = $('.text-main-slider .swiper-slide-next h2').text();
         let outText = $('.next-info__text');
         outText.text(nextText);

         let amountSlide = mainSlider.slides.length - 2;
         let indexSlide = mainSlider.realIndex + 1;

         let outNumSlide = $('.section-main .next-info__num');

         if (indexSlide < amountSlide) {
            if (indexSlide < 9) {
               outNumSlide.text('0' + (indexSlide + 1));
            } else {
               outNumSlide.text(indexSlide + 1);
            }
         } else {
            outNumSlide.text('01');
         }
      }
   }

   //Тултип
   $('.tooltip-btn').tooltipster({
      animation: 'fade',
      delay: 200,
      trigger: 'click',
      interactive: true,
   });

   $('#certificates-tooltip .close').click(function () {
      $('.tooltip-btn').tooltipster('hide');
   });

   $('#certificates-tooltip a').click(function () {
      $('.tooltip-btn').tooltipster('hide');
   });

   //Моб. Слайдер Преимущества
   let sliderAdvantages;
   let mobSliderAdvantages = document.querySelector('.advantage');

   function mobileSliderAdvantages() {
      if ($('.advantage').length > 0) {
         if (window.innerWidth <= 992 && mobSliderAdvantages.dataset.mobile == 'false') {
            sliderAdvantages = new Swiper(mobSliderAdvantages, {
               spaceBetween: 30,
               loop: false,
               centeredSlides: true,

               navigation: {
                  prevEl: '.advantage-slider-prev',
                  nextEl: '.advantage-slider-next',
               },

               breakpoints: {
                  320: {
                     slidesPerView: 1,
                  },
                  576: {
                     slidesPerView: 2,
                  },
               }
            });

            mobSliderAdvantages.dataset.mobile = 'true';
         }

         if (window.innerWidth > 992) {
            mobSliderAdvantages.dataset.mobile = 'false';
            if (mobSliderAdvantages.classList.contains('swiper-container-initialized')) {
               sliderAdvantages.destroy();
            }
         }
      }
   }

   mobileSliderAdvantages()

   //Моб. Слайдер каталог
   let sliderСatalog;
   let mobSliderСatalog = document.querySelector('.catalog');

   function mobileSliderCatalog() {
      if ($('.catalog').length > 0) {
         if (window.innerWidth <= 992 && mobSliderСatalog.dataset.mobile == 'false') {
            sliderСatalog = new Swiper(mobSliderСatalog, {
               spaceBetween: 30,
               loop: false,
               centeredSlides: true,

               navigation: {
                  prevEl: '.catalog-slider-prev',
                  nextEl: '.catalog-slider-next',
               },

               breakpoints: {
                  320: {
                     slidesPerView: 1,
                  },
                  576: {
                     slidesPerView: 2,
                  },
               }
            });

            mobSliderСatalog.dataset.mobile = 'true';
         }

         if (window.innerWidth > 992) {
            mobSliderСatalog.dataset.mobile = 'false';
            if (mobSliderСatalog.classList.contains('swiper-container-initialized')) {
               sliderСatalog.destroy();
            }
         }
      }
   }

   mobileSliderCatalog();

   //Моб. Слайдер Подрядчики
   let sliderСontractors;
   let mobSliderСontractors = document.querySelector('.contractors');

   function mobileSliderСontractors() {
      if ($('.contractors').length > 0) {
         if (window.innerWidth <= 992 && mobSliderСontractors.dataset.mobile == 'false') {
            sliderСontractors = new Swiper(mobSliderСontractors, {
               slidesPerView: 'auto',
               spaceBetween: 30,
               loop: false,
               centeredSlides: true,

               navigation: {
                  prevEl: '.catalog-slider-prev',
                  nextEl: '.catalog-slider-next',
               },
            });

            mobSliderСontractors.dataset.mobile = 'true';
         }

         if (window.innerWidth > 992) {
            mobSliderСontractors.dataset.mobile = 'false';
            if (mobSliderСontractors.classList.contains('swiper-container-initialized')) {
               sliderСontractors.destroy();
            }
         }
      }
   }

   mobileSliderСontractors();

   window.addEventListener('resize', () => {
      mobileSliderAdvantages();
      mobileSliderCatalog();
      mobileSliderСontractors();
   });


   //discount-slider
   let discountSlider = new Swiper('.discount-slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },

      pagination: {
         el: '.swiper-pagination-discount',
         dynamicBullets: false,
         dynamicMainBullets: 1,
         clickable: true,
         renderBullet: function (index, className) {
            if ((index + 1) < 10) {
               return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            } else {
               return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
         },
      },

      navigation: {
         prevEl: '.discount-slider-prev',
         nextEl: '.discount-slider-next',
      },
   });

   //production-slider
   let productionSlider = new Swiper('.production-slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      lazy: true,
      fadeEffect: {
         crossFade: true
      },

      navigation: {
         prevEl: '.production-slider-prev',
         nextEl: '.production-slider-next',
      },
   });


   //portfolio-slider
   var portfolioSliderImg = new Swiper('.portfolio-slider-img', {
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      watchSlidesVisibility: true,
      effect: 'fade',
      lazy: true,
      fadeEffect: {
         crossFade: true
      },
   });

   //portfolio-slider
   var portfolioSliderText = new Swiper('.portfolio-slider-text', {

      slidesPerView: 'auto',
      // spaceBetween: 30,

      loop: true,
      centerSlides: true,
      // freeMode: true,
      watchSlidesVisibility: true,

      thumbs: {
         swiper: portfolioSliderImg,
      },

      navigation: {
         prevEl: '.portfolio-slider-prev',
         nextEl: '.portfolio-slider-next',
      },

      breakpoints: {
         320: {
            direction: 'horizontal',
            autoHeight: false,
         },
         993: {
            direction: 'vertical',
            autoHeight: true,
         },
      }
   });

   //Геотекстиль ГеоКом Слайдер
   var productIinfoThumbs = new Swiper('.product-info-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      grabCursor: true,
      lazy: true,

      breakpoints: {
         320: {
            slidesPerView: 2,
         },
         577: {
            slidesPerView: 3,
         },
         769: {
            slidesPerView: 4,
         },
      }
   });

   var productInfoSlider = new Swiper('.product-info-slider', {
      spaceBetween: 10,
      grabCursor: true,
      lazy: true,
      navigation: {
         nextEl: '.product-info-slider-next',
         prevEl: '.product-info-slider-prev',
      },
      thumbs: {
         swiper: productIinfoThumbs,
      },
   });

   $('.product-info__more').click(function () {
      $('.product-info__discr').toggleClass('show');
   });

   //Слайдер c карточками
   var cardSlider = new Swiper('.info-slider', {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      grabCursor: true,
      slideShadows: true,

      navigation: {
         nextEl: '.card-slider-next',
         prevEl: '.card-slider-prev',
      },

      breakpoints: {
         320: {
            slidesPerView: 'auto',
         },
         1400: {
            slidesPerView: 4,
         },
      }
   });

   //Слайдер c карточками
   var goodsSlider = new Swiper('.goods-slider', {
      spaceBetween: 30,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      grabCursor: true,
      slideShadows: true,

      navigation: {
         nextEl: '.goods-slider-next',
         prevEl: '.goods-slider-prev',
      },

      breakpoints: {
         320: {
            slidesPerView: 'auto',
         },
         1400: {
            slidesPerView: 4,
         },
      }
   });

   //Слайдер Наши объекты
   // var objectSlider = new Swiper('.object-slider', {
   //    spaceBetween: 30,
   //    slidesPerView: 1,

   // navigation: {
   //    nextEl: '.slider-next',
   //    prevEl: '.slider-prev',
   // },
   // });

   // $('.object-slider').each(function (index, slider) {
   //    var swiper = new Swiper(slider, {
   //       lazy: true,
   //       slidesPerView: 1,
   //       navigation: {
   //          // nextEl: $(this).parents('.object-slider-wrap').find('.slider-next'),
   //          nextEl: $(slider).parents('.object-slider-wrap').find('.slider-next'),
   //          prevEl: '.slider-prev',
   //       },
   //    });
   // });

   $('.object-slider').each(function (index, slider) {
      var swiper = new Swiper(slider, {
         lazy: true,
         slidesPerView: 1,
         navigation: {
            nextEl: $(slider).parents('.object-slider-wrap').find('.slider-next')[0],
            prevEl: $(slider).parents('.object-slider-wrap').find('.slider-prev')[0],
         },
      });
   });




   // Маска телефона
   $(function ($) {
      $("input[type='tel']").mask("+7 (999) 999-99-99");
   });

   $("input").attr("autocomplete", "off");

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
            error.insertAfter(element);
         },
         messages: {
            name: "Ваше имя?",
            tel: "Ваш телефон?",
            email: {
               required: "Ваш email?",
               email: "Пожалуйста, введите привильный адрес электронной почты"
            }
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

   //Прикрепит файл
   $('.file-upload input[type=file]').change(function () {

      var info = $(this).parents('.upload').find('.info');
      var add = $(this).val().replace("C:\\fakepath\\", '');
      var num = this.files.length;

      if (num == 1) {
         info.text('прикреплен: ' + add);
      } else if (num > 1) {
         info.text('прикрепленно: ' + num + ' файла');
      } else {

      }
   });

   //Модалки
   $('.popup-btn, .popup-link, .popup-a, .policy-link').magnificPopup({
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

   $('.popup .btn-close').click(function () {
      var magnificPopup = $.magnificPopup.instance;
      magnificPopup.close();
   });

   // sendForm();
   function sendForm() {
      $.magnificPopup.open({
         items: {
            src: '#send-popup'
            // src: '#error-popup'
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
                  // errorForm();
               }
            });
         } else { }
         return false;
      });
   });



   //Табы в оплате и доставке
   $('.delpey-nav__btn').click(function () {
      $('.delpey-nav__btn').removeClass('active');
      $(this).addClass('active');

      if ($(this).hasClass('delivery')) {
         $('.delpey__content.payment').fadeOut(0);
         $('.delpey__content.delivery').fadeIn(500);
      }
      else if ($(this).hasClass('payment')) {
         $('.delpey__content.delivery').fadeOut(0);
         $('.delpey__content.payment').fadeIn(500);
      }
   });




   //Скролл меню
   $(".scroll-link").click(function () {
      event.preventDefault();
      var minus = 150;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1500);
      closeMenu();
   });


});


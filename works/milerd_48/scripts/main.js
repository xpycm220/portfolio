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

   // $('.tooltip').tooltipster({
   //    animation: 'fade',
   //    delay: 200,
   //    trigger: 'click',
   //    side: ['top']
   // });

   //ФенсиБокс
   $('[data-fancybox]').fancybox({
      backFocus: false,
   });

   $(".validate").each(function () {
      $(this).validate({
         rules: {
            name: "required",
            tell: "required",
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
            tell: "Ваш телефон?",
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

   // $("form").each(function () {
   //    $(this).submit(function () {
   //       if ($(this).valid()) {

   //          var form_data = new FormData(this);
   //          $.ajax({
   //             url: "scripts/phpmailer/send_mail.php",
   //             type: 'POST',
   //             data: form_data,
   //             cache: false,
   //             contentType: false,
   //             processData: false,
   //             success: function () {
   //                $("form")[0].reset();
   //                sendForm(); //Вызываем всплываху
   //             },
   //             error: function () {
   //                errorForm();
   //             }
   //          });
   //       } else { }
   //       return false;
   //    });
   // });



   /*
   <!-- load images the lazy way -->
   <img class="lazy" data-src="path/to/image.jpg" />

   <!-- load background images of other element types -->
   <div class="lazy" data-src="path/to/image.jpg"></div>

   <!-- load iframe -->
   <div class="lazy" data-loader="youtubeLoader" data-video="pat2c33sbog"></div>
   */

   // $(function () {
   //    $('.laz#lazy-container .lazy').lazy({
   //       appendScroll: $('.contact__map')
   //    });
   // });

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

   //Анимация
   var wow = new WOW(
      {
         boxClass: 'wow',      // animated element css class (default is wow)
         animateClass: 'animated', // animation css class (default is animated)
         offset: 0,          // distance to the element when triggering the animation (default is 0)
         mobile: true,       // trigger animations on mobile devices (default is true)
         live: true,       // act on asynchronously loaded content (default is true)
         callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
         },
         scrollContainer: null,    // optional scroll container selector, otherwise use window,
         resetAnimation: false,     // reset animation on end (default is true)
      }
   );
   wow.init();
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
   };

   function hideOverlay() {
      $('html').css('overflow', 'auto');
      $('.overlay').remove();
      $("body").css('padding-right', '0');
   };

   //Менюха
   var openMenuBtn = $('.menu-btn');
   var closeMenuBtn = $('.main-menu__close');
   var mainMenu = $('.main-menu');


   function openMenu() {
      mainMenu.addClass('show');
      showOverlay();
   };

   function closeMenu() {
      openMenuBtn.removeClass('open');
      mainMenu.removeClass('show');
      hideOverlay();
   };

   openMenuBtn.click(function () {
      $(this).toggleClass('open');
      openMenu();
   });

   closeMenuBtn.click(function () {
      closeMenu();
   });

   //Закрытие меню при клике вне
   jQuery(function ($) {
      $(document).mouseup(function (e) {
         if (mainMenu.hasClass('show')) {
            var div = mainMenu;
            if (!div.is(e.target)
               && div.has(e.target).length === 0) {
               closeMenu();
            }
         }
      });
   });

   //call-menu
   var openCallMenuBtn = $('.secondary-menu .contact-btn');
   var closeCallMenuBtn = $('.call-menu__close');
   var callMenu = $('.call-menu');

   function openCallMenu() {
      callMenu.addClass('show');
      showOverlay();
   };

   function closeCallMenu() {
      callMenu.removeClass('show');
      hideOverlay();
   };

   openCallMenuBtn.click(function () {
      openCallMenu();
   });

   closeCallMenuBtn.click(function () {
      closeCallMenu();
   });

   jQuery(function ($) {
      $(document).mouseup(function (e) {
         if (callMenu.hasClass('show')) {
            var div = callMenu;
            if (!div.is(e.target)
               && div.has(e.target).length === 0) {
               closeCallMenu();
            }
         }
      });
   });




   //Скролл меню
   $(".scroll-link").click(function () {
      event.preventDefault();
      var minus = 150;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   //Слайдер mainSlider
   var mainSlider = new Swiper('.main-slider', {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      // grabCursor: true,
      effect: 'fade',
      // preloadImages: false,
      lazy: true,
      watchSlidesVisibility: true,
      fadeEffect: {
         crossFade: true
      },

      navigation: {
         nextEl: '.swiper-btn-next',
         prevEl: '.swiper-btn-prev',
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });

   const cardSliders = document.querySelectorAll('.card-slider');
   //Моб. Слайдер Карточки
   cardSliders.forEach((el) => {
      let cSwiper = new Swiper(el, {
         slidesPerView: "auto",
         spaceBetween: 10,
         loop: false,
         slideClass: 'card',
         autoplay: {
            delay: 5000,
         },

         lazy: {
            lazy: true,
            loadPrevNext: true,
            loadPrevNextAmount: 3,
            preloadImages: true,
         },
         breakpoints: {
            320: {
               loadPrevNextAmount: 1,
            },
            577: {
               loadPrevNextAmount: 2,
            },
         }
      });
   });


   //Слайдер Отзывы
   var reviewsSlider = new Swiper('.reviews-slider', {
      spaceBetween: 30,
      slidesPerView: 4,
      loop: true,
      centeredSlides: false,
      // centerSlides: true,
      // watchSlidesVisibility: true,
      // centerSlidesBounds: true,

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         320: {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 8,
         },
         577: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 30,
         },
         769: {
            slidesPerView: 2,
         },
         993: {
            slidesPerView: 3,
         },
         1640: {
            slidesPerView: 4,
         },
      }
   });

   //Слайдер Избавится от рисков
   var riskSlider = new Swiper('.not-risk', {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      // grabCursor: true,
      effect: 'fade',
      // preloadImages: false,
      lazy: true,
      watchSlidesVisibility: true,
      fadeEffect: {
         crossFade: true
      },

      navigation: {
         nextEl: '.swiper-btn-next',
         prevEl: '.swiper-btn-prev',
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });

   //Слайдер Сертификаты
   var certSlider = new Swiper('.certificates-slider', {
      spaceBetween: 30,
      slidesPerView: 4,
      loop: true,
      // preloadImages: false,
      lazy: true,
      watchSlidesVisibility: true,
      // slidesOffsetBefore: -20,
      // slidesOffsetAfter: -20,

      navigation: {
         nextEl: '.cert-slider.swiper-btn-next',
         prevEl: '.cert-slider.swiper-btn-prev',
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
         },
         577: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         769: {
            slidesPerView: 3,
         },
         993: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
      }
   });

   //Табы Как мы работаем?
   $('.tab-main .tabs-nav__item').click(function () {
      $('.tab-main .tabs-nav__item').removeClass('active');
      $(this).addClass('active');
      let el = $(this).index();

      $('.tab-main .tabs-content__item').fadeOut(0)
      $('.tab-main .tabs-content__item').eq(el).fadeIn(300);

      console.log('11');
   });

   //Табы Доставака
   $('.city-popup .city-nav__item').click(function () {
      $('.city-popup .city-nav__item').removeClass('active');
      $(this).addClass('active');
      let el = $(this).index();

      $('.city-popup__body .city-list').fadeOut(0)
      $('.city-popup__body .city-list').eq(el).fadeIn(300);
   });

   //Слайдер Клиенты
   var logoSlider = new Swiper('.logo-slider', {
      // spaceBetween: 30,
      slidesPerView: 6,
      slidesPerColumn: 3,
      loop: false,
      simulateTouch: false,
      // updateOnWindowResize: false,

      navigation: {
         nextEl: '.swiper-btn-next',
         prevEl: '.swiper-btn-prev',
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         320: {
            simulateTouch: true,
            slidesPerView: 1.5,
         },
         576: {
            slidesPerView: 2,
         },
         769: {
            slidesPerView: 3,
         },
         993: {
            slidesPerView: 4,
         },
         1200: {
            slidesPerView: 5,
         },
         1640: {
            slidesPerView: 6,
            simulateTouch: false,
         },
      }

      // noSwiping: false,

      // watchSlidesVisibility: true,
   });


   //Прикрепит файл
   $('.file-upload input[type=file]').change(function () {

      var info = $(this).parents('.upload').find('.info');
      var add = $(this).val().replace("C:\\fakepath\\", '');
      var num = this.files.length;

      var fileSize = this.files[0];
      var sizeInMb = fileSize.size / 1024;
      var sizeLimit = 1024 * 10;

      var files = $(this);

      if (sizeInMb > sizeLimit) {
         files[0].value = "";
         info.text('Лимит 10мб. файл не прикреплён!');
      } else {
         info.text('прикреплен: ' + add);
      }
   });

   slideFooterNav();

   function slideFooterNav() {
      if (window.innerWidth <= 576) {
         $('.footer-nav').addClass('slide');
      } else {
         $('.footer-nav').removeClass('slide');
         $('.footer-nav__list').slideDown(0);
         $('.footer-nav__title').removeClass('active');
      }
   }

   $('.footer-nav.slide .footer-nav__title').click(function () {
      $(this).toggleClass('active');
      $(this).parents('.footer-nav').find('.footer-nav__list').slideToggle();
   })

   window.addEventListener('resize', () => {
      slideFooterNav();
   });

   //Попапы
   //ФенсиБокс
   $('[data-fancybox]').fancybox({
      backFocus: false,
   });

   //Модалки
   $('.popup-btn').magnificPopup({
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

   $('.popup .btn-close, .send-popup__close').click(function () {
      var magnificPopup = $.magnificPopup.instance;
      magnificPopup.close();
   });


   // sendForm();
   //Отправка почты
   function sendForm() {
      $.magnificPopup.open({
         items: {
            // src: '#form-send'
            src: '#sendOrder-popup'
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

   // Маска телефона
   // $(function ($) {
   //    $("input[type='tel']").mask("+7 (999) 999-99-99");
   // });

   $("input").attr("autocomplete", "off");

   //Чексбокс, персон данные
   // $('.person-data input').change(function () {
   //    var button = $(this).parents('form').find('button');

   //    if ($(this).prop('checked')) {
   //       button.attr('disabled', false);
   //    } else {
   //       button.attr('disabled', true);
   //    }
   // });

   //Чексбокс, персон данные
   $('.person-data input').change(function () {
      var button = $(this).closest('form').find('input[type="submit"]');

      if ($(this).prop('checked')) {
         button.attr('disabled', false);
      } else {
         button.attr('disabled', true);
      }
   });


   //Рейтинг
   const ratingItemsList = document.querySelectorAll(".rating__item");
   const ratingItemsArray = Array.from(ratingItemsList);

   ratingItemsArray.forEach((item) => {
      item.addEventListener("click", () => {
         const { itemValue } = item.dataset;
         item.parentNode.dataset.totalValue = itemValue;

         $('#inputRating').val(itemValue + '/5');
      });
   });



   var dCardThumbs = new Swiper('.dCard-thumbs', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loop: false,
   });

   var dCardSlider = new Swiper('.dCard-slider', {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: false,
      lazy: true,
      watchSlidesVisibility: true,
      // autoHeight: true,

      thumbs: {
         swiper: dCardThumbs
      },

      navigation: {
         nextEl: '.dCard-slider .swiper-btn-next',
         prevEl: '.dCard-slider .swiper-btn-prev',
      },

      breakpoints: {
         320: {
            slidesPerView: "auto",
            spaceBetween: 8,
         },
         576: {

         },
         769: {
            slidesPerView: 1,
            spaceBetween: 30,
         },
      }
   });

   var teamSlider = new Swiper('.team-slider', {
      slideClass: 'team-slider__slide',
      spaceBetween: 10,
      slidesPerView: 6,
      loop: true,
      lazy: true,
      watchSlidesVisibility: true,

      navigation: {
         nextEl: '.team-btn.swiper-btn-next',
         prevEl: '.team-btn.swiper-btn-prev',
      },

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         320: {
            slidesPerView: 'auto',
            spaceBetween: 27,
         },
         577: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         769: {
            slidesPerView: 3,
         },
         993: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
         1400: {
            slidesPerView: 5,
         },
         1640: {
            slidesPerView: 6,
         },
      }
   });

   //showmore
   $('.detailed-card__text').showMore({
      minheight: 210,
      buttontxtmore: 'Подробнее',
      buttontxtless: 'Скрыть',
      animationspeed: 250
   });


   $('.history-company__body').showMore({
      minheight: 420,
      buttontxtmore: 'Подробнее',
      buttontxtless: 'Скрыть',
      animationspeed: 250
   });

   //Слайдер Достижения
   const slider = document.querySelector('.achievement-list-wrap');
   let mySwiper;

   function mobileSlider() {
      if ($('.achievement-list-wrap').length > 0) {
         if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
            mySwiper = new Swiper(slider, {
               slidesPerView: 'auto',
               spaceBetween: 10,
               loop: true,
               slideClass: 'achievement-list__item',
               wrapperClass: 'achievement-list',

               // pagination: {
               // 	el: '.swiper-pagination',
               // 	clickable: true,
               // },
            });

            slider.dataset.mobile = 'true';
         }

         if (window.innerWidth > 768) {
            slider.dataset.mobile = 'false';
            if (slider.classList.contains('swiper-container-initialized')) {
               mySwiper.destroy();
            }
         }
      }
   }

   mobileSlider()

   window.addEventListener('resize', () => {
      mobileSlider();
   });

   //FAQ accordion
   $('.faq-accordion__head').click(function () {
      if ($(this).hasClass('active')) {
         $(this).removeClass('active');
         $(this).parents('.faq-accordion__item').find('.faq-accordion__content').slideUp(500);

      } else {
         $('.faq-accordion__content').slideUp(500);
         $('.faq-accordion__head').removeClass('active');
         $(this).addClass('active');
         $(this).parents('.faq-accordion__item').find('.faq-accordion__content').slideDown(500);
      }
   });

   cartSrc();
   function cartSrc() {
      let el = $('.card__img-current');

      if (window.innerWidth <= 576) {
         el.removeClass('lazy').addClass('swiper-lazy');
      } else {
         el.removeClass('swiper-lazy').addClass('lazy');
      }
   }
   window.addEventListener('resize', () => {
      cartSrc();
   });

   //Анимация в about
   $('.achievement').on('mousemove', (e) => {
      var x = e.pageX / $(window).width();
      var y = e.pageY / $(window).height();

      $('.achievement__img').css(
         'transform',
         'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
      );
   });

   //Подгрука карты
   $(function () {
      let countMap = 0;
      var map = $('.contact');
      var mapTop = map.offset().top;
      $(window).on('scroll', function () {
         if (countMap == 0) {
            var windowTop = $(this).scrollTop();
            if (windowTop > mapTop) {
               $('#map .script').html('<script>window.onload = function () {initMap();};</script><script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB998msEJSpJZzVtG03uEhxjAq8Q_32rhg&callback=initMap"></script></div> ');

               // $(window).unbind('scroll')
               countMap = 1;
            }
         }
      });
   });

   //КОРЗИНА
   let cart = {};

   $('.container').on('click', '.cart-plus, .cart-minus', function () {
      const $item = $(this).closest('.cart-item');

      updateCart({
         name: $item.find('.cart-name').text(),
         price: +$item.find('.cart-price').text().replace(/\D/g, ''),
         oldPrice: $item.find('.cart-old-price').text(),
         quantity: $(this).hasClass('cart-minus') ? -1 : 1,
         img: $item.find('.cart-img').attr('src'),
      });

      let name = $item.find('.cart-name').text();
      $item.find('.cart-amount').text(cart[name].quantity);
   });

   function updateCart(item) {
      if (!cart[item.name]) {
         cart[item.name] = { ...item, quantity: 0 };
      }

      cart[item.name].quantity += item.quantity;

      if (cart[item.name].quantity <= 0) {
         cart[item.name].quantity = 0;
      }

      renderCart();
      outAmount();
      outToInput();
      outSumm();
      setLocalStorage();
   }

   function renderCart() {
      $('.shopping-table__body').html(Object.values(cart).map(n => `
      <div class="shopping-table__item">
         <div class="del">
            <div class="del-btn cart-del"></div>
         </div>
         <div class="name">
            <img src="${n.img}" alt="img" class="shopping-table__img">
            <div class="cart-name">${n.name}</div>
         </div>
         <div class="amount">
            <div class="amount__btns">
               <div class="amount__minus"></div>
               <div class="amount__amount">${n.quantity}</div>
               <div class="amount__plus"></div>
            </div>
         </div>
         <div class="price">
            <div class="price-current">${n.price}₽</div>
            <div class="price-old">${n.oldPrice}</div>
         </div>
      </div>
      `).join(''));
   }

   //Удалить
   $('body').on('click', '.cart-del', function () {
      const delItem = $(this).closest('.shopping-table__item').find('.cart-name').text();
      delete cart[delItem];
      renderCart();

      outAmount();
      outSumm();
      outToInput();

      setLocalStorage();
   });

   //Вывод кол. товара в Кружок
   function outAmount() {
      let out = Object.values(cart).reduce((acc, n) => acc + n.quantity, 0);

      $('.f-cart__amount').text(out);
      $('.subtotal__amount').text(out);
   }

   //Тип доставки (типа радиобатоны)
   $('.delivery-block__item').click(function () {
      $('.delivery-block__item').removeClass('active');
      $(this).addClass('active');
      let data = $(this).data('delivery');
      $('#selectDelivery').val(data);
      // console.log(data);
   })

   // //Вывод в input
   outToInput();
   function outToInput() {
      let outCart = Object.values(cart);
      let out = '';
      let outPrice = 0; //обший прайс
      //let outDelivery = $('input[name="delivery"]:checked').val(); //вариант доставки
      let outDelivery = $('.delivery-block__item.active').data('delivery');

      let outAmount = 0; //обшее количество товаров
      let outName = ''; //Имя товара , количество товара, цена за единицу товара, обшая цена данного товара

      for (let i = 0; i < outCart.length; i++) {
         outPrice += parseInt(outCart[i].price * outCart[i].quantity);
         outAmount += parseInt(outCart[i].quantity);
         outName += 'Название: ' + outCart[i].name + ' Цена: ' + outCart[i].price + " Количество: " + outCart[i].quantity + " Сумма: " + (outCart[i].price * outCart[i].quantity) + '/';
      }

      $('#allPrise').val(outPrice);
      $('#selectDelivery').val(outDelivery);
      $('#quantityAllProducts').val(outAmount);
      $('#namequantityProducts').val(outName);

   }

   //Вывод в cуммы
   function outSumm() {
      let a = Object.values(cart);
      let out = 0;

      for (let i = 0; i < a.length; i++) {
         out += a[i].price * a[i].quantity;
      }

      $('.subtotal__summ').text(out + ' ' + " ₽");
   }

   //clearLocalStorage();
   function clearLocalStorage() {
      localStorage.setItem('data', JSON.stringify({}));
   }

   //Загрузка в локал сторейдж
   function setLocalStorage() {
      localStorage.setItem('data', JSON.stringify(cart));
   }

   //Выгрузка из локал сторейдж
   getLocalStorage();
   function getLocalStorage() {
      let c = localStorage.getItem('data');

      if (c != null) {
         cart = JSON.parse(c);

         renderCart();
         outAmount();
         outSumm();
         outToInput();
      }
   }

   $('body').on('click', '.amount__minus, .amount__plus', function () {
      const $item = $(this).closest('.shopping-table__item');

      updateCart({
         name: $item.find('.cart-name').text(),
         price: +$item.find('.price-current').text().match(/\d+/),
         quantity: $(this).hasClass('amount__minus') ? -1 : 1,
      });
   });

   //Быстрый заказ
   $('.fast-order-btn').click(function () {
      let item = $(this).closest('.cart-item');
      let popup = $('#fast-order-popup');

      let imgSrc = item.find('.cart-img').attr('src');
      let img = item.find('.cart-img');
      let name = item.find('.cart-name').text();
      let price = item.find('.cart-price').text();

      popup.find('.main-popup__bg').css("background-image", 'url(' + imgSrc + ')');
      popup.find('.main-popup__product-img').clone(img);
      popup.find('.main-popup__product span').text(name);
   });

   //dop19.02.21
   $('.detailed-field .btn-plus, .detailed-field .btn-minus').click(function () {
      detailedAmount = parseInt($('.detailed-field .detailed-field__amount').text());
      console.log(detailedAmount);

      if ($(this).hasClass('btn-plus')) {
         detailedAmount++;
      } else {
         detailedAmount--;

         if (detailedAmount < 1) {
            detailedAmount = 1;
         }
      }
      $('.detailed-field .detailed-field__amount').text(detailedAmount);
   });

   $('.container').on('click', '.add-cart', function () {
      const $item = $(this).closest('.detailed-card__info');

      updateCart({
         name: $item.find('.cart-name').text(),
         price: +$item.find('.cart-price').text().replace(/\D/g, ''),
         oldPrice: $item.find('.cart-old-price').text(),
         quantity: parseInt($item.find('.detailed-field__amount').text()),
         img: $item.find('.cart-img').attr('src'),
      });

      let name = $item.find('.cart-name').text();
      $item.find('.cart-amount').text(cart[name].quantity);

      $('.detailed-field .detailed-field__amount').text('1');
   });
});

$('.preloader').fadeOut();
$(window).on('load', function () {
   $('.preloader').fadeOut();
});

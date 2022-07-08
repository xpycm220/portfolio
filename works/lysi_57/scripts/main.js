
$(document).ready(function () {
   $('.navigation').scrollSpy({
      scrollDuration: 800,
      scrollEasing: 'easeInBack',
      offsetElement: '.header',
      ignoreAnchors: ['.not'],
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

   const slider_advantage = document.querySelector('.slider-advantage');
   let mySwiper;

   function mobileSlider() {
      if (window.innerWidth <= 991 && slider_advantage.dataset.mobile == 'false') {
         mySwiper = new Swiper(slider_advantage, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            loop: false,
         });

         slider_advantage.dataset.mobile = 'true';
      }

      if (window.innerWidth > 991) {
         slider_advantage.dataset.mobile = 'false';
         if (slider_advantage.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
         }
      }
   }

   mobileSlider()

   window.addEventListener('resize', () => {
      mobileSlider();
   });

   $('.btn-readmore').click(function () {
      $('.about__text').toggleClass('show');

      $(this).parents('.about').toggleClass('in');
      $(this).toggleClass('in');

      if (($(this).hasClass('in'))) {
         $(this).text('Скрыть →')
      } else {
         $(this).text('Подробнее →')
      }

   });

   const slider_quality = document.querySelector('.quality-slider');

   let mySwiper2 = new Swiper(slider_quality, {
      slidesPerView: 'auto',
      spaceBetween: 45,
      loop: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         1200: {
            spaceBetween: 120,
         },
      }
   });

   $('.popup').fancybox({
      scrolling: "auto",
   });

   var scene = document.getElementById('paralax');
   var parallaxInstance = new Parallax(scene);

   $(".scroll-link").click(function () {
      event.preventDefault();
      var minus = 50;
      var id = $(this).attr('href'),
         top = $(id).offset().top - minus;
      $('body,html').animate({ scrollTop: top }, 1000);
   });

   tippy('[data-tippy-content]', {
      trigger: 'click',
      maxWidth: 266,
   });

   const instance = tippy(document.querySelectorAll('.tooltip'));
   var i_length = instance.length;

   $('.tooltip').click(function () {
      clearInterval(showTooltipInterval);
   });

   jQuery(function ($) {
      $(document).mouseup(function (e) {
         var div = $('.tooltip')
         clearInterval(showTooltipInterval);
      });
   });

   var i = 0;

   function showTooltip() {
      if (i == 0) {
         instance[i_length - 1].hide();
         instance[i].show();
      } else {
         instance[i - 1].hide();
         instance[i].show();
      }

      i = (i + 1) % i_length;
   }

   if ($(window).width() > 993) {
      var showTooltipInterval = setInterval(showTooltip, 3000);
   }
});

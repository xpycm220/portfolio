$(document).ready(function () {
   $('.placeholder').on('input', function (){
      if ($(this).val()) {
         $(this).parents('.formgroup').find('.formgroup__placeholder').hide();
      } else {
         $(this).parents('.formgroup').find('.formgroup__placeholder').show();
      }
   });

   $('.formgroup__placeholder').click(function (){
      $(this).parents('.formgroup').find('.placeholder').focus();
   });

   $('.show-advantage').click(function (){
      $('.advantage-hide').slideToggle(300);
     
      $(this).toggleClass('in');

      var text =  $(this).find('.show-advantage__text');

      if ($(this).hasClass('in')) {
         text.text('Ну ладно!)');
      } else {
         text.text('А что еще');
      }
   });

   $(window).resize(function(){
      ww = $(window).width();

      if (ww > 575) {
         $('.advantage-hide').fadeIn(0);
         $('.show-advantage').removeClass('in');
      }
   });

   //Слайдер
   var teamThumbsSlider = new Swiper(".team-thumbs-slider", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      loop: false,
    });

    var teamSlider = new Swiper(".team-slider", {
      spaceBetween: 10,
      loop: false,
      lazy: true,

      navigation: {
         nextEl: ".thumbs-button-next",
         prevEl: ".thumbs-button-prev",
       },
      
      thumbs: {
        swiper: teamThumbsSlider,
      },
    });

    if ($("input[type='tel']").length) {
      $(function ($) {
         $("input[type='tel']").mask("+7 (999) 999-99-99");
      });
   }

   //Паралакс
   var scene = document.getElementById('parallax-desctop');
   var parallaxInstance = new Parallax(scene);
   
   if ($(window).width() <= 991) {
      parallaxInstance.disable();
   }
   
   $(window).resize(function(){
      if ($(window).width() > 991) {
         parallaxInstance.enable();
         
      } else {
         parallaxInstance.disable();
      }
   });

   /* ************ */
   var parallax_mobile = $('.mobile-img');
   $(window).scroll(function () {
      if ($(window).width() <= 991) {
         var scroll = $(window).scrollTop();
         var proc = '-' + scroll / 3 + '%';   
         parallax_mobile.css("transform","translate(0, " + proc + ")");
      }
   });
});


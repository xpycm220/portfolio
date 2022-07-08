$(document).ready(function (){

	//ЛЕВОЕ МЕНЮ
	$('.menu_btn').click(function (){
		openLeftMenu();

		if ($('.nav.right_nav').hasClass('show')) {
			$('.nav.right_nav').removeClass('show');
		}
	});

	$('.nav .close_btn').click(function (){
		closeMenu();
	});

	//ПРАВОЕ МЕНЮ
	$('header .callback_btn, header .callback_btn_mob').click(function(){
		openRightMenu();

		if ($('.nav.left_nav').hasClass('show')) {
			$('.nav.left_nav').removeClass('show');
		}
	});

	$('.nav .close_btn').click(function (){
		closeMenu();
	});

	function openLeftMenu() {
		$('.menu_btn').addClass('open');
		$('.nav.left_nav').addClass('show');
		$('html').css('overflow', 'hidden');
		$("body").append("<div class='overlay'></div>");
	};

	function openRightMenu() {
		$('.nav.right_nav').addClass('show');
		$('html').css('overflow', 'hidden');
		$("body").append("<div class='overlay'></div>");
	};

	function closeMenu() {
		$('.menu_btn').removeClass('open');
		$('.nav.left_nav').removeClass('show');
		$('.nav.right_nav').removeClass('show');
		$('html').css('overflow', 'auto');
		$('.overlay').remove();
	};

	jQuery(function($){
		$(document).mouseup(function (e){ 
			if ($(".nav").hasClass('show')) {
				var div = $(".nav");
				if (!div.is(e.target)
				    && div.has(e.target).length === 0) {
					closeMenu();
				}
			}
			
		});
	});

	 // Липкое меню
	(function($) {
	    "use strict";
	    var $navbar = $(".header_content"),
	        y_pos = $navbar.offset().top,
	        height = $navbar.height();

	    $(document).scroll(function() {
	        var scrollTop = $(this).scrollTop();

	        if (scrollTop > y_pos + height) {
	            $navbar.addClass("navbar-fixed").animate({
	                top: 0
	            });
	        } else if (scrollTop <= y_pos) {
	            $navbar.removeClass("navbar-fixed").clearQueue().animate({
	                top: "-48px"
	            }, 0);
	        }
	    });
	})(jQuery, undefined);

	//Скролл меню
	$(".nav_list a").click(function () {
        event.preventDefault();
        closeMenu();

        var minus = 90;
        var id  = $(this).attr('href'),
            top = $(id).offset().top - minus;
        $('body,html').animate({scrollTop: top}, 1500);
    });

   	//Скролл по лого
	$(".scroll_link").click(function () {
        event.preventDefault();

        if ($(window).scrollTop() >= 100) {
        	closeMenu();
	        var minus = 90;
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top - minus;
	        $('body,html').animate({scrollTop: top}, 1500);
        }
    });

 //    function getScrollBarWidth () {
	//     var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
	//         widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
	//     $outer.remove();
	//     return 100 - widthWithScroll;
	// };

	// Кнопка звонок
	var $btnCallMob = $(".callFixed_btn.mobile");
	
	$(window).scroll(function(){
		if (($(window).scrollTop() >= 100) && $(window).width() <= 767) {
			$btnCallMob.fadeIn();
		} else {
			$btnCallMob.fadeOut();
		}
	});

	var $btnCallDesc = $(".callFixed_btn.desctop");
	
	$(window).scroll(function(){
		if (($(window).scrollTop() >= 100) && $(window).width() > 767) {
			$btnCallDesc.fadeIn();
		} else {
			$btnCallDesc.fadeOut();
		}
	});


	$('.slider1').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		fade: true,
  		cssEase: 'linear',
  		lazyLoad: 'ondemand',
		prevArrow: "<div class='sliderCircle_btn text prev'></div>",
		nextArrow: "<div class='sliderCircle_btn text next'></div>",
	});

	$('.slider2').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: "<div class='sliderCircle_btn prev'></div>",
		nextArrow: "<div class='sliderCircle_btn next'></div>",
		responsive: [
	 	{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	$('.slider3').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		swipe: false,
		prevArrow: "<div class='sliderCircle_btn prev'></div>",
		nextArrow: "<div class='sliderCircle_btn next'></div>",
	});

	$(".twentytwenty-container").twentytwenty({
		default_offset_pct: 0.5, // How much of the before image is visible when the page loads
		orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
		move_slider_on_hover: true, // Move slider on mouse hover? <---
		move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
		click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
	});

	$('.slider4').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: "<div class='sliderCircle_btn prev'></div>",
		nextArrow: "<div class='sliderCircle_btn next'></div>",
		responsive: [
	 	{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	$('.slider5').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: "<div class='sliderCircle_btn prev'></div>",
		nextArrow: "<div class='sliderCircle_btn next'></div>",
		responsive: [
	 	{
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
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

	// Маска телефона
    $(function($) {
        $("input[type='tel']").mask("+7 ( 999 ) 999 - 99 - 99");
    });

	//Анимация
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       false,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null,    // optional scroll container selector, otherwise use window,
	    resetAnimation: true,     // reset animation on end (default is true)
	  }
	);
	wow.init();

	$('#section1').on('mousemove', (e) => {
	 	var x = e.pageX / $(window).width();
	 	var y = e.pageY / $(window).height();
	 	var width = $(window).width();

	 	if (width > 992) {
	 		$('#section1 .bg').css(
		 		'transform',
				'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
		 	);

		 	$('#section1 .section_img').css(
		 		'transform',
				'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
		 	);

		 	$('#section1 .discount').css(
		 		'transform',
				'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
		 	);
	 	}
	});

	$('#section4').on('mousemove', (e) => {
	 	var x = e.pageX / $(window).width();
	 	var y = e.pageY / $(window).height();
	 	var width = $(window).width();

	 	if (width > 992) {
	 		$('#section4 .section_img').css(
		 		'transform',
				'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
		 	);

		 	$('#section4 .discount').css(
		 		'transform',
				'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
		 	);
	 	}
	});
});
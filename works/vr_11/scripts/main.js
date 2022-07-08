$(document).ready(function (){
	//Открытие меню
    $('.mobile_menu-btn').click(function () {
		event.preventDefault();
		$('#mobile_menu').addClass('open');
		$('html').css('overflow', 'hidden');
		$("body").append("<div class='overlay'></div>");
	});

    //Закрытие меню
	$('#mobile_menu .close_btn').click(function (){
		closeMenu();
	});

	function closeMenu() {
		$('#mobile_menu').removeClass('open');
		$('html').css('overflow', 'auto');
		$('.overlay').remove();
	};

	jQuery(function($){
		$(document).mouseup(function (e){ 
			if ($("#mobile_menu").hasClass('open')) {
				var div = $("#mobile_menu");
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
	    var $navbar = $(".header_sticky"),
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

	// Кнопка наверх
	$(".logo").click(function(){
		$("html, body").animate({scrollTop:0}, 900);
		event.preventDefault();
	});

	$('#section4').parallax({imageSrc: 'img/bg_section4.jpg'})

	//Слайдер
	var slider = $('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand',
		prevArrow: "<div class='slider-btn prev'></div>",
		nextArrow: "<div class='slider-btn next'></div>",
		responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        adaptiveHeight: true,
		      }
		    }
		  ]
	});

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
		mainClass: 'my-mfp-zoom-in',
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Маска телефона
    $(function($) {
        $("input[type='tel']").mask("+7 (999) 999-99-99");
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

	$(document).find('.slick-cloned a').removeAttr('data-fancybox');

	$('#section1').on('mousemove', (e) => {
	 	var x = e.pageX / $(window).width();
	 	var y = e.pageY / $(window).height();

	 	$('.bg').css(
	 		'transform',
			'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
	 	);

	 	$('.key').css(
	 		'transform',
			'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
	 	);
	});
});
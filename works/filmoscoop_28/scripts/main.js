$(document).ready(function (){
	// Маска телефона
    $(function($) {
        $("input[type='tel']").mask("+7 (999) 999-99-99");
    });

	//menu
	$('#nav-btn').click(function (){
		$('#mob_navbar_nav').addClass('in');
		$(this).toggleClass('open');
		$('.overlay').fadeIn();
		$('html').css('overflow', 'hidden');
	});

	$('#mob_navbar_nav .close_btn').click(function (){
		$('#nav-btn').removeClass('open');
		$('#mob_navbar_nav').removeClass('in');
		$('.overlay').fadeOut();
		$('html').css('overflow', 'auto');
		$('html').css('margin-right', '0');
	});

	$('#mob_navbar_nav .scroll-link').click(function (){
		$('#mob_navbar_nav .close_btn').trigger('click');
	})

	//Скролл меню
    $(".scroll-link").click(function () {
        event.preventDefault();
        var minus = 60;
        var id  = $(this).attr('href'),
            top = $(id).offset().top - minus;
        $('body,html').animate({scrollTop: top}, 1500);
        $("#main_navbar .close_btn").trigger('click');
    });

    //Липкое меню
	(function($) {
	    "use strict";

	    var $navbar = $("#header_main"),
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

	//slider_main
	var $main_slider = $('.main_slider');
    	$main_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

	    var $numPrevSlide = $('#section_main_slider .btn_prev .btn_num');
	    var $numNextSlide = $('#section_main_slider .btn_next .btn_num');

        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section2 .slide_count .current').text(i + '/');
        $('#section2 .slide_count .all_slide').text(slick.slideCount);
                

        // if (i == slick.slideCount) {
        // 	$numNextSlide.text(1) 
        // } else {
        // 	$numNextSlide.text(i + 1);
        // }

        // if (i == 1) {
        // 	$numPrevSlide.text(slick.slideCount) 
        // } else {
        // 	$numPrevSlide.text(i - 1);
        // }


        var text = $('#section2 .slick-current .slide .info').text();
        $('.main_slider_wr .imac_content .info').text(text);

        var videoHref = $('#section2 .slick-current .slide .play_btn').attr('href');
        $('.main_slider_wr .currentPlayBtn').attr('href', videoHref);

     	var currentImgUrl = $('#section2 .slick-current .slide img').attr('src');
     	var currentImgbg  = 'url(' + currentImgUrl + ')';
     	
     	$('.main_slider_wr .imac_content').css('background-image', currentImgbg);
    });


	$('.main_slider').slick({
		centerMode: true,
		centerPadding: '25%',
		slidesToShow: 1,
		prevArrow: $('.main_slider_wr .prev_btn'),
		nextArrow: $('.main_slider_wr .next_btn'),
	}); 

	 $('.team_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.team_slider_wr .prev_btn'),
		nextArrow: $('.team_slider_wr .next_btn'),
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	}); 


	var seeAllportf_slider = $('.seeAllportf_slider').slick({
		rows: 3,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: $('#seeAllPortf .prev_btn'),
		nextArrow: $('#seeAllPortf .next_btn'),
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	      	slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	      	rows: 2,
	      	slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    }
	  ]
	});

	$('#section6 .cases_wrap .item.item4').click(function() {
		seeAllportf_slider.slick('refresh');
	});

	$('._form .formgroup input').focusout(function() {
		var inputContent = $(this).val();

		if (inputContent !== '') {
			$(this).addClass('has-content');
		} else {
			$(this).removeClass('has-content');
		}
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


	//эффект набора текста

	new TypeIt('#type_it', {
		speed: 150,
		waitUntilVisible: true,
		loop: true
	})
	.type('промо роликов')
	.pause(2000)
	.delete(13)
	.type('клипов')
	.pause(2000)
	.delete(6)
	.type('рекламы')
	.pause(2000)
	.delete(7)
	.type('для мероприятий')
	.pause(2000)
	.delete(15)
	.type('для компаний')
	.pause(2000)
	.delete(12)
	.type('презентаций')
	.pause(2000)
	.delete(11)
        .type('анимаций')
	.pause(2000)
	.delete(8)
        .type('инфографики')
	.pause(2000)
	.delete(11)
        .type('ТВ программ')
	.pause(2000)
	.delete(11)
        .type('фильмов')
	.pause(2000)
	.delete(7)

	.go();

	var btn_top = $('#btn_top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
		  btn_top.addClass('show');
		} else {
		  btn_top.removeClass('show');
		}
		});

		btn_top.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

	$('.article_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: "<div class='article_prev_btn'></div>",
		nextArrow: "<div class='article_next_btn'></div>",
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	(function($) {
		$(function() {
			$('select').styler({
				selectSearch: false,
			});
		});
	})(jQuery);
	

	//Скролл _label
    $(".scroll_to").click(function () {
        event.preventDefault();
        var minus = 60;
        var id  = $(this).attr('href'),
            top = $(id).offset().top - minus;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



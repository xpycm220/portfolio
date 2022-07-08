$(document).ready(function() {
	//Отзывы, попап

	$('.review_slider .read_more').click(function (){
		//Фото
		$('#review_popup .head img').remove();
		var newImg = $('.review_slider .slick-current .hidden-content img').clone();
		$('#review_popup .head').append(newImg);
		//Дата
		var newDate = $('.review_slider .slick-current .date').text();
		$('#review_popup .head .date').text(newDate);
		//Имя 
		var newName = $('.review_sliderNav .slick-current .name').text();
		$('#review_popup .head .name').text(newName);
		//Курс 
		var newСourse = $('.review_sliderNav .slick-current .text .info').text();
		$('#review_popup .body h4').text(newСourse);
		//Отзыв
		$('#review_popup .review_text').remove();
		var newReview = $('.review_slider .slick-current .hidden-content .review_text').clone();
		$('#review_popup .content').append(newReview);

		

	});

	// console.log(newDate);



	//Анимация цифр
	if ($(window).width() >= '1200'){
        function countup(className){
			var countBlockTop = $("."+className).offset().top;
			var windowHeight = window.innerHeight;
			var show = true;
						
			$(window).scroll( function (){
				if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
					show = false;
							
					$('.'+className).spincrement({
						from: 1,
						duration: 4000,
						thousandSeparator: '',
					});
				}
			})	
		}

	    $(function() {
			countup("advantages__num span", $(".advantages__num span").text());
	    });
    }
	

	//Всё что связано с Географией мероприятий (попапы, тултипы т.п. )
	$('.map-item__marker').click(function (){
		$(".map-item").removeClass('open');
		$(this).parents('.map-item').addClass('open');
	});

	jQuery(function($){
		$(document).mouseup(function (e){ 
			if ($(".map-item").hasClass('open')) {
				var div = $(".map-item");
				if (!div.is(e.target)
				    && div.has(e.target).length === 0) {
					$(".map-item").removeClass('open');
				}
			}
		});
	});

	$('.event-map .map-item').each(function (){
		var createLink = $(this).find('.tooltip__title span').text();
		var createAttr = $(this).attr('data-city');
		$('#map_popup .city_list').append
			('<a href="#event_geography" class="modal_popup link" data-city=' + createAttr + '>' + createLink + '</a>');
	});

	$('#map_popup .city_list a').click(function (){
		$('#event_geography .tooltip').remove();
		var thisAttr = $(this).attr('data-city');
		var findAttr = $('.event-map .map-item[data-city=' + thisAttr + ']').find('.tooltip');
		findAttr.clone().appendTo('#event_geography');
		reinitMagnificPopup();
	});

	//Инфоблок
	$('.side_btn').click(function (){
		openInfoBlock();
	});

	$('.side-infoblock .close').click(function (){
		closeInfoBlock();
	});

	function openInfoBlock() {
		$('.side-infoblock').addClass('show');
		$('html').css('overflow', 'hidden');
		$("body").append("<div class='overlay'></div>");
	};

	function closeInfoBlock() {
		$('.side-infoblock').removeClass('show');
		$('html').css('overflow', 'auto');
		$('.overlay').remove();
	};

	jQuery(function($){
		$(document).mouseup(function (e){ 
			if ($(".side-infoblock").hasClass('show')) {
				var div = $(".side-infoblock");
				if (!div.is(e.target)
				    && div.has(e.target).length === 0) {
					closeInfoBlock();
				}
			}
		});
	});

	//Скролл меню
    $(".scroll-link").click(function () {
        event.preventDefault();
        var minus = 60;
        var id  = $(this).attr('href'),
            top = $(id).offset().top - minus;
        $('body,html').animate({scrollTop: top}, 1500);
        $(".mob-menu .mob-header__menu-btn").trigger('click');
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
		mainClass: 'my-mfp-zoom-in'
	});

	function reinitMagnificPopup() {
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
	}

	


	// Маска телефона
    $(function($) {
        $("input[type='tel']").mask("+7 (999) 999-99-99");
    });

    $("input").attr("autocomplete", "off");



    //Липкая шапка
	$(function(){
	    $(window).scroll(function() {
	        if($(this).scrollTop() >= 290) {
	            $('header').addClass('stickytop');
	        }
	        else{
	            $('header').removeClass('stickytop');
	        }
	    });
	});

	//Анимация на главной
	if ($(window).width() >= '1200'){
        run_animate();
    }

	// $('.run_animate').click(function (){
	// 	run_animate();
	// });

	function run_animate() {
		$(".main-section .header-nav").animate({
			top: '-20px',
			opacity: '0',
		}, 0);

		$(".main-section .header-nav__logo img").fadeOut(200);

		$(".main-section .survive-img1").animate({
			top: '-200px',
			width: '200px',
			opacity: '0',
		}, 0);

		$(".main-section .survive-img2").animate({
			left: '-500px',
			opacity: '0',
		}, 0);

		$(".main-section .survive-img3").animate({
			right: '-500px',
			opacity: '0',
		}, 0);

		$(".main-section .light-hero").animate({
			opacity: '0',
		}, 0);

		$(".main-section .flare").animate({
			opacity: '0',
		}, 0);

		$(".main-section .text-box .title2").animate({
			opacity: '0',
		}, 0);

		$(".main-section .text-box .bot").animate({
			opacity: '0',
			bottom: '-400px',
		}, 0);

		$(".main-section .rosomaha").animate({
			opacity: '0',
			left: '-500px',
		}, 0);

		$(".main-section .roman").animate({
			opacity: '0',
			right: '-500px',
		}, 0);

		$(".main-section .text-box .bot").animate({
			opacity: '0',
			bottom: '-400px',
		}, 0);

		$(".main-section .l_block").animate({
			opacity: '0',
			left: '-500px',
		}, 0);

		$(".main-section .r_block").animate({
			opacity: '0',
			right: '-500px',
		}, 0);

		// =============== >>>>>>>>>>		

		setTimeout(function() {
		    $(".main-section .header-nav").animate({
				top: '0px',
				opacity: '1',
			}, 100);
		}, 1000);

		setTimeout(function() {
			$(".main-section .header-nav__logo img").fadeIn(200);
		}, 1200);

		setTimeout(function() {
		    $(".main-section .survive-img1").animate({
				opacity: '1',
				top: '0px',
				width: '807px',
			}, 500);
		}, 1300);

		setTimeout(function() {
		    $(".main-section .survive-img2").animate({
				left: '0px',
				opacity: '1',
			}, 500);
			$(".main-section .survive-img3").animate({
				right: '0px',
				opacity: '1',
			}, 500);
		}, 1900);

		setTimeout(function() {
		    $(".main-section .light-hero").animate({
				opacity: '0.6',
			}, 1000);
		}, 2100);

		setTimeout(function() {
		    $(".main-section .flare").animate({
				opacity: '1',
			}, 1000);
		}, 2300);

		setTimeout(function() {
		    $(".main-section .text-box .title2").animate({
				opacity: '1',
			}, 1000);
		}, 2500);

		setTimeout(function() {
		    $(".main-section .rosomaha").animate({
				opacity: '1',
				left: '-0',
			}, 500);
		}, 2500);

		setTimeout(function() {
			if ($(window).width() <= '1700'){
		        $(".main-section .roman").animate({
					opacity: '1',
					right: '-40px',
				}, 500);
		    } else {
		        $(".main-section .roman").animate({
					opacity: '1',
					right: '80px',
				}, 500);
		    }
		}, 2800);

		setTimeout(function() {
		    $(".main-section .text-box .bot").animate({
				opacity: '1',
				bottom: '0',
			}, 500);
		}, 3100);

		setTimeout(function() {
		    $(".main-section .l_block").animate({
				opacity: '1',
				left: '-110px',
			}, 500);
			$(".main-section .r_block").animate({
				opacity: '1',
				right: '-85px',
			}, 500);
		}, 3400);
	}

	


	//Меню
	$('.mob-header__menu-btn').click(function (){
		openSlideMenu();
	});

	$('.mob-header__menu-btn.open').click(function (){		
		closeSlideMenu();
	});

	$('.main-menu #close_btn').click(function (){
		closeSlideMenu();
	});

	function openSlideMenu() {
		$('.mob-header__menu-btn').addClass('open');
		$('.mob-menu').addClass('open');
		$('html').css('overflow', 'hidden');
		$("body").append("<div class='overlay'></div>");
	};

	function closeSlideMenu() {
		$('.mob-header__menu-btn').removeClass('open');
		$('.mob-menu').removeClass('open');
		$('html').css('overflow', 'auto');
		$('.overlay').remove();
	};

	jQuery(function($){
		$(document).mouseup(function (e){ 
			if ($(".mob-menu").hasClass('open')) {
				var div = $(".mob-menu");
				if (!div.is(e.target)
				    && div.has(e.target).length === 0) {
					closeSlideMenu();
				}
			}
		});
	});

	$('.course_slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        if (i < 10) {
        	$('#section3 .current').text('0' + i);
        } else {
        	$('#section3 .current').text(i);
        }

        if (slick.slideCount < 10) {
        	$('#section3 .all_slide').text('/' + '0' + slick.slideCount);
        } else {
        	$('#section3 .all_slide').text('/' + slick.slideCount);
        }
    });

	$('.course_slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('#section3 .square_btn__prev'),
		nextArrow: $('#section3 .square_btn__next'),
	});

	$('.about_project .read_all').click(function (){
		$(this).parent().find('.hide').slideToggle();
		$(this).toggleClass('show');

		if ($(this).hasClass('show')) {
			$(this).text('Свернуть');
		} else {
			$(this).text('Читать дальше');
		}
	});

	

	//РАСПИСАНИЕ
	$('.timetable #see_all').click(function (){
		$('.tabs__content.active').toggleClass('show');
		$(this).toggleClass('show');
		if ($(this).hasClass('show')) {
			$(this).text('Свернуть');
		} else {
			$(this).text('Загрузить ещё');
		}
	});

	$('.timetable .tabs__caption li').click(function (){
		$('.timetable #see_all').removeClass('show');
		$('.timetable #see_all').text('Загрузить ещё');
		$('.timetable .tabs__content.show').removeClass('show');
	});

	
	//Слайдер Для кого этот курс и чему ты научишься?
	$('.fw_slider').slick({
		slidesToShow: 3,
		arrows: false,
		dots: false,
		asNavFor: '.fw_slider_nav',
		vertical: true,
		autoplay: false,
		verticalSwiping: true,
		focusOnSelect: true,
		infinite: false,

		// adaptiveHeight: true,
		// centerMode: true,
		responsive: [
			{breakpoint: 1199, settings: {slidesToShow: 3,}},
			{breakpoint: 991, settings: {vertical: false,  slidesToShow: 1, verticalSwiping: false,}},
		]
	});

	$('.fw_slider_nav').slick({
		slidesToShow: 7,
		asNavFor: '.fw_slider',
		vertical: true,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		autoplay: false,
		infinite: false,
		// centerMode: true
		responsive: [
			{breakpoint: 1199, settings: {slidesToShow: 7,}},
			{breakpoint: 991, settings: {vertical: false,  slidesToShow: 7,}},
			{breakpoint: 576, settings: {vertical: false,  slidesToShow: 4,}},
		]
	});

	$('.fw_slider .slick-current').addClass('active');
	$('.fw_slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        // $('.fw_main').fadeOut(0);
       
        $('.fw_h .fw_h__item').fadeOut(0);
        $('.fw_h .fw_h__item').eq(currentSlide).fadeIn(200);
    });

    $('.fw_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $(".slick-current").removeClass('active');
     	$('.slick-current').addClass('active');
    });

    //ТАБЫ
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active')
		.eq($(this).index()).addClass('active');
		$('.slider-block').slick('setPosition');

		$('.galery_slider1').slick('setPosition');
		// $('.galery_slider1').slick('refresh');
		$('.galery_slider2').slick('setPosition');
		// $('.galery_slider2').slick('refresh');
		$('.galery_slider3').slick('setPosition');
		// $('.galery_slider3').slick('refresh');
		$('.video_review_slider').slick('setPosition');

		$('.partners_slider').slick('setPosition');
	});

    // ===================== //
    $('.galery_slider3').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        if (i < 10) {
        	$('#section6 .current').text('0' + i);
        } else {
        	$('#section6 .current').text(i);
        }

        if (slick.slideCount < 10) {
        	$('#section6 .all_slide').text('/' + '0' + slick.slideCount);
        } else {
        	$('#section6 .all_slide').text('/' + slick.slideCount);
        }

        var currentImgUrl = $('.galery_slider3 .slick-current .slide img').attr('src');
     	var currentImgbg  = 'url(' + currentImgUrl + ')';
     	
     	$('.galery_slider_wr .imac_content').css('background-image', currentImgbg);
     	
     	$('.galery_slider3 .slick-active .content').clone().appendTo(".galery_slider_wr .imac_content");
     	$('.imac_content .content:not(:last)').remove();
    });

    $('.galery_slider2').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        if (i < 10) {
        	$('#section6 .current').text('0' + i);
        } else {
        	$('#section6 .current').text(i);
        }

        if (slick.slideCount < 10) {
        	$('#section6 .all_slide').text('/' + '0' + slick.slideCount);
        } else {
        	$('#section6 .all_slide').text('/' + slick.slideCount);
        }

        var currentImgUrl = $('.galery_slider2 .slick-current .slide img').attr('src');
     	var currentImgbg  = 'url(' + currentImgUrl + ')';
     	
     	$('.galery_slider_wr .imac_content').css('background-image', currentImgbg);
     	
     	$('.galery_slider2 .slick-active .content').clone().appendTo(".galery_slider_wr .imac_content");
     	$('.imac_content .content:not(:last)').remove();
    });

    $('.galery_slider1').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        if (i < 10) {
        	$('#section6 .current').text('0' + i);
        } else {
        	$('#section6 .current').text(i);
        }

        if (slick.slideCount < 10) {
        	$('#section6 .all_slide').text('/' + '0' + slick.slideCount);
        } else {
        	$('#section6 .all_slide').text('/' + slick.slideCount);

        }

        var currentImgUrl = $('.galery_slider1 .slick-current .slide img').attr('src');
     	var currentImgbg  = 'url(' + currentImgUrl + ')';
     	
     	$('.galery_slider_wr .imac_content').css('background-image', currentImgbg);
     	
     	$('.galery_slider1 .slick-active .content').clone().appendTo(".galery_slider_wr .imac_content");
     	$('.galery_slider1 .slick-active .content').first().clone().appendTo(".galery_slider_wr .imac_content");
     	$('.imac_content .content:not(:last)').remove();
     	// var zzz = $('.galery_slider1 .slick-active .content').first();
     	// console.log(zzz);
    });

    $('.galery_slider3').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '25%',
		slidesToShow: 1,
		// arrows: false,
		prevArrow: "<div class='square_btn square_btn__prev'></div>",
		nextArrow: "<div class='square_btn square_btn__next'></div>",
		responsive: [
			{breakpoint: 991, settings: {centerMode: false, centerPadding: '0px', slidesToShow: 1,}},
		]
	});
    

    $('.galery_slider2').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '25%',
		slidesToShow: 1,
		// arrows: false,
		prevArrow: "<div class='square_btn square_btn__prev'></div>",
		nextArrow: "<div class='square_btn square_btn__next'></div>",
		responsive: [
			{breakpoint: 991, settings: {centerMode: false, centerPadding: '0px', slidesToShow: 1,}},
		]
	});

	$('.galery_slider1').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '25%',
		slidesToShow: 1,
		// arrows: false,
		prevArrow: "<div class='square_btn square_btn__prev'></div>",
		nextArrow: "<div class='square_btn square_btn__next'></div>",
		responsive: [
			{breakpoint: 991, settings: {centerMode: false, centerPadding: '0px', slidesToShow: 1,}},
		]
	});

	var sliderHeight = $("#section6 .tabs__content").height();
	$("#section6 .tabs__content").css('min-height', sliderHeight);

	$(window).resize(function() {
	    var sliderHeight = $("#section6 .tabs__content").height();
	});

	
	$('.gs1').click(function (){
		$('.galery_slider1').slick('refresh');
	});
	$('.gs2').click(function (){
		$('.galery_slider2').slick('refresh');
	});
	$('.gs3').click(function (){
		$('.galery_slider3').slick('refresh');
	});

	//СЛАДЕР ОТЗЫВЫ

	$('.review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		asNavFor: '.review_sliderNav',
		fade: true,
		cssEase: 'linear',
		prevArrow: "<div class='arrow_btn arrow_btn__prev'></div>",
		nextArrow: "<div class='arrow_btn arrow_btn__next'></div>",
	});

	$('.review_sliderNav').slick({
		slidesToShow: 7,
		asNavFor: '.review_slider',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{breakpoint: 768, settings: {slidesToShow: 5,}},
			{breakpoint: 576, settings: {slidesToShow: 3,}},
		]
	});

	$('.video_review_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		prevArrow: "<div class='arrow_btn arrow_btn__prev'></div>",
		nextArrow: "<div class='arrow_btn arrow_btn__next'></div>",
	});

	$('.partners_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		// variableWidth: true,
		prevArrow: "<div class='arrow_btn arrow_btn__prev'></div>",
		nextArrow: "<div class='arrow_btn arrow_btn__next'></div>",
		responsive: [
			{breakpoint: 1200, settings: {slidesToShow: 4,}},
			{breakpoint: 576, settings: {variableWidth: true, arrows: false,}},
		]
	});

	// edit start 010820
	var countryCont = $('.country').clone();
	$('.formgroup-tell').append(countryCont);

	$('input[name="tel"]').mask('+7-999-999-99-99').val('+7')
	var country = "Россия";

	$('.country__button').click(function (){
		$(this).parents('.country').find('ul').fadeToggle();
	});

	$('.country li').click(function (){
		$(this).parents('.country').find('li').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.country').find('ul').fadeToggle();

		//Меняем маску, код в инпуте
		var dataMask = $(this).data('mask');
		var dataCode = $(this).find('.code').text();
		var country = $(this).find('.region').text();

		var formCountry = $(this).parents('form').find('[name="country"]');
		formCountry.val(country);

		var inputTell = $(this).parents('.formgroup').find('input[name="tel"]');
		inputTell.focus();
		inputTell.mask(dataMask).val(dataCode);

		//Меняем Флаг
		var btn = $(this).parents('.country').find('.country__button');
		var btnFlag = $(this).parents('.country').find('.country__button img');
		var currentFlag = $(this).parents('.country').find('li.active img').clone();
		btnFlag.remove();
		btn.append(currentFlag);

		//console.log(country);
	});
	// edit end 010820
});
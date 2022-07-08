$(document).ready(function (){
	
	$('.fixed_block').stick_in_parent({
		offset_top: 100 
	});

	// Маска телефона
    $(function($) {
        $("input[type='tel']").mask("+7 (999) 999-99-99");
    });
    $("input").attr("autocomplete", "off");
	
	// СЛАЙДЕР ===================== >>>

    var $main_slider = $('#main_slider');
    $main_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

	    var $numPrevSlide = $('#section_main_slider .btn_prev .btn_num');
	    var $numNextSlide = $('#section_main_slider .btn_next .btn_num');

        var i = (currentSlide ? currentSlide : 0) + 1;
                

        if (i == slick.slideCount) {
        	$numNextSlide.text(1) 
        } else {
        	$numNextSlide.text(i + 1);
        }

        if (i == 1) {
        	$numPrevSlide.text(slick.slideCount) 
        } else {
        	$numPrevSlide.text(i - 1);
        }


        var nextText = $('#main_slider .slick-current').next('.slick-slide').find('.slide_title').text();
        var prevText = $('#main_slider .slick-current').prev('.slick-slide').find('.slide_title').text();

        var prevImg = $('#main_slider .slick-current').prev('.slick-slide').find('.slide').css('background-image');
        var nextImg = $('#main_slider .slick-current').next('.slick-slide').find('.slide').css('background-image');

	    //prevBtn ==== >>
        $('#section_main_slider .btn_prev .btn_text').text(prevText);
        $('#section_main_slider .btn_prev .btn_img').css('background-image', prevImg);

        //nextBtn ==== >>
        $('#section_main_slider .btn_next .btn_text').text(nextText);
        $('#section_main_slider .btn_next .btn_img').css('background-image', nextImg);
    });

    $('#main_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		prevArrow: $('#section_main_slider .btn_prev'),
		nextArrow: $('#section_main_slider .btn_next'),
		responsive: [
			{
				breakpoint: 767,
				settings: {
					adaptiveHeight: true,
				}
			}
		]
	});

	// СЛАЙДЕР ===================== >>>

    var $reviews_slider = $('#reviews_slider');
    $reviews_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    	
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section_reviews .slide_count .current').text(i);
        $('#section_reviews .slide_count .all_slide').text(slick.slideCount);
    });

    $('#reviews_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		speed: 1000,
		centerPadding: '450px',
		prevArrow: $('#section_reviews .nav_btn.prev'),
		nextArrow: $('#section_reviews .nav_btn.next'),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					centerPadding: '350px',
				}
			},
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '250px',
				}
			},
			{
				breakpoint: 992,
				settings: {
					centerPadding: '150px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '50px',
				}
			},
			{
				breakpoint: 600,
				settings: {
					centerPadding: '0px',
					centerMode: false,
					
				}
			}
		]
	});


    // ФОРМ СТАЙЛЕР ===================== >>>

    (function($) {
		$(function() {

		  $('._form_styler').styler();

		});
	})(jQuery);


	// КАЛЬКУЛЯТОР ===================== >>>


	var they_pay = $('#they_pay').val();
	var number_shipments = 1;
	var dataPrice = 7000;


	

	

	$('#section_calc input[name="type_customs"]').change(function (){
		

		if ($(this).val() == "import") {
			dataPrice = $("#they_pay option:selected").attr("data-price");
			dataPrice = parseInt(dataPrice);
			$('.out').text(dataPrice.toLocaleString('ru') + ' руб.');
			$('.benefit').text('0');
			calcSumm();
		} else if ($(this).val() == "export") {
			// $('.benefit').text('7 000');
			dataPrice = 7000;
			$('.out').text(dataPrice.toLocaleString('ru') + ' руб.');
			calcSumm();
		}
	});

	$('#they_pay').change(function () {
		var type_customs = $('#section_calc input[name="type_customs"]:checked').val();
		if (type_customs == 'import') {
			dataPrice = $("#they_pay option:selected").attr("data-price");
			dataPrice = parseInt(dataPrice);
		} else if (type_customs == 'export') {
			dataPrice = 7000;
		}
		they_pay = parseInt($(this).val());

		$('.out').text(dataPrice.toLocaleString('ru') + ' руб.');
		calcSumm();
	});

	$('#number_shipments').on('change keyup', function () {
		var $this = $(this);
  		$this.val(Math.max($this.attr('min'), Math.min($this.attr('max'), $this.val())));
  		
		number_shipments = $(this).val();
		var res = $(this).val();
		var resText = $(this).text();

		calcSumm();
	});

	//calcSumm();

	function calcSumm() {
		$('#section_calc .benefit_start').fadeOut(0);
		$('#section_calc .benefit_summ').fadeIn(0);
		
		var summ = (they_pay - dataPrice) * number_shipments * 12;
		$('.benefit').text(summ.toLocaleString('ru'));

		$('.jq-selectbox__select').css('border-color', '#d9d9d9');
		$('#section_calc .calc_inp-wrText').fadeOut(0);
	};

	// setTimeout(function() {
	//   $('#import').trigger('click');
	//   	$('#section_calc .benefit_start').fadeIn(0);
	// 	$('#section_calc .benefit_summ').fadeOut(0);
	// 	$('.jq-selectbox__select').css('border-color', '#ff0000');
	// 	$('#section_calc .calc_inp-wrText').fadeIn(0);
	// }, 100);



	// Лечим баг со сьездом чека радиобатана на моб.
	// var windowWidth = $(window).width();

	// marginCheck();
	// function marginCheck () {
	// 	if (windowWidth < 575) {
	// 		$('.jq-radio._form_styler.checked .jq-radio__div').css('margin-left', '-5px')
			
	// 	} else {
			
	// 	}
	// }	

    // Табы ===================== >>>

    $('#section_how_declaration .tab_btn.out_broker').click(function (){
    	$('#section_how_declaration .tab_btn.in_broker').removeClass('in');
    	$(this).addClass('in');
    	$('#section_how_declaration .tab_content.in_broker').removeClass('in');
    	$('#section_how_declaration .tab_content.out_broker').addClass('in');


    	$('#section_how_declaration .tab_content.in_broker .tab_item').removeClass('in');
    });

    $('#section_how_declaration .tab_btn.in_broker').click(function (){
    	$('#section_how_declaration .tab_btn.out_broker').removeClass('in');
    	$(this).addClass('in');
    	$('#section_how_declaration .tab_content.out_broker').removeClass('in');
    	$('#section_how_declaration .tab_content.in_broker').addClass('in');

    	var tab_item1 = $('#section_how_declaration .tab_content.in_broker .tab_item1');
    	var tab_item2 = $('#section_how_declaration .tab_content.in_broker .tab_item2');
    	var tab_item3 = $('#section_how_declaration .tab_content.in_broker .tab_item3');

    	setTimeout(function(){tab_item1.addClass('in')}, 300);
    	setTimeout(function(){tab_item2.addClass('in')}, 900);
    	setTimeout(function(){tab_item3.addClass('in')}, 1500);
    });

    // $('#section_how_declaration .tabs_wrap .in_broker .tab_item1').hover(function (){
    // 	$('#section_how_declaration .tabs_wrap .in_broker .tab_item2').css("display", "flex").fadeIn();
    // 	$('#section_how_declaration .tabs_wrap .in_broker .tab_item3').css("display", "flex").fadeIn();
    // });


	//Чекбокс дисаблед
	// $("form .__person_data_checkbox input[type=checkbox]").change(function() {
	//     if ($(this).is(":checked")) {
	//     	$(this).parents("form").find("button[type=submit]").removeAttr('disabled');
	//     } else {
	//     	$(this).parents("form").find("button[type=submit]").attr('disabled','disabled');
	//     }
	// });	

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




	// $(".file-upload input[type=file]").change(function(){
	// 	var filename = $(this).val().replace(/.*\\/, "");
	// 	$("#filename").val(filename);
	// 	});


	//menu

	$('#nav-btn').click(function (){
		$('#main_navbar').addClass('in');
		$(this).toggleClass('open');
		$('.overlay').fadeIn();
		$('html').css('overflow', 'hidden');
		// $('header.stickytop').css('padding-right', scrollWidth);
		$('html').css('margin-right', scrollWidth);
	});

	$('#main_navbar .close_btn').click(function (){
		$('#nav-btn').removeClass('open');
		$('#main_navbar').removeClass('in');
		$('.overlay').fadeOut();
		$('html').css('overflow', 'auto');
		$('html').css('margin-right', '0');
	});

	$('#main_navbar .navbar .nav_trigger').click(function (){
		$(this).toggleClass('active');
		$(this).next('ul.submenu').slideToggle();
	});

	//Ширина скролбара
    var div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';

	div.style.visibility = 'hidden';

	document.body.appendChild(div);
	var scrollWidth = div.offsetWidth - div.clientWidth;
	document.body.removeChild(div);

	//tooltip
	$('#section_why_we a.see_tooltip').click(function (){
		$('#section_why_we .tooltip').fadeIn();
	});

	$('#section_why_we .tooltip .close_btn').click(function (){
		$(this).parent('.tooltip').fadeOut();
	});

	function sendForm() {
        $.magnificPopup.open({
            items: {
                src: '#form_send'
            },
                type: 'inline',
                mainClass: 'my-mfp-zoom-in',
                removalDelay: 300,
        }, 0);
    };

    //ReadMore
    $('.traveling_link.left').click(function (){
    	var id = $(this).attr("id");
    	var target = '#' + id + '_content';
    	$('.traveling_link_content').removeClass('in');
    	$(target).addClass('in');
		$('.read_more_toggle.left').addClass('in');
		$('.overlay').fadeIn();
		$('html').css('overflow', 'hidden');
		$('html').css('margin-right', scrollWidth);
	});

	$('.read_more_toggle .close_btn').click(function (){
		$('.read_more_toggle').removeClass('in');
		$('.overlay').fadeOut();
		$('html').css('overflow', 'auto');
		$('html').css('margin-right', '0');
	});

	$('.traveling_link.right').click(function (){
    	var id = $(this).attr("id");
    	var target = '#' + id + '_content';
    	$('.traveling_link_content').removeClass('in');
    	$(target).addClass('in');
		$('.read_more_toggle.right').addClass('in');
		$('.overlay').fadeIn();
		$('html').css('overflow', 'hidden');
		$('html').css('margin-right', scrollWidth);
	});

	$('.read_more_toggle .close_btn').click(function (){
		$('.read_more_toggle').removeClass('in');
		$('.overlay').fadeOut();
		$('html').css('overflow', 'auto');
		$('html').css('margin-right', '0');
	});
    

    //СКРОЛЛ scroll-link

    //Скролл меню
    $(".scroll-link").click(function () {
        event.preventDefault();
        var minus = 78;
        var id  = $(this).attr('href'),
            top = $(id).offset().top - minus;
        $('body,html').animate({scrollTop: top}, 1500);
        $("#main_navbar .close_btn").trigger('click');
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



	//Анимация цифр
	$(function(){
	 if($('body').is('.main_page')){
	  	var show = true;
	    var countbox = "#section_advantages";
	    $(window).on("scroll load resize", function () {
	        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
	        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
	        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
	        var w_height = $(window).height(); // Высота окна браузера
	        var d_height = $(document).height(); // Высота всего документа
	        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
	        if (w_top + 0 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
	            $('.num .anim_num').css('opacity', '0');
	            $('.num .anim_num').spincrement({
	                thousandSeparator: "",
	                duration: 4000
	            });

	            show = false;
	        }
	    });
	    
	    //call specific functions
	 }
	});
	

    //Прикрепит файл
	$('.file-upload input[type=file]').change(function (){

		var info = $(this).parents('.upload_wrap').find('.info');
    	var add = $(this).val().replace( "C:\\fakepath\\", '' );
    	var num =  this.files.length;

    	if (num == 1) {
    		info.text('прикреплен: ' + add);
    	} else if (num > 1) {
    		info.text('прикрепленно: ' + num + ' файла');
    	} else {
    		
    	}
    });

    //Размер файла
    $('#userfile').bind('change', function() {
    	var size = (this.files[0].size);
		if (size >= 10000000) {
			 $('._form .upload_wrap .info').text('Файл больше 10мб...');
			 $('._form .upload_wrap .info').css('color', 'red');
			 $('._form .upload_wrap .info').css('color', 'red');
			 $(this).parents('._form').find('button[type="submit"]').prop('disabled',true);
		} else {
			$('._form .upload_wrap .info').css('color', '#2b2b2b');
			$(this).parents('._form').find('button[type="submit"]').prop('disabled',false);
		}
	});
    
});
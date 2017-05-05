$(document).ready(function() {

	/* popup */
	
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	/* popup */

	/* slick */
	$('.banner__wrap').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				arrows: false
			}
		}]
	});
	/* slick */

	/* hover */
	$('.plans__wrap-footer a').hover(
		function(){
			$(this).addClass('hover-active');
			$(this).parent().parent().find('.plans__wrap-head').addClass('hover-active');
		},
		function(){
			$(this).removeClass('hover-active');
			$(this).parent().parent().find('.plans__wrap-head').removeClass('hover-active');
		});
	/* hover */

	/* link */
	$('.nav__list a').on('click', function (event) {

		event.preventDefault();
				var id  = $(this).attr('href'),
				top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.mobile__list a').on('click', function (event) {

		event.preventDefault();
				var id  = $(this).attr('href'),
				top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1500);
	});
	/* link */

	/* scroll-fix */
	
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('.header').addClass('scroll-fix');
			$('.nav__list-item a').css({'line-height':'98px'});
		}else{
			$('.header').removeClass('scroll-fix');
			$('.nav__list-item a').css({'line-height':'100px'});
		}
	});

	/* scroll-fix */

	/* mobile */
	$('.mobile-link').on('click', function(){
		$('.mobile-link span').toggleClass('mobile-active-link');
		$('.mobile').slideToggle();
	});

	$('.mobile__list-item a').on('click', function(){
		$('.mobile').hide();
		$('.mobile-link span').removeClass('mobile-active-link');
	});

	$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.mobile').removeAttr('style');
    }
  });
	/* mobile */

	
});
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
	/* link */

	/* scroll-fix */
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('.header').addClass('scroll-fix');
		}else{
			$('.header').removeClass('scroll-fix');
		}
	});
	/* scroll-fix */

	
});
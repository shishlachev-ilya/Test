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

	
});
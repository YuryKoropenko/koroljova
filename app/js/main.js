$(document).ready(function() {
/*скроллинг*/
	$('.scroll__icon').on('click', function() {
		var ht = $('.header').height();
		$('html, body').animate({scrollTop:ht}, 'slow');
	});
/*появление кнопки*/
	$(window).scroll(function() {
		var bo = $('.header').height();
		if ( $(window).scrollTop() >= bo ){
			$('.f-contact').fadeIn();
		} else {
			$('.f-contact').fadeOut();
		}
	});

/*мигание*/
	function showhide() {
		$('.f-contact__button-sh').fadeIn(1000, function() {
			$('.f-contact__button-sh').fadeOut(1000, showhide);
		});
	}
	showhide();
	$('.f-contact__button').on('click', function() {
		$('.f-contact__form').fadeToggle();
	});
});
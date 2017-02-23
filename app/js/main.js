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

/*кнопка вверх*/
	$('.arrow-up__button').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'slow');
	});

/*появление кнопки вверх*/
	$(window).scroll(function() {
		var bo = $('.header').height();
		if ( $(window).scrollTop() >= bo ){
			$('.arrow-up__button').fadeIn();
		} else {
			$('.arrow-up__button').fadeOut();
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

/*тригеры*/
	$('.i-title__button-left').on('click', function(e) {
		$('.slick-prev').trigger('click', false);
	});
	$('.i-title__button-right').on('click', function(e) {
		$('.slick-next').trigger('click', false);
	});

/*якоря*/
	$('.services__item-1').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.services__item-2').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.services__item-3').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.metod__item a[href="#gc"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.metod__item a[href="#nlp"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.metod__item a[href="#gt"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.metod__item a[href="#pd"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.metod__item a[href="#gk"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
	$('.metod__item a[href="#et"]').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
	});
});
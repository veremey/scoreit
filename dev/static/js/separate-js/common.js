function sameMinWidth(el) {
	var minWidth = 0;
	$('.' + el).each(function(){
		if($(this).width() > minWidth){
			minWidth = $(this).width();
		}
	});
	return minWidth;
}

function sliderItemSameHeight(){
	  $('.slick-dubl').each(function(){
	    var highestBox = 0;
	    $('.slick-dubl__item', this).each(function(){
	      if($(this).height() > highestBox) {
	        highestBox = $(this).height();
	      }
	    });
	    $('.slick-dubl__item',this).height(highestBox);
	  });
	}


$(document).ready(function () {
	/* --- header burger ---*/
	$('.header__burger').on('touchstart', function(e) {
		e.stopPropagation();
		$(this).toggleClass('is-active');
		$('.header__nav').toggleClass('is-active');

	});
	/*-----------------------------------------------------------*/

	/* --- go to contact section ---*/

  var url_string = window.location.href
  var url = new URL(url_string);
  var urlArr = url_string.split('#');
  var lastUrlParam = urlArr[urlArr.length - 1];
  var beforeLastUrlParam = urlArr[urlArr.length - 2];

  if(lastUrlParam == 'contact'){
    (function() {
      setTimeout(function() {
        $('html,body').animate({scrollTop: $('#contact').offset().top}, 800);
      }, 400)
    })();
  }
	/* --- smooth scroll ---*/
	$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop':  $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });
	/*-----------------------------------------------------------*/




	$('.check__input').on('click', function(){
		if($(this).prop('checked')){
			var inp = $(this).attr('name');
			$('.' + inp).addClass('is-active');
		} else {
			var inp = $(this).attr('name');
			$('.'+inp).removeClass('is-active');
		}
	})

	$('.startscreen-slick').slick({
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false
	});

	$('.slick-dubl').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow: '.slick-prev',
		nextArrow: '.slick-next',
		infinite: true,
		autoplay: true,
		pauseOnFocus: false,
		responsive: [
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 1,
				}
			 }
			]
	});

	/* --- same slider item height ---*/
	// sliderItemSameHeight();

	// $(document).on('resize', function(){
	// 	if($(document).width() < 850 ) {
	// 		$('.slick-dubl__item').css({'height' : 'auto'});
	// 		setTimeout( function(){
	// 		 sliderItemSameHeight();
	// 		}, 800);
	// 	}
	// 	if($(document).width() < 850 ) {
	// 		$('.slick-dubl__item').css({'height' : 'auto'});
	// 		setTimeout( function(){
	// 		 sliderItemSameHeight();
	// 		}, 800);
	// 	}
	// });

	/*-----------------------------------------------------------*/


	/* --- contact form ---*/

  $('.contact__input, .contact__textarea').on('input', function () {
    var $this = $(this);

    if( $this.val().length > 0 ) {
      $this.parent('.contact__fieldset').addClass('has-content');
    } else {
      $this.parent('.contact__fieldset').removeClass('has-content');
    }

  });
  /*-----------------------------------------------------------*/




});


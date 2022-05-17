var $=jQuery;

function updateWrapper() {

    var hscreen = $(window).height(),

        hfoot = $(".footer-wrapper").outerHeight(),

		hheader = $(".header").outerHeight();

    	//$("#wrapper").css({marginBottom: -hfoot});

    	//$('.pushContainer').css({ height: hfoot});

		//$('.mainNav').css({ height: hscreen - 60});

		//$(".main-container").css({marginTop: hheader});

}



//Match height

function MatchHeight() {

	$('.equalheight').matchHeight();

	$('.equalheight1').matchHeight();

	$('.equalheight2').matchHeight();

	$('.equalheight3').matchHeight();

	$('.equalheight4').matchHeight();

	$('.equalheight5').matchHeight();

	$('.equalheight6').matchHeight();

	$('.equalheight7').matchHeight();

	$('.equalheight8').matchHeight();

	$('.equalheight9').matchHeight();

}

//Match height END



jQuery('img').removeAttr('width').removeAttr('height');

$(window).load(function() {
    $('body, #wrapper, .footer-wrapper').css({opacity: 1});
	//$('.loading').remove();
    $('.loading').fadeOut(300, function() { 
        $('.loading').remove(); 
    });
});

$(function() {

    $('a.sscroll[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||

            location.hostname == this.hostname) {



            var target = $(this.hash),

                headerHeight = $(".header").height(); // Get fixed header height



            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');



            if (target.length) {

                $('html,body').animate({

                    scrollTop: target.offset().top - headerHeight

                }, 500);

                return false;

            }

        }

    });

});

jQuery(document).ready(function($) {

    $('.nav-open').click(function() {
    
    	$('.top-nav').addClass('active');
    
    });	
    
    $('.nav-close, #menu > li a').click(function() {
    
    	$('.top-nav').removeClass('active');
    
    });	
    
    $(".fancybox").fancybox();
    
    	 // browser window scroll (in pixels) after which the "back to top" link is shown
    
        var offset = 300,
    
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    
        offset_opacity = 1200,
    
        //duration of the top scrolling animation (in ms)
    
        scroll_top_duration = 700,
    
        //grab the "back to top" link
    
        $back_to_top = $('.cd-top');
    
    //hide or show the "back to top" link
    
    $(window).scroll(function() {
    
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    
        if ($(this).scrollTop() > offset_opacity) {
    
            $back_to_top.addClass('cd-fade-out');
    
       }
    
        if ($(this).scrollTop() > 1) {
    
            $('.header').addClass("sticky");
    
    		//$('.topRightContainer').addClass("sticky");
    
        } else {
    
            $('.header').removeClass("sticky");
    
    		//$('.topRightContainer').removeClass("sticky");
    
        }
    
    });
    
    
    
    //smooth scroll to top
    
    $back_to_top.on('click', function(event) {event.preventDefault();
    
    $('body,html').animate({scrollTop: 0,}, scroll_top_duration);});
    
    
    
    //Home Banner Slider
    //var $status = $('.SlideNumbers');
    
    var $slickElement = $('.home-banner');
    
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    
        /*var i = (currentSlide ? currentSlide : 0) + 1;
    
        $status.html('<span class="active">0' + i + '</span> - ' + '0' + slick.slideCount);*/
        if(currentSlide==undefined || currentSlide == 1){
            $(this).find('.slick-arrow').hasClass('cl-1')==false && $(this).find('.slick-arrow').addClass('cl-1');
        }else{
            $(this).find('.slick-arrow').hasClass('cl-1') && $(this).find('.slick-arrow').removeClass('cl-1');
        }
    });
    
    $slickElement.slick({
    
        slidesToShow: 1,
    
        slidesToScroll: 1,
    
        speed: 1000,
    
        dots: false,
    
        //slide: 'div',
    
        arrows: true,
    
    	autoplay: true,
    
      	autoplaySpeed: 2000,
    
    	//customPaging: function(slider, i) {var thumb = $(slider.$slides[i]).data();return '<a><span>0' + (i + 1) + '</span></a>';},
    
        //prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="far fa-arrow-alt-circle-left"></i>Previous</button>',
    
        //nextArrow: '<button class="slick-next" aria-label="Next" type="button">NEXT<i class="far fa-arrow-alt-circle-right"></i></button>',
        
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    
        fade: false,
    
    });
    
    //Home Banner Slider END	
    
    
    $('.testimonial-slider').slick({
    
      slidesToShow: 2,
    
      slidesToScroll: 1,
    
      dots: false,
    
      centerMode: false,
    
      infinite: true,
    
      swipe:true,
    
      autoplay: true,
    
      autoplaySpeed: 2000,
    
      focusOnSelect: true,
    
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    
      responsive: [
    
            {
    
                breakpoint: 980,
    
                settings: {
    
                    slidesToShow:2,
    
                }
    
            },
    
            {
    
                breakpoint: 767,
    
                settings: {
    
                    slidesToShow: 1,
    
                }
    
            },
    
        ]
    
    });
    
    $('.product-slider').slick({
    
      slidesToShow: 3,
    
      slidesToScroll: 1,
    
      dots: false,
    
      centerMode: true,
    
      infinite: true,
    
      swipe:true,
    
      autoplay: true,
    
      autoplaySpeed: 2000,
    
      focusOnSelect: true,
    
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    
      responsive: [
    
            {
    
                breakpoint: 980,
    
                settings: {
    
                    slidesToShow:2,
    
                }
    
            },
    
            {
    
                breakpoint: 568,
    
                settings: {
    
                    slidesToShow: 1,
    
                }
    
            },
    
        ]
    
    });
    
    $('.partner-slider').slick({
    
      slidesToShow: 5,
    
      slidesToScroll: 1,
    
      dots: true,
    
      centerMode: false,
    
      infinite: true,
    
      swipe:true,
    
      autoplay: true,
    
      arrows:false,
    
      autoplaySpeed: 2000,
    
      focusOnSelect: true,
    
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
    
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
    
      responsive: [
    
            {
    
                breakpoint: 980,
    
                settings: {
    
                    slidesToShow:3,
    
                }
    
            },
    
    		{
    
                breakpoint: 736,
    
                settings: {
    
                    slidesToShow:2,
    
                }
    
            },
    
            {
    
                breakpoint: 414,
    
                settings: {
    
                    slidesToShow: 1,
    
                }
    
            },
    
        ]
    
    });
    
    	
    
    MatchHeight();
    
    updateWrapper();
    
    setTimeout(function(){
        $('#fullpage').fullpage({
        
        	navigation: false,
        
        	scrollingSpeed:1000,
        
        	menu: '#menu',
        
        	scrollOverflow: true,
        
        	scrollOverflowReset: true,
        
        	anchors: ['home','about-us', 'hightlight','our-products', 'our-services', 'contact-us', 'instagram'],
        	
        	afterLoad: function( section, origin, destination, direction){
        	    if($(this).attr('data-anchor') == 'hightlight'){
        	        $('.mainNav ul li[data-menuanchor="about-us"]').addClass('active');
        	    }
        	    if (screen.width < 768 || $(window).width() < 768) {
        	        $(".footer-info.aos-item").addClass("aos-animate");
        	    }
        	    if (screen.width < 575 || $(window).width() < 575) {
                    $(".aos-item").addClass("aos-animate");
        	    }else{
            	    $(this).find(".aos-item").removeClass("aos-animate");
            	    $(this).find(".aos-item").addClass("aos-animate");
        	    }
        	}
        
        });	
        
    },1000);
    
});

//(document).ready function-END



$(window).load(function(){

$('.targetDiv').hide();

$('.targetDiv').first().show();

$('.showSingle').mouseover(function () {

    $('.targetDiv').hide();

    $('.showSingle').removeClass('selected');

    $('#div' + $(this).attr('data-target')).show();

    $(this).addClass('selected');

});

});



//ISOTOPE

$(window).load(function() {

	// init Isotope

	var initial_items = 12;

	var next_items = 8;

	var $grid = $('.grid-listing').isotope({

		itemSelector: '.grid-item',

		layoutMode: 'masonry',

		percentPosition: true,

		columnWidth: '.grid-sizer',

		transitionDuration: '0.4s',

	});

	// bind filter button click

	$('.filter-button-group').on('click', 'button', function () {

		var filterValue = $(this).attr('data-filter');

		// use filterFn if matches value

		$grid.isotope({filter: filterValue});

		updateFilterCounts();

	});

	function updateFilterCounts() {

		// get filtered item elements

		var itemElems = $grid.isotope('getFilteredItemElements');

		var count_items = $(itemElems).length;

		if (count_items > initial_items) {

			$('.load-more-btn').show();

		}

		else {

			$('.load-more-btn').hide();

		}

		if ($('.grid-item').hasClass('visible-grid-item')) {

			$('.grid-item').removeClass('visible-grid-item');

		}

		var index = 0;

		$(itemElems).each(function () {

			if (index >= initial_items) {

				$(this).addClass('visible-grid-item');

			}

			index++;

		});

		$grid.isotope('layout');

	}

	// change is-checked class on buttons

	$('.filter-button-group').each(function (i, buttonGroup) {

		var $buttonGroup = $(buttonGroup);

		$buttonGroup.on('click', 'button', function () {

			$buttonGroup.find('.is-checked').removeClass('is-checked');

			$(this).addClass('is-checked');

		});

	});

	function showNextItems(pagination) {

		var itemsMax = $('.visible-grid-item').length;

		var itemsCount = 0;

		$('.visible-grid-item').each(function () {

			if (itemsCount < pagination) {

				$(this).removeClass('visible-grid-item');

				itemsCount++;

			}

		});

		if (itemsCount >= itemsMax) {

			$('.load-more-btn').hide();

		}

		$grid.isotope('layout');

	}

	// function that hides items when page is loaded

	function hideItems(pagination) {

		var itemsMax = $('.grid-item').length;

		var itemsCount = 0;

		$('.grid-item').each(function () {

			if (itemsCount >= pagination) {

				$(this).addClass('visible-grid-item');

			}

			itemsCount++;

		});

		if (itemsCount < itemsMax || initial_items >= itemsMax) {

			$('.load-more-btn').hide();

		}

		$grid.isotope('layout');

	}

	$('.load-more-btn').on('click', function (e) {

		e.preventDefault();

		showNextItems(next_items);

	});

	hideItems(initial_items);
	
    var str = $('.pageTitle').text();
    var res = str.split("");
    var text_h1 = "";
    var i = 0;
    $('.pageTitle h1').each(function(){
        text_h1 = "";
        str = $(this).text();
        res = str.split("");
        i = 0;
        res.forEach(function (item, index) {
            i++;
            text_h1 += '<b class="aos-item" data-aos="fade-right" data-aos-delay="'+(100*i)+'" data-aos-duration="1000">' + item + '</b>'; 
        });
        $(this).html(text_h1);
    });
    $('.pageTitle h2').each(function(){
        text_h1 = "";
        str = $(this).text();
        res = str.split("");
        i = 0;
        res.forEach(function (item, index) {
            i++;
            text_h1 += '<b class="aos-item" data-aos="fade-right" data-aos-delay="'+(50*i)+'" data-aos-duration="500">' + item + '</b>'; 
        });
        $(this).html(text_h1);
    });
    
	AOS.init({
        easing: 'ease-in-out-sine'
    });
});

if (screen.width < 575 || $(window).width() < 575) {
    AOS.init({disable: 'mobile'});
}

$(window).resize(function() {
    updateWrapper();
    if (screen.width > 575 || $(window).width() > 575) {
        setTimeout(function(){
            $(".aos-item").addClass("aos-animate");
        },300);
    }else{
        AOS.init({disable: 'mobile'});
    }
});




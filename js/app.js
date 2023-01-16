$(function() {

	var header = $("#header"),
		headerH = header.innerHeight(),
		introH = $("#intro").innerHeight(),
		_window = $(window),
		windowH = _window.innerHeight(),
		scrollOffSet = _window.scrollTop(),
		activeblock = null;

	/*
	Fixed Header
	*/

	checkScroll();

	$(window).on("scroll", function() {

		scrollOffSet = $(this).scrollTop();

		checkScroll();

	});

	function checkScroll() {

		if ( scrollOffSet > 23 ) {
			header.addClass("fixed"); 
		} else {
			header.removeClass("fixed");
		}

	}		
	
	/*
	Smooth scroll
	*/
	
	$("[data-scroll]").on("click", function(event) {

		$('.nav_link.active').removeClass("active");

		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffSet = $(blockId).offset().top;

			headerH = header.innerHeight();

			activeblock = $this;

		$("html, body").animate({
			scrollTop: blockOffSet - headerH
		}, 700);

		$("#nav a").removeClass("active");
		$this.addClass("active");
	});

	/* 
	Menu Nav Toogle 
	*/ 

	$("#nav_toggle").on("click", function(event) {

		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	});

	/*
	Collapse
	 */	

	var accordion_item_activate = false;

	if ( !accordion_item_activate ) {

		var item = $('.accordion_item.active'),
			itemId = item.data('collapse');

		$(itemId).slideToggle();
		accordion_item_activate = true;

	}

	$("[data-collapse]").on("click", function (event) {
	 	
	 	event.preventDefault();

	 	var $this = $(this),
	 		blockId = $this.data('collapse');

	 	if ( !$this.hasClass("active") ) {

	 		var activeblock = $('.accordion_item.active');
	 			activeblockId = activeblock.data('collapse');

	 		activeblock.removeClass("active");
	 		$(activeblockId).slideToggle();
	 		
	 		$this.addClass("active");
	 		$(blockId).slideToggle();

	 	} else {
	 		return;
	 	}
	 	 
	})

	/*
 	Slider
 	 */
 	
	$("[data-slider]").slick( {

 	 	infinite: true,
 	 	fade: false,
 	 	slidesToShow: 1,
 	 	slidesToScroll: 1

	} );

});
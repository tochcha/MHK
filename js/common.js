$(document).ready(function() {
    
	// анимация сэндвича
	$("#sandwich").click(function () {
		$("#sandwich").toggleClass("active");
		$(".main-menu nav").toggleClass("active");
	});
    

	// слайдер
	$('.slider').slick({
		infinite: true,
		dots: true,
		fade: true,
		arrows: false,
		pauseOnFocus: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
				autoplay: false,
				fade: false
			  }
			}
		]
	});
	
	
	// карусель учителей
	$('.carousel-teach').slick({
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 840,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 680,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	});
	
	
	// карусель партнеров
	$('.carousel').slick({
		infinite: true,
		speed: 400,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
			  breakpoint: 900,
			  settings: {
				slidesToShow: 5,
			  }
			},
			{
			  breakpoint: 680,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 340,
			  settings: {
				slidesToShow: 2,
			  }
			}
		]
	});
    
    
    
});
$(function(){

	$('.menu-button').on('click', function(){
		$('nav').toggleClass("open");
	});

	setTimeout(function(){
		$('header').addClass('loaded');
	}, 1000);

	$('footer').on('click', function(){
		$.scrollTo($('header'), 400);
	});

	$('.ad-container').parallax({imageSrc: 'http://lorempixel.com/output/food-q-c-1280-720-8.jpg'})


	$('.text-fade-in').waypoint(function(){
		$('.text-fade-in').addClass('show');
	} , {
		offset: '50%'
	});

});
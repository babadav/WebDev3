$(document).ready(function(){

	// $('.temperature').html(135).addClass('very-hot');

	$('.temperature').click(function(){

		$(this).toggleClass('very-hot');

	});

	$('.day-option').click(function(){

		$('.day-option').removeClass('show');
		$(this).addClass('show');

		$('.active-weather-group').removeClass('show');
		$('.active-weather-group').eq($(this).index('.day-option')).addClass('show');

		if ($(this).hasClass('sunny')) {
			$('body').removeClass().addClass('body-weather-sunny');
		} else if($(this).hasClass('rainy')) {
			$('body').removeClass().addClass('body-weather-rainy');
		}

	
		});

});
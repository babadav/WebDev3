$(document).ready(function(){

	$('.bat-dart').click(function(){

		TweenMax.to(".landing-hero" , 2 , {
			
			position: "absolute",
			ease: Back.easeOut.config(1),
			bottom: "100%"

		});

		TweenMax.to(".bat-hero-wrap" , .8 , {

			top: "0%",
			ease: Back.easeOut.config(1),
			display: "block"
		});

		TweenMax.to(".joker-hero-wrap" , 2 , {

			top: "186%",
			ease: Back.easeOut.config(1),
			display: 'none'
		});

		
	});


	$('.joker-logo').click(function(){

		TweenMax.to(".joker-hero-wrap" , 2 , {

			top: "0%",
			display: 'block',
			ease: Back.easeOut.config(1)
		});

		TweenMax.to(".landing-hero" , 2 , {
			
			position: "absolute",
			bottom: "100%",
			ease: Back.easeOut.config(1)

		});

		TweenMax.to(".bat-hero-wrap" , .8 , {

			top: "100%",
			display: "none",
			ease: Back.easeOut.config(1)
		});

		TweenMax.to(".bat-dart")
	});
});

	

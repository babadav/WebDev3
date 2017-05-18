console.log("script.js");

TweenMax.fromTo(".hero-right" , 2.5 ,


	 {top: "100%"} , 


	{top: "0%",
	
	});

TweenMax.fromTo(".hero-right-2" , 2.5 ,
 {bottom: "100%"} , 

 {bottom: "39%",
  easeOut :" Ease"
	
	});

// TweenMax.to(".pencil-cutout", 2, 
// 	{
// 		rotation: 90, 
// 		transformOrigin: "0% 100%",
// 		top: "156%",
// 		ease: Bounce.easeOut

// 	});


 // TweenMax.to('.back-pic' , 2,{
 // 	left: "0%",
 // 	top: "372%"
 // });

$(function(){

	$('.fixed-button').on('click', function(){
		$.scrollTo($('.logo'), 400);
	});


	$('.pencil-cutout').waypoint(function(){
		TweenMax.to(".pencil-cutout", 2, 
	{
		rotation: 90, 
		transformOrigin: "0% 100%",
		top: "145%",
		ease: Bounce.easeOut

		} , {
		offset: '50%'
	});

	
 });

	$('.two-guys').waypoint(function(){
		TweenMax.to('.back-pic' , 2,{
 		left: "0%",
 		top: "348%"

 		} , {
		offset: '1%'

 		});
	});
});



// if($('body').width() >= 400 && $('body').width() <= 800 ){

// 	$('.pencil-cutout').waypoint(function(){
// 		TweenMax.to(".pencil-cutout", 2, 
// 	{
// 		rotation: 90, 
// 		transformOrigin: "0% 100%",
// 		top: "182%",
// 		ease: Bounce.easeOut

// 		} , {
// 		offset: "50%"
// 	});



	
//  });

// 	$('.back-pic').waypoint(function(){
// 		TweenMax.to(".back-pic", 2, 
// 	{
// 		top: '285%'

// 		} , {
// 		offset: "1%"
// 	});

// });
// };


 





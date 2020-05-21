$(function(){
	$('.slider').slick({
		arrows:false,
		fade:true,
		autoplay:3000,
	});


	$('.menu-adaptiv').click(function(){
		$('.header__inner-top ul').slideToggle(500);

	});

	$(window).resize(function(){
		if($(window).width()>500){
			$('.header__inner-top ul').removeAttr('style');
		}
	});
});
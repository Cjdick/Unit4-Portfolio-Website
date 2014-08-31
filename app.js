$(document).ready( function() {
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		auto: true,
  		autoControls: true
	});
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var width = (w - 1000)/2-8.5;
	$('.side-spacer').css("width",width)

	$(window).resize(function(){
		w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		width = (w - 1000)/2-8.5;
		$('.side-spacer').css("width",width)
	});
});


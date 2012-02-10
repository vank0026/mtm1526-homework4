// JavaScript Document

$(document).ready(function () {
	
	
	$(".tab-buttons a").on("click", function(ev){
		var tabToShow = $(this).attr('href');
				
		$('.tab-buttons .active').removeClass('active');
		$('.tabgroup .current').removeClass('current');
		console.log(tabToShow);
		
		$('.tabgroup div:not(.current)').hide(300);
		
		$(tabToShow).addClass('current').show(300);
		$(this).addClass('active');
	});

});

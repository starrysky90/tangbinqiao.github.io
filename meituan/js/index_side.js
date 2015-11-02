// JavaScript Document
$(function(){
	$('.tbq_side_picslide_btn  span').mouseover(function(){
		$('.tbq_side_picslide_btn  span').removeClass('tbq_active');
		$(this).addClass('tbq_active');
		
		$('.tbq_side_picslide a').hide();
		$('.tbq_side_picslide a').eq($(this).index()).show();
		});
		
	$('.tbq_side_picslide1_btn  span').mouseover(function(){
		$('.tbq_side_picslide1_btn  span').removeClass('tbq_active');
		$(this).addClass('tbq_active');
		
		$('.tbq_side_picslide1 a').hide();
		$('.tbq_side_picslide1 a').eq($(this).index()).show();
		});

	});
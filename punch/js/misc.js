$(document).ready(function(){
	$(".rating").mouseover(function(){
		$(this).parent().addClass("moused")
		$(".rating").removeClass("one_away two_away active");
		$(this).addClass("active");
		$(this).prev().addClass("one_away").prev().addClass("two_away");
		$(this).next().addClass("one_away").next().addClass("two_away");
	}).mouseout(function(){
		$(".rating").removeClass("one_away two_away active");
	})
});
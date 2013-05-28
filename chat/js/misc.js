$(document).ready(function(){
	ww = $(window).width();
	wh = $(window).height();

	ratioX = (ww-264) / ww;

	$("#users").on("click", function(e) {
		$("#main").addClass("effect").css({
			"-webkit-transform" : "scale3d("+ratioX+","+ratioX+",1) translate3d("+32/ratioX+"px, 0, 0)"
		});
	});
});
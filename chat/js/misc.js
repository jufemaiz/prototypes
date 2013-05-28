var ww, wh, pane_size, margin = 32, pane_order; //header height / 2

function resize() {
	ww = $(window).width();
	wh = $(window).height();
}

function scale(id) {
	pane = $("#"+id);
	pane_size = 0;

	resize();

	if(pane.hasClass("open")) {
		pane.removeClass("open").attr("style","");
	} else {
		pane.addClass("open");
	}

	pane_order = 0;
	$(".open.pane").each(function(){
		pane_size = pane_size + $(this).outerWidth();
		$(this).attr("data-order", pane_order);

		move = pane_size - $(this).outerWidth();

		$(this).css({
			"-webkit-transform" : "translate3d(-"+move+"px, 0, 0)"
		});
		pane_order++;
	});

	ratio = (ww-(pane_size+(margin*2))) / ww;
	centerY = (wh*ratio) / 2;

	$(".effect").css({
		"-webkit-transform" : "scale3d("+ratio+","+ratio+",1) translate3d("+margin/ratio+"px, "+margin/ratio+"px, 0)"
	});
}

$(document).ready(function(){

	$("header a").on("click", function(e) {
		$("#main").addClass("effect");
		scale($(this).attr("data-id"));
	});
});
var ww, wh, pane_size, margin = 32, pane_order, duration = 333;

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
		$("header").addClass("opac");
		$("#main").addClass("effect");
		scale($(this).attr("data-id"));

		$.blurjs("reset");
		if(pane_order) {
			$("#main").blurjs({
				customClass: 'blurjs',
				radius: pane_order,
				persist: false
			});

			$("#overlay").show().animate({ opacity: pane_order*.25 });
		} else {
			$("header").removeClass("opac");
			$("#main").attr("style","").removeClass("effect");
			$("#overlay").css("opacity","0");

			setTimeout(function(){
				$("#overlay").hide();
			}, duration);
		}
	});
});
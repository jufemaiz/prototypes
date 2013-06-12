var ww, wh, pane_size, move, margin = 32, pane_num, duration = 333;

function new_room(id) {
	style = $(".main.active").attr("style");

	main_pane = '<section data-chat="'+id+'" class="main active" style="'+style+'">';
	main_pane +='<aside class="overlay"></aside>'; 
	main_pane +='<article class="names">';
	main_pane +='<aside class="content"></aside>';
	main_pane +='</article>';
	main_pane +='<article class="chat">';
	main_pane +='<aside class="content">'+id+'</aside>';
	main_pane +='</article>';
	main_pane +='<article class="msg">';
	main_pane +='<aside class="content">';
	main_pane +='<input type="text" autofocus="true"/>';
	main_pane +='</aside>';
	main_pane +='</article>';
	main_pane +='</section>';

	return main_pane;
}

function new_chat(id) {
	style = $(".users.active").attr("style");

	chat_pane = '<section class="users pane active" data-chat="'+id+'" style="'+style+'">';
	chat_pane +='<aside class="title">Users</aside>';
	chat_pane +='<aside class="content">'+id+'</aside>';
	chat_pane +='</section>';

	return chat_pane;
}

function resize() {
	ww = $(window).width();
	wh = $(window).height();
}

function panes(pane) {
	pane_size = 0;
	specific = pane == "users" ? '[data-chat="'+$(".main.active").attr("data-chat")+'"]' : "";
	pane = $("."+pane+specific);

	resize();

	if(pane.hasClass("open")) {
		$(".pane").removeClass("open").attr("style","");
		$("nav a").removeClass("active");
	} else {
		pane.addClass("open");
	}

	move = 0;
	pane_num = 0;
	$(".open.pane").each(function(){
		pane_size = pane_size + $(this).outerWidth();
		move = pane_size - $(this).outerWidth();

		$(this).css({
			"-webkit-transform" : "translate3d(-"+move+"px, 0, 0)"
		});

		pane_num++;

	});
	$("nav").css("margin-right", pane_size);

	ratio = (ww-(pane_size+(margin*2))) / ww;
	centerY = (wh*ratio) / 2;

	$(".effect").css({
		"-webkit-transform" : "scale3d("+ratio+","+ratio+",1) translate3d("+margin/ratio+"px, "+margin/ratio+"px, 0)"
	});
}

$(document).ready(function(){

	$(".rooms a").on("click", function(){
		room = $(this).attr("id");

		if($(this).parent().hasClass("active")) {
			$("[data-chat='"+room+"']").addClass("active");
			console.log(room)
		}else{
			$(this).parent().addClass("active")
			$("#wrapper").append(new_room(room));
			$("#wrapper").append(new_chat(room));
		}

		$(".main:not([data-chat='"+room+"'])").removeClass("active");
		$(".users:not([data-chat='"+room+"'])").removeClass("active open");

		$("nav a[data-pane='rooms']").trigger("click");
	});

	$("#sticky").on("click", function(e) {
		$("#wrapper").toggleClass("sticky");
	});

	$("nav a:not(.action)").on("click", function(e) {
		$(this).toggleClass("active");
		$("header").addClass("opac");
		$(".main").addClass("effect");

		panes($(this).attr("data-pane"));

		$.blurjs("reset");
		if(pane_num) {
			$(".main").blurjs({
				customClass: 'blurjs',
				radius: pane_num,
				persist: false
			});

			$(".overlay").show().animate({ opacity: pane_num*.25 });
		} else {
			$(".pane").removeAttr("data-order");
			$("header").removeClass("opac");
			$(".main").attr("style","").removeClass("effect");
			$(".overlay").css("opacity","0");

			setTimeout(function(){
				$(".overlay").hide();
			}, duration);
		}
	});

	$("nav a.action").on("click", function(e) {
		
	});
});
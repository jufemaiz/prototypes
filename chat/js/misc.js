var ww, wh, pane_size, move, pane_num, margin = 32, duration = 333;

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
	chat_pane = '<aside class="content active" data-chat="'+id+'">'+id+'</aside>';

	return chat_pane;
}

function new_tab(id,title) {
	tab = '<li data-chat="'+id+'" class="tab active"><a href="#">'+title+'</a><span class="close_tab">&times;</span></li>';

	return tab;
}

function resize() {
	ww = $(window).width();
	wh = $(window).height();
}

function reset() {
	$("header").removeClass("opac");
	$(".main").attr("style","").removeClass("effect");
	$(".overlay").css("opacity","0");
	$("nav a").removeClass("active");
	$(".pane").removeClass("open").attr("style","");

	setTimeout(function(){
		$(".overlay").hide();
	}, duration);
}

function panes(id) {
	pane_size = 0;
	pane = $("#"+id);

	resize();

	if(pane.hasClass("open")) {
		pane.removeClass("open").attr("style","");
		$("#tool_"+id).removeClass("active");
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

function change_room(o_room, n_room) {
	$("*[data-chat='"+o_room+"']").removeClass("active");
	$("*[data-chat='"+n_room+"']").addClass("active");
}

$(document).ready(function(){

	$("button").on("click", function(e) {
		
	});

	$("#rooms a").on("click", function(){
		n_room = $(this).attr("id");
		n_room_title = $(this).attr("title");
		o_room = $(".main.active").attr("data-chat");

		if($(".tab").length == 0) {
			$("#tool_users").show();
		}

		if(!$(this).parent().hasClass("active")) {
			$("#wrapper").append(new_room(n_room));
			$("#users").append(new_chat(n_room));
			$("#tabs").append(new_tab(n_room,n_room_title));
			$(this).parent().addClass("active");
		}


		change_room(o_room,n_room);

		$("#tool_rooms").trigger("click");
	});

	$("#tabs").on("click", ".tab", function() {
		n_room = $(this).attr("data-chat");
		o_room = $(".main.active").attr("data-chat");
		change_room(o_room,n_room);
	});

	$("#tabs").on("click",".close_tab", function(e) {
		e.stopPropagation();

		closing_room = $(this).parent().attr("data-chat");

		$("*[data-chat='"+closing_room+"']").remove();
		$("#"+closing_room).parent().removeClass("active");

		if($(".tab").length == 0) {
			reset();
			$("#tool_users").hide();
			$("#tool_rooms").trigger("click");
		}

		console.log($(this).closest("li").siblings("li"));
	});

	$("nav a").on("click", function(e) {
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

			$(".overlay").show().animate({ opacity: pane_num*.25 }, duration);
		} else {
			reset();
		}
	});
});
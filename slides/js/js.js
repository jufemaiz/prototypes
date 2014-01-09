var ww,wh,cursor,num = 4,current = 0;

function change_slide() {
}

function get_size() {
	ww = $(window).width();
	wh = $(window).height();
}

$(document).ready(function(){
	get_size();

	var glide = $('.slider').glide({
		autoplay: false,
		arrows: false,
		nav: 'body'
	}).data('api_glide');

	$(".slide").on("mousemove", function(e) {
		cursor = e.pageX;

		$(".slider").removeClass("prev next close");

		if(cursor <= ww*.3333) {
			$(".slider").addClass("prev");
		} else if(cursor >= ww*.6666) {
			$(".slider").addClass("next");
		} else {
			$(".slider").addClass("close");
		}
	}).on("click", function(e) {
		if(cursor <= ww*.3333) {
			glide.prev();
		} else if(cursor >= ww*.6666) {
			glide.next();
		} else {

		}
	});
});
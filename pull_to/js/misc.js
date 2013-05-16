var closed = false;
$(document).ready(function(){
	$('#content').pull_to_refresh({
		refresh: function(){
			$("#hidden_area").animate({
				height: $(window).height()-60,
				opacity: 1
			}, 250);

		}
	});

	setTimeout(function(){
		$("#wrapper").animate({
			top: "60px"
		}, function(){
			$("#wrapper").addClass("ready");
		});
	}, 1000);
});
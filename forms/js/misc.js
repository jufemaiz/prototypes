function check_val(input) {
	$(input).val() != "" ? $(input).addClass("has_value") : $(input).removeClass("has_value");
}

$(document).ready(function(){
	$(".check_val").each(function(){
		check_val(this);
	}).on("keyup click blur focus change paste", function(){
		check_val(this);
	});

	$("input, select, textarea").on("focus",function(e){
		$("body").addClass("fix_fixed");
	}).on("blur", function(e){
		$("body").removeClass("fix_fixed");
	});
});
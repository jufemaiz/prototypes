var dims = [], modes = [], placements = [], scale = 3, room_w, room_h, room_l, system;

function intersection(array1, array2){
	return array1.filter(function (n) { return array2.indexOf(n) !== -1; });
}

function multi_intersection(arrays){
	var result = [],
		i = j = k = 0,
		inter = null;
		for(i = 0; i < arrays.length; i++) {
			for(j = i + 1; j < arrays.length; j++) {
			inter = intersection(arrays[i], arrays[j]);
			for(k = 0; k < inter.length; k++) {
				result.push(inter[k]);
			}
		}
	}

	return uniq(result);
}

function uniq(array){
	var result = [];
	for (var i = 0; i < array.length; i++){
		if (result.indexOf(array[i]) === -1) result.push(array[i]);
	}

	$.each(result, function(i, hz){
		$("#modes tr td").filter(function() {
			return $(this).text() == hz+"hz";
		}).addClass("emphasized");
	});
}

function room_modes(){
	$("#axial_resonance_width").text("");
	$("#axial_resonance_height").text("");
	$("#axial_resonance_length").text("");

	modes = [];
	$.each(dims, function (wall, inches) {
		first_mode = 1130 / (2 * (inches / 12));
		hz = first_mode;
		var new_modes = [];
		for (i = 1; hz < 300 - first_mode; i++) {
			hz = Math.ceil(first_mode * i);
			new_modes.push(hz);

			if(wall == 0) $('<td>'+hz+'hz</td>').appendTo("#axial_resonance_width");
			if(wall == 1) $('<td>'+hz+'hz</td>').appendTo("#axial_resonance_height");
			if(wall == 2) $('<td>'+hz+'hz</td>').appendTo("#axial_resonance_length");
		}
		modes.push(new_modes);
	});

/* 	Now that we have the modes, we need to find the emphasized nodes */
	multi_intersection(modes)
}

function speaker_placement(){
	$(".reflection").remove();

	placements = [];
	$(".placement").each(function(i,point){
		var pos = [+($(this).find("#x").val()), +($(this).find("#z").val())];
		placements.push(pos);
	});

	$.each(placements, function(i){
		ref = $(".placement:eq("+i+")").attr("id");
		wall = $("#"+ref).hasClass("left") ? "left" : "right";

		$.each(placements[i], function(){
			$("#"+ref).css(wall,placements[i][0]*scale).css("top", placements[i][1]*scale);
		});

		var pos = i > 0 ? ((placements[0][1] - placements[i][1]) * placements[0][0]) / (placements[i][0] + placements[0][0]) : 0;
		placements[i].push(pos);

		if(ref != "listener"){
			$('<div id="'+ref+'_ref" class="reflection"></div>').appendTo("#room").css("top", ((placements[0][1] - placements[i][2]))*scale).css(wall,"0");
		}

		if(ref == "c") {
			$('<div id="'+ref+'_ref" class="reflection"></div>').appendTo("#room").css("top", ((placements[0][1] - placements[i][2]))*scale).css(wall,"calc(100% - 10px)");
		}
	});

}

function build_room(){
	$("#room").show().css({width: dims[0]*scale, height:dims[2]*scale});

	speaker_placement();
}

$(document).ready(function(){
	$("#room_dimensions").on("click", function(e){
		room_w = +($("#room_width").val());
		room_h = +($("#room_height").val());
		room_l = +($("#room_length").val());
		dims = [room_w,room_h,room_l];

		system = +($("#system").val());
		room_modes();
		build_room();

		console.log("Modes: ", modes);
		console.log("Dimensions: ", dims);
		console.log("Placements: ", placements);
	});

	$("#room .speaker, #room #listener").on("click", function(){
		$("#room .speaker, #room #listener").not(this).children(".inputs").hide();
		$(this).children(".inputs").show();
	});

	$("#room input").on("change", function(e){
		placements = [];

		speaker_placement();
	});
});
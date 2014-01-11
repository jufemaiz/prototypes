var dims = [], modes = [], placements = [], scale = 3, room_w, room_h, room_l, system;

/* Multi,uniq, and interestion functions by Jason Keene */
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
		id = $(this).attr("id");

		if(id != "center" && id != "listener") {
			x =  +($(this).find("#x").val()) || 24;
		} else {
			x = +($(this).find("#x").val()) || dims[1]/2;
		}
			
		z = id != "listener" ? +($(this).find("#z").val()) || 24 : +($(this).find("#z").val()) || dims[2]*.62;

		y = +($(this).find("#y").val()) || 40;

		var pos = [x,z,y];
		placements.push(pos);
	});

/*
	0 = x
	1 = z
	2 = y
	3 = wall
	4 = ceiling
*/

/* 	(listener depth - speaker depth) * listener wall / speaker wall + listener wall */

	$.each(placements, function(i){
		id = $(".placement:eq("+i+")").attr("id");
		wall = id == "right" ? "right" : "left";

		$.each(placements[i], function(){
			$("#"+id).css(wall,placements[i][0]*scale).css("top", placements[i][1]*scale);
		});

		var wall_reflection = i > 0 ? ((placements[0][1] - placements[i][1]) * placements[0][0]) / (placements[i][0] + placements[0][0]) : 0;
		wall_reflection =  placements[0][1] - wall_reflection;


		var ceiling_reflection = i > 0 ? ((placements[0][1] - placements[i][1]) * (dims[0] - placements[0][2])) / ((dims[0] - placements[i][2]) + (dims[0] - placements[0][2])) : 0;
		ceiling_reflection =  placements[0][1] - ceiling_reflection;

		placements[i].push(wall_reflection);
		placements[i].push(ceiling_reflection);

		if(id != "listener"){
			$('<div id="'+id+'_ref" class="reflection"><div class="inputs"><input type="text" disabled value="'+(placements[i][3])+'" /></div></div>').appendTo("#room").css("top", (placements[i][3])*scale).css(wall,"0");
			$('<div id="'+id+'_ref_ceiling" class="reflection ceiling"><div class="inputs"><input type="text" disabled value="'+(placements[i][4])+'" /></div></div>').appendTo("#room").css("top", (placements[i][4])*scale).css(wall,(placements[i][0])*scale);
		}

		if(id == "center") {
			$('<div id="'+id+'_ref" class="reflection"><div class="inputs"><input type="text" disabled value="'+(placements[i][3])+'" /></div></div>').appendTo("#room").css("top", (placements[i][3])*scale).css(wall,"calc(100% - 10px)");
		}
	});

}

function build_room(){
	$("#room").show().css({width: dims[1]*scale, height:dims[2]*scale});

	speaker_placement();
}

$(document).ready(function(){
	$("#room_dimensions").on("click", function(e){
		room_h = +($("#room_height").val());
		room_w = +($("#room_width").val());
		room_l = +($("#room_length").val());
		dims = [room_h,room_w,room_l];

		system = +($("#system").val());
		room_modes();
		build_room();

		console.log("Modes (h,w,l): ", modes);
		console.log("Dimensions (h,w,l): ", dims);
		console.log("Placements (x,z,y,wall,ceiling): ", placements);
	});

	$("#room").on("click", ".placement, .reflection", function(){
		$("#room .placement, #room .reflection").not(this).children(".inputs").hide();
		$(this).children(".inputs").show();
	});

	$("#room input").on("change", function(e){
		placements = [];

		speaker_placement();
	});
});
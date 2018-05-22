$(function() {

	//initial projectMenu not visible
	$("#projectMenu li").css("display", "none"); 

	//fade in animation for project list
	$("#projectMenu li").each(function(i) {
		var that =$(this);
		setTimeout(function() { $(that).fadeIn(1000); }, (200 * i));
	})

}); 


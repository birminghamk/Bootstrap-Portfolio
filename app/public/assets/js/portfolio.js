$(function() {
	var $projectLi = $("#projectMenu li");
	$projectLi.hide();
	$(".buildSchema").hide().slideDown();

	//fade in animation for project list
	function projectAnimation() {
		$projectLi.hide().each(function(i) {
			$(this).delay(100 * i).fadeIn(5000);
		});
		// console.log("list animation");
	};

	setTimeout(projectAnimation, 700);
});

$(function() {
	var $projectLi = $("#projectMenu li");
	function onPageLoad() {
		$projectLi.hide();
		$(".buildSchema").hide().slideDown();
	}

	onPageLoad();

	//fade in animation for project list
	function projectAnimation() {
		$projectLi.hide().each(function(i) {
			$(this).delay(100 * i).fadeIn(5000);
		});
	};

	setTimeout(projectAnimation, 500);
});

$(function() {
	$('.navbar').hide().slideDown();
	$('.buildSchema').hide().delay(700).slideDown();
	var $projectLi = $("#projectMenu li");
	$projectLi.hide();

	//fade in animation for project list
	function projectAnimation() {
		$projectLi.hide().each(function(i) {
			$(this).delay(500 * i).fadeIn(500);
		});
	};

	setTimeout(projectAnimation, 1000);
});


$(function() {
	var $projectLi = $("#projectMenu li");

	$projectLi.hide();
	$('.navbar').hide().slideDown();
	$('.buildSchema').hide().delay(700).slideDown();

	//fade in animation for project list
	function projectAnimation() {
		$projectLi.hide().each(function(i) {
			$(this).delay(500 * i).fadeIn(500);
		});
	};

	//runs projectAnimation after 1 sec
	setTimeout(projectAnimation, 1000);
});


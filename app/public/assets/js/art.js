$(function() {
	function onPageLoad() {
		$(".colorImages").hide();
	}

	onPageLoad();

	//nav for art images
	function artNav () {
		$("#cocktails").click(function(){
			$(".cocktailIllustration").show();
			$(".colorImages").hide();
		  });

		  $("#colorStudies").click(function(){
			$(".cocktailIllustration").hide();
			$(".colorImages").show();
		  });
	}

	artNav();
});

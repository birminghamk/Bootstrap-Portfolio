$(function() {
	function onPageLoad() {
		$(".colorImages").hide();
		$(".blackandwhite").hide();
	}

	onPageLoad();

	//nav for art images
	function artNav () {
		$("#cocktails").click(function(){
			$(".cocktailIllustration").show();
			$(".colorImages").hide();
			$(".blackandwhite").hide();
		  });

		  $("#colorStudies").click(function(){
			$(".cocktailIllustration").hide();
			$(".colorImages").show();
			$(".blackandwhite").hide();
		  });
		  $("#blackAndwhite").click(function(){
			$(".blackandwhite").show();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();

		  });
	}

	artNav();
});

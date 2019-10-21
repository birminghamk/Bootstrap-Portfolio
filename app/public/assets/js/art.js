$(function() {
	function onPageLoad() {
		$(".colorImages").hide();
		$(".blackandwhite").hide();
		$(".lettering").hide();
	}

	onPageLoad();

	//nav for art images
	function artNav () {
		$("#cocktails").click(function(){
			$(".cocktailIllustration").show();
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
		  });

		  $("#colorStudies").click(function(){
			$(".cocktailIllustration").hide();
			$(".colorImages").show();
			$(".blackandwhite").hide();
			$(".lettering").hide();
		  });
		  $("#blackAndwhite").click(function(){
			$(".blackandwhite").show();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".lettering").hide();

		  });
		  $("#Lettering").click(function(){
			$(".lettering").show();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();

		  });
	}

	artNav();
});

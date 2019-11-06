$(function() {
	function onPageLoad() {
		$(".colorImages").hide();
		$(".blackandwhite").hide();
		$(".lettering").hide();
		$(".cocktailIllustration").fadeIn('slow');
	}

	onPageLoad();

	//nav for art images
	function artNav () {
		$("#cocktails").click(function(){
			$(".cocktailIllustration").fadeIn('slow');
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
		  });

		  $("#colorStudies").click(function(){
			$(".colorImages").fadeIn('slow');
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
		  });
		  $("#blackAndwhite").click(function(){
			$(".blackandwhite").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".lettering").hide();

		  });
		  $("#Lettering").click(function(){
			$(".lettering").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();

		  });
	}

	artNav();
});

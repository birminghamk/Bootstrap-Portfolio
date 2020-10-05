$(function() {

	function onSiteEntry() {
		$(".cocktailIllustration").fadeIn('slow');
		$(".graphic-design").hide();
		$(".watercolor").hide();
		$(".colorImages").hide();
		$(".blackandwhite").hide();
		$(".lettering").hide();
		$(".mixed-media").hide();
		$(".geometric-design").hide();
		$(".web-design").hide();
	}

	onSiteEntry();

	//nav control for art images
	function artNav () {
		$("#cocktails").click(function(){
			$(".cocktailIllustration").fadeIn('slow');
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();
		  });

		  $("#webDesign").click(function(){
			$(".web-design").fadeIn('slow');
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".cocktailIllustration").hide();
		  });

		  $("#graphicDesign").click(function(){
			$(".graphic-design").fadeIn('slow');
			$(".cocktailIllustration").hide();
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".web-design").hide();
		  });

		  $("#colorStudies").click(function(){
			$(".colorImages").fadeIn('slow');
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();
		  });

		  $("#blackAndwhite").click(function(){
			$(".blackandwhite").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();

		  });
		  $("#Lettering").click(function(){
			$(".lettering").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();

		  });
		  $("#mixedMedia").click(function(){
			$(".mixed-media").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();

		  });
		  $("#Watercolor").click(function(){
			$(".watercolor").fadeIn('slow');
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();

		  });
		  $("#geometricDesign").click(function(){
			$(".geometric-design").fadeIn('slow');
			$(".watercolor").hide();
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();

		  });
	}

	artNav();
});

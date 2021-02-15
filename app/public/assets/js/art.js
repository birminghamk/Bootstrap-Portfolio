$(function() {

	function onSiteEntry() {
		$(".main-page").fadeIn('slow');
		$(".graphic-design").hide();
		$(".Illustration").hide();
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
		$("#illustration").click(function(){
			$(".Illustration").fadeIn('slow');
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();
			$(".main-page").hide();
			$(".art-nav").fadeIn('slow');
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
			$(".Illustration").hide();
			$(".main-page").hide();
		  });

		  $("#graphicDesign").click(function(){
			$(".graphic-design").fadeIn('slow');
			$(".Illustration").hide();
			$(".colorImages").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
			$(".web-design").hide();
			$(".main-page").hide();
		  });

		//   $("#colorStudies").click(function(){
		// 	$(".colorImages").fadeIn('slow');
		// 	$(".cocktailIllustration").hide();
		// 	$(".blackandwhite").hide();
		// 	$(".lettering").hide();
		// 	$(".mixed-media").hide();
		// 	$(".watercolor").hide();
		// 	$(".geometric-design").hide();
		// 	$(".graphic-design").hide();
		// 	$(".web-design").hide();
		// 	$(".main-page").hide();
		//   });

		//   $("#blackAndwhite").click(function(){
		// 	$(".blackandwhite").fadeIn('slow');
		// 	$(".colorImages").hide();
		// 	$(".cocktailIllustration").hide();
		// 	$(".lettering").hide();
		// 	$(".mixed-media").hide();
		// 	$(".watercolor").hide();
		// 	$(".geometric-design").hide();
		// 	$(".graphic-design").hide();
		// 	$(".web-design").hide();
			

		//   });
		//   $("#Lettering").click(function(){
		// 	$(".lettering").fadeIn('slow');
		// 	$(".colorImages").hide();
		// 	$(".cocktailIllustration").hide();
		// 	$(".blackandwhite").hide();
		// 	$(".mixed-media").hide();
		// 	$(".watercolor").hide();
		// 	$(".geometric-design").hide();
		// 	$(".graphic-design").hide();
		// 	$(".web-design").hide();

		//   });
		//   $("#mixedMedia").click(function(){
		// 	$(".mixed-media").fadeIn('slow');
		// 	$(".colorImages").hide();
		// 	$(".cocktailIllustration").hide();
		// 	$(".blackandwhite").hide();
		// 	$(".lettering").hide();
		// 	$(".watercolor").hide();
		// 	$(".geometric-design").hide();
		// 	$(".graphic-design").hide();
		// 	$(".web-design").hide();

		//   });
		//   $("#Watercolor").click(function(){
		// 	$(".watercolor").fadeIn('slow');
		// 	$(".mixed-media").hide();
		// 	$(".colorImages").hide();
		// 	$(".cocktailIllustration").hide();
		// 	$(".blackandwhite").hide();
		// 	$(".lettering").hide();
		// 	$(".geometric-design").hide();
		// 	$(".graphic-design").hide();
		// 	$(".web-design").hide();

		//   });
		  $("#geometricDesign").click(function(){
			$(".geometric-design").fadeIn('slow');
			$(".watercolor").hide();
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".Illustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();

		  });
	}

	artNav();

	//click web design button, scroll to top of web design section
	$(".webDesignEntry").click(function() {
		$(".main-page").hide();
		$(".graphic-design").hide();
		$(".web-design").fadeIn('slow');
		$(".art-nav").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#webDesignStart").offset().top
		}, 1000);
	});

	$(".viewGraphicDesign").click(function() {
		$(".main-page").hide();
		$(".web-design").hide();
		$(".graphic-design").fadeIn('slow');
		$(".art-nav").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#GraphicDesignStart").offset().top
		}, 1000);
	});

	$(".viewIllustration").click(function() {
		$(".main-page").hide();
		$(".web-design").hide();
		$(".graphic-design").hide();
		$(".Illustration").fadeIn('slow');
		$(".art-nav").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#IllustrationStart").offset().top
		}, 1000);
	});

	// //click home button, go back to web design section
	// $(".backtoGraphicDesign").click(function() {
	// 	$(".cocktailIllustration").hide();
	// 	$(".cocktailIllustration").hide();
	// 	$(".cocktailIllustration").hide();
	// 	$(".cocktailIllustration").hide();
	// 	$(".graphic-design").fadeIn('slow');
	// 	$(".web-design").hide();
	// 	$([document.documentElement, document.body]).animate({
	// 		scrollTop: $("#toHome").offset().top
	// 	}, 1000);
	// });

	//stop true tea carousel from automatically scrolling
	$('.trueTeaCarousel').carousel({
		interval: false
	  })

});

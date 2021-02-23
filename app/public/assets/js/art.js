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
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();
			$(".main-page").hide();
			$(".aboutSection").hide();
			$(".portfolioSection").fadeIn('slow');
			$(".Illustration").fadeIn('slow');
		  });

		  $("#webDesign").click(function(){
			$(".geometric-design").hide();
			$(".graphic-design").hide();
			$(".Illustration").hide();
			$(".main-page").hide();
			$(".aboutSection").hide();
			$(".portfolioSection").fadeIn('slow');
			$(".web-design").fadeIn('slow');
		  });

		  $("#graphicDesign").click(function(){
			$(".Illustration").hide();
			$(".geometric-design").hide();
			$(".web-design").hide();
			$(".main-page").hide();
			$(".aboutSection").hide();
			$(".portfolioSection").fadeIn('slow');
			$(".graphic-design").fadeIn('slow');
		  });

		  $("#geometricDesign").click(function(){
			$(".Illustration").hide();
			$(".graphic-design").hide();
			$(".web-design").hide();
			$(".main-page").hide();
			$(".aboutSection").hide();
			$(".portfolioSection").fadeIn('slow');
			$(".geometric-design").fadeIn('slow');

		  });
	}

	artNav();

	//click web design button, scroll to top of web design section
	$(".webDesignEntry").click(function() {
		$(".main-page").hide();
		$(".graphic-design").hide();
		$(".geometric-design").hide();
		$(".web-design").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".siteNav").offset().top
		}, 1000);
	});

	$(".viewGraphicDesign").click(function() {
		$(".main-page").hide();
		$(".web-design").hide();
		$(".geometric-design").hide();
		$(".graphic-design").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".siteNav").offset().top
		}, 1000);
	});

	$(".viewIllustration").click(function() {
		$(".main-page").hide();
		$(".web-design").hide();
		$(".graphic-design").hide();
		$(".geometric-design").hide();
		$(".Illustration").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".siteNav").offset().top
		}, 1000);
	});


	$(".viewGeometricDesign").click(function() {
		$(".main-page").hide();
		$(".web-design").hide();
		$(".graphic-design").hide();
		$(".Illustration").hide();
		$(".geometric-design").fadeIn('slow');
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".siteNav").offset().top
		}, 1000);
	});

	//stop true tea carousel from automatically scrolling
	$('.trueTeaCarousel').carousel({
		interval: false
	  })

});

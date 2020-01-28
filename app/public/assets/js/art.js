$(function() {
	//only loads first category of images
	function onPageLoad() {
		$(".cocktailIllustration").fadeIn('slow');
		$(".watercolor").hide();
		$(".colorImages").hide();
		$(".blackandwhite").hide();
		$(".lettering").hide();
		$(".mixed-media").hide();
		$(".geometric-design").hide();
	}

	onPageLoad();

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

		  });

		  $("#colorStudies").click(function(){
			$(".colorImages").fadeIn('slow');
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();
		  });
		  $("#blackAndwhite").click(function(){
			$(".blackandwhite").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".lettering").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();

		  });
		  $("#Lettering").click(function(){
			$(".lettering").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".mixed-media").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();

		  });
		  $("#mixedMedia").click(function(){
			$(".mixed-media").fadeIn('slow');
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".watercolor").hide();
			$(".geometric-design").hide();

		  });
		  $("#Watercolor").click(function(){
			$(".watercolor").fadeIn('slow');
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();
			$(".geometric-design").hide();

		  });
		  $("#geometricDesign").click(function(){
			$(".geometric-design").fadeIn('slow');
			$(".watercolor").hide();
			$(".mixed-media").hide();
			$(".colorImages").hide();
			$(".cocktailIllustration").hide();
			$(".blackandwhite").hide();
			$(".lettering").hide();

		  });
	}

	artNav();

	function artModal() {
		// Get the modal

		$("img").on('click touchstart', function() {
			var modal = document.getElementById("artModal");
			var id = $(this).attr("id");
			var img = document.getElementById(id);
			// Get the image and insert it inside the modal - use its "alt" text as a caption
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			// img.onclick = function() {
			// modal.style.display = "block";
			// modalImg.src = this.src;
			// captionText.innerHTML = this.alt;
			// }
			img.on('click touchend', function()  {
				modal.style.display = "block";
				modalImg.src = this.src;
				captionText.innerHTML = this.alt;
			})
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks on <span> (x), close the modal
			span.on('click touchstart', function() {
			modal.style.display = "none";
			})
		})

	}

	artModal();
});

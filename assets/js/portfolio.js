$(function() {

	// Generate and display the year at the footer
	const year = moment().format('YYYY');

	$("#year").text(year);

	const colorChanger = document.getElementById("color-changer");
	const colors = ["lightblue", "purple", "darkblue", "blue", "green", "lightgreen", "yellow", "orange", "grey"];
	let counter = 0;

	//changes text color of h1 on home page
	function changeColor () {

		if (counter >= colors.length) {
			counter = 0;
		}

		colorChanger.style.color = colors[counter];
		counter++;

	}

	setInterval(changeColor, 3000);

	// Click connect button, modal pops up
	$(".connect").on("click", function() {
		// $(".modal-connect").modal("show");
		const buttonId = $(this).attr('id');
  		$('#modal-container').removeAttr('class').addClass(buttonId);
 		$('body').addClass('modal-active');
	})

	// Click outside modal, exit out
	$('#modal-container').click(function(){
  		$(this).addClass('out');
  		$('body').removeClass('modal-active');
	})


}); 


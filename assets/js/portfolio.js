$(function() {

	// Generate and display the year at the footer
	const year = moment().format('YYYY');

	$("#year").text(year);

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
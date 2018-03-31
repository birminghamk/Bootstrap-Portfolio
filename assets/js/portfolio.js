$(function() {

	// Generate and display the year at the footer
	const year = moment().format('YYYY');

	$("#year").text(year);

	$(".connect").on("click", function() {
		$(".modal-connect").modal("show");
	})


}); //END DOCUMENT READY
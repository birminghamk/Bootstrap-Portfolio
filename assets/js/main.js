$(function() {

	// Generate and display the year at the footer
	var year = moment().format('YYYY');

	$("#year").text(year);

	// Click connect button, modal pops up
	$(".connect").on("click", function() {
		// $(".modal-connect").modal("show");
		var buttonId = $(this).attr('id');
  		$('#modal-container').removeAttr('class').addClass(buttonId);
 		$('body').addClass('modal-active');
	})

	// Click outside modal, exit out
	$('#modal-container').click(function(){
  		$(this).addClass('out');
  		$('body').removeClass('modal-active');
	})

	//click portfolio button, go to portfolio page
	$(".portfolioBtn").on("click", function() {
		window.location = "http://birminghamk.github.io/Portfolio/portfolio.html";
	})

});
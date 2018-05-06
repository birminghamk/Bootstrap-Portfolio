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

	//navicon homepage onclick animation
	$('.navicon').on('click', function (e) {
  		e.preventDefault();
  		$(this).toggleClass('navicon--active');
  		$('.toggle').toggleClass('toggle--active');
	});

	//click portfolio button, go to portfolio page
	$(".portfolioBtn").on("click", function() {
		window.location = "http://birminghamk.github.io/Portfolio/portfolio.html";
	})

	var colorChanger = document.getElementById("color-changer");
	var textcolors = ["lightblue", "purple", "darkblue", "green", "yellow", "orange", "red"];
	var counter = 0;

	//changes text color of github link on bio page
	function changeColor () {

		if (counter >= textcolors.length) {
			counter = 0;
		}

		colorChanger.style.color = textcolors[counter];
		counter++;

	}

	setInterval(changeColor, 5000);

	var colors = new Array(
	  [62,35,255],
	  [60,255,60],
	  [255,35,98],
	  [45,175,230],
	  [255,0,255],
	  [255,128,0]);

	var step = 0;
	//color table indices for: 
	// current color left
	// next color left
	// current color right
	// next color right
	var colorIndices = [0,1,2,3];

	//transition speed
	var gradientSpeed = 0.002;

	function updateGradient()
	{
	  
	  if ( $===undefined ) return;
	  
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb("+r1+","+g1+","+b1+")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb("+r2+","+g2+","+b2+")";

	 $('#gradient').css({
	   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
	    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
	  
	  step += gradientSpeed;
	  if ( step >= 1 )
	  {
	    step %= 1;
	    colorIndices[0] = colorIndices[1];
	    colorIndices[2] = colorIndices[3];
	    
	    //pick two new target color indices
	    //do not pick the same as the current one
	    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	    
	  }
	}

	//changes gradient on home page
	setInterval(updateGradient,10);

	// $("#dropDownMenu li").each(function(i) {
	// 	$(this).delay(100 * i).fadeIn(500);
	// })


}); 


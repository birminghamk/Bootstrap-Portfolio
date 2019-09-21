$(function() {

	var colorChanger = document.getElementById("color-changer");
	var textcolors = ["lightblue", "purple", "darkblue", "pink"];
	var counter = 0;

	//changes text color of github link on bio page
	function changeColor () {
		if (counter >= textcolors.length) {
			counter = 0;
		}
		colorChanger.style.color = textcolors[counter];
		counter++;
	}

	setInterval(changeColor, 3000);

});
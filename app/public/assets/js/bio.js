$(function() {

	var colorChanger = document.getElementById("color-changer");
	var textcolors = ["rgb(226,174,205)", "rgb(188,226,181)", "rgb(154,203,232)"];
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
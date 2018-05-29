//DEPENDENCIES
var path = require("path");

//ROUTING
module.exports = function(app) {

	// Basic route that sends the user to the home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	// Basic route that sends the user to the portfolio page
	app.get("/portfolio", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/portfolio.html"));
	});

	// Basic route that sends the user to the bio page
	app.get("/about-kate", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/bio.html"));
	});

	// Basic route that sends the user to the contact page
	// app.get("/contact", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/contact.html"));
	// });
} 
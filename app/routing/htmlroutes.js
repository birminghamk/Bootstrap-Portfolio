//DEPENDENCIES
var path = require("path");

//ROUTING
module.exports = function(app) {

	// Basic route that sends the user to the home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	// Basic route that sends the user to the art page
	app.get("/art", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/art.html"));
	});

	// Basic route that sends the user to the art page
	app.get("/science", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/science.html"));
	});

	// Basic route that sends the user to the art page
	app.get("/writing", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/writing.html"));
	});

	// Basic route that sends the user to the bio page
	app.get("/about", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/bio.html"));
	});
}
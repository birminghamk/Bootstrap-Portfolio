// Dependencies
// =============================================================
var express = require("express");
var favicon = require("express-favicon");

// Sets up the Express App
// =============================================================

// Tells node that we are creating an "express" server
var app = express();

//tells node where to access favicon
// app.use(favicon(__dirname + '/public/assets/images/favicon.png'));

// Sets an initial port
var PORT = process.env.PORT || 3000;

// Static directory
app.use(express.static(__dirname + '/public'));

require("./routing/htmlRoutes")(app);


//LISTENER

// starts server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================

// Tells node that we are creating an "express" server
var app = express();

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
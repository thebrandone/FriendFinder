// boilerplate
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routing/htmlRoutes")(app);

// Here we introduce HTML routing to serve different HTML files
//require("./app/routes/apiRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
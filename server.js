// Dependencies- series of packages that we use--------

var express = require("express");

// create an express server

var app = express();

// Sets an initial port. We"ll use this later in our listener
//This allows you to get the port from the bound environment variable (using `process.env.PORT`) if it exists,
//so that when your app starts on heroku's machine it will start listening on the appropriate port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

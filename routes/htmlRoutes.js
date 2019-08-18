// Dependencies

var path = require("path"); // we are using path.join()

//html routes-- when server gets a specofic route or url, a call back function sends the html page to the user as a response

var htmlRoutes = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html")); // when user send the rout "/" he will see home.html on the browser
  });

  app.get("/tables", function(req, res) {
    res.sendFile(__dirname, "../public.table.html");
  });

  app.get("/reserve", function(req, res) {
    app.sendFile(__dirname, "../public/reserve.html");
  });
};

module.exports(htmlRoutes);

var tables = [];
var waitList = [];

module.exports = function(app) {
  app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    if (tables.length <= 5) {
      tables.push(newTable);
      return res.json(true); // we set up boolean value here, so we can trigger a defualt message to the user ;;alert in the reserve.html
    } else {
      waitList.push(newTable);
      return res.json(false); // res.json(false) is the response here.
    }
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });
};

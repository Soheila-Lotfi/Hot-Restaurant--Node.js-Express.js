var tables = [];
var waitList = [];

module.exports = function(app) {
  app.post("/api/tables", function(req, res) {
    var newTable = req.body;

    if (tables.length <= 5) {
      tables.push(newTable);
      return res.json(true);
    } else {
      waitList.push(newTable);
      return res.json(false);
    }
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });
};

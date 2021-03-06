var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/api/users/" + req.user.id + "/recipes");
    }
    res.render("signup", {});
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/api/users/" + req.user.id + "/recipes");
    }
    res.render("login", {});
  });

  app.get("/logout", function(req, res) {
    console.log(req);
    res.render("login", {});
  });
  app.get("/recipes", isAuthenticated, function(req, res) {
    console.log(req);
    res.redirect("/api/users/" + req.user.id + "/recipes");
  });
  app.post("/recipes", isAuthenticated, function(req, res) {
    console.log(req);
    res.redirect("/api/users/" + req.user.id + "/recipes");
  });
  app.delete("/recipes", isAuthenticated, function(req, res) {
    console.log(req, res);
    res.render("recipes", {});
  });
  app.get("/search", isAuthenticated, function(req, res) {
    // console.log(res);
    res.render("search", {});
  });
  app.post("/search", isAuthenticated, function(req, res) {
    // console.log(res);
    res.render("search", {});
  });
  app.get("/favorites", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("favorites", {});
  });
  app.get("/results", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("results", {});
  });
  app.get("/profile", isAuthenticated, function(req, res) {
    console.log(req);
    res.render("profile", {});
  });
};

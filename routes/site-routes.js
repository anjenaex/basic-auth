const express    = require("express");
const siteRoutes = express.Router();
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const authRoutes = require('./auth-routes');

siteRoutes.get("/", (req, res, next) => {
  res.render("home");
});

siteRoutes.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});

siteRoutes.get("/secret", (req, res, next) => {
  res.render("secret");
});

module.exports = siteRoutes;

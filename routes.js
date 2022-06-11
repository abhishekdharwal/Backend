const passport = require("passport");
const movieController = require("./controllers/movie-controller");
const userController = require("./controllers/user-controller");
const router = require("express").Router();
var cors = require("cors");
var corsOptions = {
  origin: "https://movie--lib.herokuapp.com/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
router.post(
  "/api/login",
  cors(corsOptions),
  passport.authenticate("local"),
  (req, res) => {
    res.status(200).send("Yes Login is perfect");
  }
);
router.get("/register", cors(corsOptions), (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.post("/api/register", cors(corsOptions), userController.register);
router.post("/api/newlist", cors(corsOptions), movieController.newList);
router.post("/api/addnewlistid", cors(corsOptions), movieController.listAdd);
router.post("/api/updatelist", cors(corsOptions), movieController.updateList);
module.exports = router;

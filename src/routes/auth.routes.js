const { registerValidator } = require("../validators/register.validator");
const { HomeController } = require("../controllers/home.controller");
const { loginValidator } = require("../validators/login.validator");

const router = require("express").Router()

router.post("/register", registerValidator, HomeController.register);
router.post("/login",loginValidator,HomeController.login);

module.exports = router
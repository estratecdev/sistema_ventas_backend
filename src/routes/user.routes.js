const { UserController } = require("../controllers/user.controller")
const { updateUserValidator } = require("../validators/user.validator")

const router = require("express").Router()

router.put("/:id", updateUserValidator, UserController.updateUser)
router.get("/:id",UserController.getUser)
router.delete("/:id",UserController.deleteUser)

module.exports = router
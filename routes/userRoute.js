const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userControllers");


router
  .route("/login")
  .post(userController.Login);

  router
  .route("/registration")
  .post(userController.Registration);

  router
  .route("/forgetPassword")
  .post(userController.ForgetPassword);

  router
  .route("/savePassword")
  .post(userController.SavePassword);

  router
  .route("/getUsersByType")
  .get(userController.GetUsersByType);

module.exports = router;
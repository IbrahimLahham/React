const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userControllers");


router
  .route("/Login")
  .post(userController.Login);

  router
  .route("/Registration")
  .post(userController.Registration);

  router
  .route("/ForgetPassword")
  .post(userController.ForgetPassword);

  router
  .route("/SavePassword")
  .get(userController.SavePassword);

  router
  .route("/GetUsersByType")
  .get(userController.GetUsersByType);

module.exports = router;
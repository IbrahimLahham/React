const express = require("express");
const router = express.Router();
const AdminController = require("./../controllers/adminController");
const verifyCookie = require("../middleware/verifyCookie");

router
.route("/getAllMembers")
.post(AdminController.getAllMembers);

router
.route("/getBlockedMembers")
.post(AdminController.getBlockedMembers);

router
.route("/getActiveMembers")
.post(AdminController.getActiveMembers);

router
.route("/changeStatus")
.post(AdminController.changeStatus);

router
.route("/checkSpam")
.post(AdminController.checkSpam);

router
.route("/allSuggestions")
.post(AdminController.allSuggestions);

router
.route("/notSpam")
.post(AdminController.notSpam);

router
.route("/changeSpam")
.post(AdminController.changeSpam);

module.exports = router;

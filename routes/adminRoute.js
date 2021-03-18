const express = require("express");
const router = express.Router();
const AdminController = require("./../controllers/adminController");
const verifyAdmin = require("../middleware/verifyAdmin");

router
.route("/getAllMembers")
.get(verifyAdmin, AdminController.getAllMembers);

router
.route("/getBlockedMembers")
.get(verifyAdmin, AdminController.getBlockedMembers);

router
.route("/getActiveMembers")
.get(verifyAdmin, AdminController.getActiveMembers);

router
.route("/changeStatus")
.post(verifyAdmin, AdminController.changeStatus);

router
.route("/checkSpam")
.post(verifyAdmin, AdminController.checkSpam);

router
.route("/allSuggestions")
.post(verifyAdmin, AdminController.allSuggestions);

router
.route("/notSpam")
.post(verifyAdmin, AdminController.notSpam);

router
.route("/changeSpam")
.post(verifyAdmin, AdminController.changeSpam);

router
.route("/addMember")
.post(verifyAdmin, AdminController.addMember);

module.exports = router;

const express = require("express");
const router = express.Router();
const parliamentaryToolsController = require("../controllers/parliamentaryToolsController");

router
    .route("/")
    .get(parliamentaryToolsController.getAllParliamentaryTools);

router
    .route("/creat")
    .post(parliamentaryToolsController.createParliamentaryTool);



module.exports = router;

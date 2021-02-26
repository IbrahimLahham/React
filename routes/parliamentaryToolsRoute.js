const express = require("express");
const router = express.Router();
const parliamentaryToolsController = require("../controllers/parliamentaryToolsController");

router
    .route("/")
    .get(parliamentaryToolsController.getAllParliamentaryTools);



module.exports = router;

const express = require("express");
const router = express.Router();
const SuggestionsController = require("./../controllers/SuggestionsController");
const verifyCookie = require("../middleware/verifyCookie");
const verifyMK = require("../middleware/verifyMK");
const verifyCitizen = require("../middleware/verifyCookie");



router
  .route("/byKnessetMemberValidate")
  .get(verifyMK,verifyCookie,SuggestionsController.getSuggestionsByKnessetMember);

router
  .route("/byUserSuggest")
  .get(verifyCitizen,verifyCookie,SuggestionsController.getSuggestionsByUserSuggest);

router
.route("/createSuggestion")
.post(verifyCitizen,verifyCookie,SuggestionsController.createSuggestions);

router
  .route("/updateSuggestion")
  .patch(verifyMK,verifyCookie,SuggestionsController.updateSuggestion);

  router
  .route("/reject-adopt")
  .post(verifyMK,verifyCookie,SuggestionsController.rejectOrAdoptSuggestion);

router
  .route("/spamSuggestion")
  .post(verifyMK,verifyCookie,SuggestionsController.spamSuggestion);

module.exports = router;

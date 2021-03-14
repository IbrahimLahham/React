const express = require("express");
const router = express.Router();
const SuggestionsController = require("./../controllers/SuggestionsController");
const verifyCookie = require("../middleware/verifyCookie");

router
  .route("/byKnessetMemberValidate")
  .get(verifyCookie,SuggestionsController.getSuggestionsByKnessetMember);

router
  .route("/byUserSuggest")
  .get(verifyCookie,SuggestionsController.getSuggestionsByUserSuggest);

router
.route("/createSuggestion")
.post(verifyCookie,SuggestionsController.createSuggestions);

router
  .route("/updateSuggestion")
  .patch(verifyCookie,SuggestionsController.createSuggestions);

module.exports = router;

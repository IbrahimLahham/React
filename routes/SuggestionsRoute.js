const express = require("express");
const router = express.Router();
const SuggestionsController = require("./../controllers/SuggestionsController");

router
    .route("/byKnessetMemberValidate")
    .get(SuggestionsController.getSuggestionsByKnessetMember);


router
    .route("/byUserSuggest")
    .get(SuggestionsController.getSuggestionsByUserSuggest);


router
    .route("/byParliamentaryTool")
    .get(SuggestionsController.getSuggestionsParliamentaryTool);


router
    .route("/byDate")
    .get(SuggestionsController.getSuggestionsByDate);


router
    .route("/byStatus")
    .get(SuggestionsController.getSuggestionsByStatus);


router
    .route("/all")
    .get(SuggestionsController.getAllSuggestions);

    router
    .route("/createSuggestions")
    .post(SuggestionsController.createSuggestions);

module.exports = router;

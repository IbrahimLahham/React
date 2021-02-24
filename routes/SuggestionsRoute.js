const express = require("express");
const router = express.Router();
const SuggestionsController = require("./../controllers/SuggestionsController");

router
    .route("/byKnessetMemberValidate")
    .get(booksController.getSuggestionsByKnessetMember);


router
    .route("/byUserSuggest")
    .get(booksController.getSuggestionsByUserSuggest);


router
    .route("/byParliamentaryTool")
    .get(booksController.getSuggestionsParliamentaryTool);


router
    .route("/byDate")
    .get(booksController.getSuggestionsByDate);


router
    .route("/byStatus")
    .get(booksController.getSuggestionsByStatus);


router
    .route("/all")
    .get(booksController.getAllSuggestions);



module.exports = router;

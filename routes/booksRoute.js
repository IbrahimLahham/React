const express = require("express");
const router = express.Router();
const booksController = require("./../controllers/booksControllers");

router
  .route("/")
  .get(booksController.getBooks)
  .post(booksController.createBook);
router
  .route("/:name")
  .get(booksController.getBookByNameOrAuthor)
  .patch(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = router;

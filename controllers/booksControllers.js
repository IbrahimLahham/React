const Book = require("../schema/Book");

// handlers
exports.getBooks = async (req, res) => {
  try {
    Book.find({}, function (err, books) {
      res.send({ success: true, books });

      console.log("all the books :", books);
    });
  } catch (error) {
    console.log("error", error);
    res.send({ success: false, msg: error.message });
  }
};

exports.getBookByNameOrAuthor = async (req, res) => {
  const { name } = req.params;
  const regex = new RegExp(name, "i"); // i for case insensitive

  var criteria = {
    $or: [{ name: { $regex: regex } }, { author: { $regex: regex } }],
  };

  const book = await Book.find(criteria);

  if (book === null) {
    res.send({ success: false, message: "couldn't find such a book" });
  } else {
    res.send({ books: book });
  }
};

exports.createBook = (req, res) => {
  console.log("body", req.body);
  try {
    let newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      releaseDate: req.body.releaseDate,
    });
    newBook.save(function (err, addedBook) {
      if (err) {
        console.error(err);
        res.status(500).json({
          success: false,
          message: "we faced a problem try again.",
          error: err.message,
        });
      } else {
        console.log("has been added to the db successfully ...", addedBook);
        res.status(201).json({
          success: true,
          message: "the book has been added to the db successfully ...",
          addedBook: { addedBook: addedBook.name },
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
exports.updateBook = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
exports.deleteBook = async (req, res) => {
  const { name } = req.params;
  let id = name;

  // Book.remove({ _id: id }, function (err) {
  //        if (err) return handleError(err);
  //        // deleted at most one tank document
  //      });
  try {
    const book = await Book.deleteOne({ _id: id });
    if (book === null) {
      res.send({ success: false, message: "couldn't find such a book" });
    } else {
      res.send({
        success: true,
        message: "the book has been deleted sucssefuly",
        books: book,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: error.message,
    });
  }
};

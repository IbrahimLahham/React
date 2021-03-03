const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SuggestionsRouter = require("./routes/SuggestionsRoute");
const parliamentaryToolsRouter = require("./routes/parliamentaryToolsRoute");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

var cookieParser = require("cookie-parser");

app.use(express.static("client/build"));

// MiddleWares
app.use(express.json());
app.use(cookieParser());

//connecting to the database
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

//routes
app.use("/suggestion", SuggestionsRouter);
app.use("/parliamentaryTools", parliamentaryToolsRouter);
app.use("/user", userRouter);

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

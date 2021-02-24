const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SuggestionsRouter = require("./routes/SuggestionsRoute");
const parliamentaryToolsRouter = require("./routes/parliamentaryToolsRoute");


var cookieParser = require("cookie-parser");

app.use(express.static("client/build"));

// MiddleWares
app.use(express.json());
app.use(cookieParser());




//connecting to the database
mongoose.connect(
    "mongodb+srv://hosen:yPDENenci6FWVa4h@first-cluster.s9zoz.mongodb.net/books",
    { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("we are connected to DB");
});




//routes
app.use("/Suggestion", SuggestionsRouter);
app.use("/parliamentaryTools", parliamentaryToolsRouter);




// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => `Server running on port ${port} 🔥`);

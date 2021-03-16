const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SuggestionsRouter = require("./routes/SuggestionsRoute");
const parliamentaryToolsRouter = require("./routes/parliamentaryToolsRoute");
const userRouter = require("./routes/userRoute");
const adminRouter = require('./routes/adminRoute');
var cookieParser = require("cookie-parser");
var admin = require('firebase-admin');
const serviceAccount = require('./open-knesset-firebase-adminsdk-2sux2-cec40c904b.json');
require("dotenv").config();

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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firebase_db = admin.firestore();

const doc = firebase_db.collection('users').doc('alovelace');

  doc.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});


//routes
app.use("/suggestion", SuggestionsRouter);
app.use("/parliamentaryTools", parliamentaryToolsRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);

// Server run
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

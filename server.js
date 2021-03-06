const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SuggestionsRouter = require("./routes/SuggestionsRoute");
const parliamentaryToolsRouter = require("./routes/parliamentaryToolsRoute");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

const nodemailer = require('nodemailer');

var cookieParser = require("cookie-parser");

app.use(express.static("client/build"));
// MiddleWares
app.use(express.json());
app.use(cookieParser());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  }
});

app.post('/send-email', (req, res) => {
  const { from, to, subject, text } = req.body;
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text
  };

 transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      res.send('Error occurs');
    }
    else {
      res.send(`email sent to ${to} sucessfuly`);
    }
  });
})

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

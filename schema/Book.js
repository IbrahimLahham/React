const mongoose = require("mongoose");

// const BookSchema = new mongoose.Schema({
//   name: String,
//   author: String,
//   releaseDate: { type: Date, default: Date.now },
// });

const ToolSchema = new mongoose.Schema({
  type: String,
  title: String,
  subTitle: String,
  term: String,
  language: String
});
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  company: String,
  type: String,
  active: { type: Boolean, default: true },
  suggestions: [SuggestionSchema],
  language :String
});
const SuggestionSchema = new mongoose.Schema({
  subject: String,
  date: { type: Date, default: Date.now },
  description: String,
  status: [SuggestionStatusSchema],
  knessetMembers: [UserSchema],
  toolType: ToolSchema,
  submittedBy: UserSchema,
  question: String,
  governmentOffice: String,
  files: [Buffer],
  additionalQuestionAfterMembersReply: String,
  
  history 
});


const SuggestionStatusSchema = new mongoose.Schema({
  status:String,
  date: { type: Date, default: Date.now },
  

});


//
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;

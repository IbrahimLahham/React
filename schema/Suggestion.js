const mongoose = require("mongoose");
const User = require("./user").schema;
const Tool = require("./Tool").schema;
const SuggestionStatus = require("./SuggestionStatus").schema;

const SuggestionSchema = new mongoose.Schema({
  subject: String,
  date: { type: Date, default: Date.now },
  description: String,
  status: [SuggestionStatus],
  preferredKnessetMembers: [User],
  knessetMembersWhoRejected: [User],
  whoIsWorkingOnIt: User,
  toolType: Tool,
  submittedBy: User,
  question: String,
  governmentOffice: String,
  files: [Buffer],
  additionalQuestionAfterMembersReply: String,
  // history
});
const Suggestion = mongoose.model("Suggestion", SuggestionSchema);
module.exports = Suggestion;

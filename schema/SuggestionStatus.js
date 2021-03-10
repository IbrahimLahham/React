const mongoose = require("mongoose");

const SuggestionStatusSchema = new mongoose.Schema({
  status: String,
  date: { type: Date, default: Date.now },
});
const SuggestionStatus = mongoose.model(
  "SuggestionStatus",
  SuggestionStatusSchema
);
module.exports = SuggestionStatus;

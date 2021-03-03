const mongoose = require("mongoose");

const User = require("./user");
const Tool = require("./Tool");


const SuggestionSchema = new mongoose.Schema({
    subject: String,
    date: { type: Date, default: Date.now },
    description: String,
    status: [SuggestionStatus],
    knessetMembers: [User],
    activeKnesset: User,
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



const SuggestionStatusSchema = new mongoose.Schema({
    status: String,
    date: { type: Date, default: Date.now },
});
const SuggestionStatus = mongoose.model("SuggestionStatus", SuggestionStatusSchema);
module.exports = SuggestionStatus;
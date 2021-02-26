const mongoose = require("mongoose");

const SuggestionSchema = require("./SuggestionSchema.js");

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
    language: String
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
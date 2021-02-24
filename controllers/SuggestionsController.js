const Book = require("../schema/Book");

// handlers

exports.getSuggestionsByKnessetMember = async (req, res) => {

    console.log("getSuggestionsByKnessetMember");
    res.send([suggestion, suggestion, suggestion]);
};


exports.getSuggestionsByUserSuggest = async (req, res) => {

    console.log("getSuggestionsByUserSuggest");
    res.send([suggestion, suggestion, suggestion]);
};


exports.getSuggestionsParliamentaryTool = async (req, res) => {

    console.log("getSuggestionsParliamentaryTool");
    res.send([suggestion, suggestion, suggestion]);
};


exports.getSuggestionsByDate = async (req, res) => {

    console.log("getSuggestionsByDate");
    res.send([suggestion, suggestion, suggestion]);
};


exports.getSuggestionsByStatus = async (req, res) => {

    console.log("getSuggestionsByStatus");
    res.send([suggestion, suggestion, suggestion]);
};


exports.getAllSuggestions = async (req, res) => {

    console.log("getAllSuggestions");
    res.send([suggestion, suggestion, suggestion]);
};




const user = {
    email: "email@gmail.com",
    password: "password123",
    firstName: "moshe",
    lastName: "dayan",
    phone: "050111111111",
    company: "company name",
    type: "ezrah",
    active: true,
    suggestions: null,
    language: "Hebrow"
}

const knessetMember = {
    email: "knesset@gmail.com",
    password: "password123",
    firstName: "yossi",
    lastName: "grenbirg",
    phone: "050222222222",
    company: "company name",
    type: "knessetMember",
    active: true,
    suggestions: null,
    language: "Hebrow"
}


const tool = {
    type: "tool type",
    title: "tool title",
    subTitle: "tool subTitle",
    term: "this is the tool term",
    language: "Hebrow"
}

const suggestion = {
    subject: "suggestion subject",
    date: Date.now,
    description: "suggestion description",
    status: { status: "open", date: Date.now },
    knessetMembers: [knessetMember, knessetMember],
    toolType: tool,
    submittedBy: user,
    question: "suggestion question",
    governmentOffice: "suggestion governmentOffice",
    files: null,
    additionalQuestionAfterMembersReply: "suggestion additionalQuestionAfterMembersReply",
};
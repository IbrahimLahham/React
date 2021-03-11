// handlers
const Suggestion = require("../schema/Suggestion");
const user = require("../schema/user");
const userTest = require("../schema/userTest");

exports.getSuggestionsByKnessetMember = async (req, res) => {
  console.log("getSuggestionsByKnessetMember");
  const { email = "" } = req.body;
  try {
    const suggestionKnessetMemberCanSee = await Suggestion.find({
      $or: [
        { "whoIsWorkingOnIt.email": email },
        {
          $and: [
            { $or: [{ "whoIsWorkingOnIt.email": null }] },
            {
              $or: [
                {
                  "preferredKnessetMembers.email": { $in: [email] },
                },
                {
                  preferredKnessetMembers: {
                    $size: 0,
                  },
                },
              ],
            },
            {
              $or: [{ "knessetMembersWhoRejected.email": { $nin: [email] } }],
            },
          ],
        },
      ],
    });
    console.log(
      "suggestionKnessetMemberCanSee ----g>>>",
      suggestionKnessetMemberCanSee
    );
    res.send({ suggestions: suggestionKnessetMemberCanSee, success: true });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message:
        "getting the appropriate suggestion from the DB Failed! try again" +
        error,
    });
  }
};

exports.getSuggestionsByUserSuggest = async (req, res) => {
  const { email } = req.body;
  try {
    const suggestionKnessetMemberCanSee = await Suggestion.find({
      "submittedBy.email": email,
    });
    console.log("getSuggestionsByUserSuggest", suggestionKnessetMemberCanSee);
    res.send({ suggestion: suggestionKnessetMemberCanSee });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message:
        "getting the appropriate suggestion from the DB Failed! try again" +
        error,
    });
  }
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

// add new suggestion
exports.createSuggestions = async (req, res) => {
  let {
    subject,
    description,
    preferredKnessetMembers = [],
    toolType,
    submittedBy,
    question,
    governmentOffice,
    files = [],
    knessetMembersWhoRejected = [{ email: "1" }],
  } = req.body;

  try {
    let obj = {};
    let temp = [];
    for (const userDetails of preferredKnessetMembers) {
      obj["email"] = userDetails;
      temp.push(obj);
      obj = {};
    }
    preferredKnessetMembers = temp;
    console.log("preferredKnessetMembers", preferredKnessetMembers);
    const suggestionToAdd = new Suggestion({
      subject: subject,
      description: description,
      preferredKnessetMembers: preferredKnessetMembers,
      toolType: { title: toolType },
      submittedBy: { email: submittedBy },
      question: question,
      governmentOffice: governmentOffice,
      files: files,
      status: { status: "open" },
      knessetMembersWhoRejected: knessetMembersWhoRejected,
    });
    console.log("-->", suggestionToAdd);
    suggestionToAdd.save().then(() => {
      console.log("the suggestion has been saved in th DB successfully");
      console.log("created Suggestion", suggestionToAdd);
      res.send({
        success: true,
        createdSuggestion: req.body,
        message: "the suggestion has been saved in th DB successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "adding the suggestion to the DB Failed! try again" + error,
    });
  }
};

const user1 = {
  email: "email@gmail.com",
  password: "password123",
  firstName: "moshe",
  lastName: "dayan",
  phone: "050111111111",
  company: "company name",
  type: "ezrah",
  active: true,
  suggestions: null,
  language: "Hebrew",
};

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
  language: "Hebrew",
};

const tool = {
  type: "tool type",
  title: "tool title",
  subTitle: "tool subTitle",
  term: "this is the tool term",
  language: "Hebrew",
};

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


const suggestion = {
    subject: "suggestion subject",
    description: "suggestion description",
    knessetMembers: [knessetMember, {emsil:'knset member email' ,firstName:'firstName',lastName:'lastName'} ],
    toolType: tool,
    submittedBy:  {emsil:'knset member email' ,firstName:'firstName',lastName:'lastName'},
    question: "suggestion question",
    governmentOffice: "suggestion governmentOffice",
    files: null,
};
const Suggestion = require("../schema/Suggestion");

exports.getSuggestionsByKnessetMember = async (req, res) => {
  const { email = "" } = req.body;
  console.log("email", email);
  email = "preferredKnessetMembers1";
  try {
    Promise.all([
      Suggestion.find({ "whoIsWorkingOnIt.email": email }),
      Suggestion.find({
        $and: [
          { "whoIsWorkingOnIt.email": null },
          {
            "preferredKnessetMembers.email": { $in: [email] },
          },
        ],
      }),
      Suggestion.find({
        $and: [
          { $or: [{ "whoIsWorkingOnIt.email": null }] },
          {
            $or: [{ "knessetMembersWhoRejected.email": { $nin: [email] } }],
          },
          {
            preferredKnessetMembers: {
              $size: 0,
            },
          },
        ],
      }),
    ])
      .then((results) => {
        //results return an array
        const [
          newSuggestions,
          adoptedSuggestions,
          newGeneralSuggestions,
        ] = results;

        console.log("newSuggestions", newSuggestions);
        console.log("adoptedSuggestions", adoptedSuggestions);
        console.log("newGeneralSuggestions", newGeneralSuggestions);
        console.log("results", results);

        res.send({
          newSuggestions: newSuggestions,
          adoptedSuggestions: adoptedSuggestions,
          newGeneralSuggestions: newGeneralSuggestions,
          success: true,
        });
      })
      .catch((err) => {
        console.error("Something went wrong", err);
        res.send({
          success: false,
          message:
            "getting the appropriate suggestion from the DB Failed! try again , " +
            error,
        });
      });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message:
        "getting the appropriate suggestion from the DB Failed! try again , " +
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
  } = req.body;

  try {
    let obj = {};
    let temp = [];
    for (const userDetails of preferredKnessetMembers) {
      obj["email"] = userDetails.email;
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

exports.updateSuggestion = async (req, res) => {
  console.log("getAllSuggestions");
  let { updateRequestType = "" } = req.body;
  if (updateRequestType == "reject-adopt") {
    var query = { username: req.user.username };
    req.newData.username = req.user.username;

    MyModel.findOneAndUpdate(
      query,
      req.newData,
      { upsert: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("Succesfully saved.");
      }
    );
  } else if (updateRequestType == "update-status") {
  } else {
    res.send({
      success: false,
      message:
        'the update request is invalid it should be one of these : ["reject-adopt" || "update-status"] ',
    });
  }
  switch (updateRequestType) {
    case "reject-adopt":
      break;

    default:
      break;
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

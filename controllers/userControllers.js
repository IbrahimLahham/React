// const user= require("../schema/user");


// handlers
exports.Login = async (req, res) => {
  // const {email, password} = req.body;
  console.log("Login");
  res.send({ user: user.type, ok: true });

};


exports.Registration = (req, res) => {
  console.log("Registration");
  const { firstName, lastName, email, company, phone } = req.body;
  res.send({ user: user });

};

exports.ForgetPassword = async (req, res) => {
  console.log("ForgetPassword");
  res.send({ user: user.email, ok: true });

};

exports.SavePassword = async (req, res) => {
  console.log("SavePassword");
  res.send({ user: user });

};

exports.GetUsersByType = async (req, res) => {
  console.log("GetUsersByType");
  res.send([user, user, user]);

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

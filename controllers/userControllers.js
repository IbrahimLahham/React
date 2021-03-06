const user= require("../schema/user");

// handlers
exports.Login = async (req, res) => {
  const {email, password} = req.body;
  console.log(email, password)

  console.log("Login");
  
  const userToFind = await user.findOne({ email });
  if (userToFind === null) {
      res.send({ok: false , message: 'Login Failed'})
  } else {

      if(userToFind.password == password){
        res.send({user: userToFind.type , ok: true , message: 'The User Is Logged In'})
      }else{
        res.send({ok: false , message: 'Login Failed'})
      }
  }

};


exports.Registration = async (req, res) => {

  console.log("Registration");

  const { firstName, lastName, email, company, phone, type, active, language } = req.body;
  console.log(firstName, lastName, email, company, phone, type, active, language)

  const searchUser = await user.findOne({ email });

  if (searchUser === null) {
  const userToAdd = new user({firstName, lastName, email, company, phone, type, active, language});
  userToAdd.save().then(()=>{console.log('user saved')})

  res.send({user: userToAdd.type , ok: true , message: 'The User Is Registered'});
  }else{
    res.send({ ok: false , message: 'The User Is Already Exist'});
  }
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

  const {type} = req.body;
  console.log(type)

  const userToFind = await user.findAll({ type });
  res.send([user, user, user]);

};


// const user = {
  // email: "email@gmail.com",
  // password: "password123",
  // firstName: "moshe",
  // lastName: "dayan",
  // phone: "050111111111",
  // company: "company name",
  // type: "ezrah",
  // active: true,
  // suggestions: null,
  // language: "Hebrow"
// }

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

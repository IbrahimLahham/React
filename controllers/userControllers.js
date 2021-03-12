const user= require("../schema/user");
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const userTest= require("../schema/userTest");

// handlers
exports.Login = async (req, res) => {
  const {email, password} = req.body;

  console.log("Login");
  
  const userToFind = await user.findOne({ email });

  if (userToFind === null) {
      res.send({ok: false , message: 'Login Failed'})
  } else {

      const vaildPass = await bcrypt.compare(password, userToFind.password);
      if(vaildPass){

        const token = jwt.sign({ role: userToFind.type ,email: userToFind.email }, process.env.TOKEN_SECRET);
        res.cookie('cookie', token, { maxAge: 900000, httpOnly: true });
        res.send({ role: userToFind.type ,ok: true , message: 'The User Is Logged In'});

      }else{
        res.send({ok: false , message: 'Login Failed'})
      }
  }

};


exports.Registration = async (req, res) => {

  console.log("Registration");

  const { firstName, lastName, email, password, company, phone, type, active, language } = req.body;

  const searchUser = await user.findOne({ email });
  
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password , salt);

  if (searchUser === null) {
  const userToAdd = new user({
    firstName:firstName,
    lastName:lastName,
    email:email,
    password: hashPassword,
    company:company, 
    phone:phone, 
    type:type, 
    active:active, 
    language:language
  });
  userToAdd.save().then(()=>{console.log('user saved')})

  res.send({user: userToAdd.email , ok: true , message: 'The User Is Registered'});
  }else{
    res.send({ ok: false , message: 'The User Is Already Exist'});
  }
};

exports.ForgetPassword = async (req, res) => {
  console.log("ForgetPassword");
  const { from, to, subject, text } = req.body;
  
  const userToCheck = await user.findOne({ email: to });

  const randomPassword = Math.random().toString(36).slice(-8);
  const salt = await bcrypt.genSalt(10);
  const hashPassword =  await bcrypt.hash(randomPassword , salt);

  if(!(userToCheck === null)){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    }
  });
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: ``
  };
 transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      res.send('Error occurs');
    }
    else {
    
        user.updateOne({ email: userToCheck.email  }, { password: hashPassword }, function(
          err,
          result
          ) {
          if (err) {
            res.send(err);
          } else {
            res.send(`email sent to ${to} sucessfuly`);
          }
        });
    }
  });
  // const token = jwt.sign({ user: to }, process.env.TOKEN_SECRET);
  // res.send({ token: token, ok: true });
}else{
  res.send({ ok: false , message: "Invalid Email " });
}
};


exports.SavePassword = async (req, res) => {
  console.log("SavePassword");
  const {token, password} = req.body;

  const users = await user.find({});
  // users.forEach(user => { 
  //   const email =  bcrypt.compare(user, user.email);
  // });
  res.send({ token: token, ok: true });

//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(password , salt);

};

exports.GetUsersByType = async (req, res) => {
  console.log("GetUsersByType");

  const {type} = req.body;

  const userToFind = await user.find({ type });
  res.send({users:userToFind});

};

exports.DeleteCookie = async (req, res) => {
  console.log("DeleteCookie");

  res.clearCookie('cookie');
  res.send({ok: true});
  

};

exports.CheckConnection = async (req, res) => {
  console.log("CheckConnection");
  const flag = req.cookies.cookie !== undefined;
  res.send({ok: true, cookie:flag});
};

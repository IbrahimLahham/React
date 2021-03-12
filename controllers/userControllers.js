const user = require("../schema/user");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login");

  const userToFind = await user.findOne({ email });

  if (userToFind === null) {
    res.send({ ok: false, message: "Login Failed" });
  } else {
    const vaildPass = await bcrypt.compare(password, userToFind.password);
    if (vaildPass) {
      const token = jwt.sign(
        { role: userToFind.type, email: userToFind.email },
        process.env.TOKEN_SECRET
      );
      res.cookie("cookie", token, { maxAge: 900000, httpOnly: true });
      res.send({
        role: userToFind.type,
        ok: true,
        message: "The User Is Logged In",
      });
    } else {
      res.send({ ok: false, message: "Login Failed" });
    }
  }
};

exports.Registration = async (req, res) => {
  console.log("Registration");

  const {
    firstName,
    lastName,
    email,
    company,
    phone,
    type,
    active,
    language,
  } = req.body;

  const searchUser = await user.findOne({ email });

  const randomPassword = Math.random().toString(36).slice(-8);
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(randomPassword, salt);

  if (searchUser === null) {
    const userToAdd = new user({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      company: company,
      phone: phone,
      type: type,
      active: active,
      language: language,
    });
    userToAdd.save().then(() => {
      console.log("user saved");
    });
    
    const token = jwt.sign(
      {email: email },
      process.env.TOKEN_SECRET
    );
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: from,
      to: to,
      subject: "welcome to knesset website",
      text: `your current password is: ${randomPassword} \n link to change your password: http://localhost:3000/resetPassword?token=${token}
      `,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        res.send("Error occurs");
      } else {
        res.send({
          user: userToAdd.email,
          ok: true,
          message: `email sent to ${to} sucessfuly`,
        });
      }
    });
  } else {
    res.send({ ok: false, message: "The User Is Already Exist" });
  }
};

exports.ForgetPassword = async (req, res) => {
  console.log("ForgetPassword");
  const { from, to, subject, text } = req.body;

  const userToCheck = await user.findOne({ email: to });

  if (!(userToCheck === null)) {
    const token = jwt.sign(
      {email: userToCheck.email },
      process.env.TOKEN_SECRET
    );
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: from,
      to: to,
      subject: "reset your password",
      text: `link to change your password: http://localhost:3000/resetPassword?token=${token}
      `,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
        res.send("Error occurs");
      } else {
        res.send(`email sent to ${to} sucessfuly`);
      }
    });
  } else {
    res.send({ ok: false, message: "Invalid Email " });
  }
};

exports.SavePassword = async (req, res) => {
  console.log("SavePassword");
  const { password } = req.body;
  const { token } = req.query;
 
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
      if (err) {
        console.log(err);
        // res.send(err);
      }
      else {
        user.updateOne(
          { email: data.email },
          { password: hashPassword },
          function (err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(`password changed sucessfuly for ${data.email} `);
            }
          }
        );
      }
    })
  }
  catch(e){
    res.send(e);
  }

  // const users = await user.find({});
  // users.forEach(user => {
  //   const email =  bcrypt.compare(user, user.email);
  // });
 
  // const email =  bcrypt.compare(user, user.email);
  //   const salt = await bcrypt.genSalt(10);
  //   const hashPassword = await bcrypt.hash(password , salt);
};

exports.GetUsersByType = async (req, res) => {
  console.log("GetUsersByType");

  const { type } = req.body;

  const userToFind = await user.find({ type });
  res.send({ users: userToFind });
};

exports.DeleteCookie = async (req, res) => {
  console.log("DeleteCookie");

  res.clearCookie("cookie");
  res.send({ ok: true });
};

exports.CheckConnection = async (req, res) => {
  console.log("CheckConnection");
  const flag = req.cookies.cookie !== undefined;
  res.send({ok: true, cookie:flag});
};

exports.getAllKnessetMembers = async (req, res) => {
  console.log("getAllKnessetMembers");
  
  const users = user.find({ type : "knessetMember" }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
  console.log(users);
  res.send({ok: true, users: users});
};

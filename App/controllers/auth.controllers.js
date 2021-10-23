const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Course = require("../models/user.course");

require("dotenv").config();

const handleErrors = (err) => {
  console.log(err);
  console.log(err.message, err.code);
  let errors = {
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    avatar: "",
    updates: "",
  };

  // incorrect email
  if (err.message === "incorrect email") {
    errors.email = "email does't exists";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "incorrect password";
  }

  // invalid updates
  if (err.message === "invalid updates") {
    errors.updates = "invalid updates";
  }

  // avatar upload error
  if (err.message === "invalid avatar") {
    errors.avatar = "Please upload jpg, jpeg or png image format file";
  }

  // user does't exists
  if (err.message === "user does not exists") {
  }

  // duplicates error code
  if (err.code === 11000) {
    console.log(err);
    if (err.keyPattern.email) {
      errors.email = "this email is already registered";
    }
    if (err.keyPattern.username) {
      errors.username = "this username is already exists, try different one";
    }
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  console.log(errors);
  return errors;
};

module.exports = { handleErrors };

module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.signin_get = (req, res) => {
  res.render("signin");
};

// Creating a new user
module.exports.signup_post = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, { 
      httpOnly: true, 
      maxAge: process.env.maxAge * 1000 
    });

    await Course.find()
      .then(async (lessons) => {
        for (const lesson of lessons) {
          const less = await lesson;
          await user.courses.push(less);
          await user.save();
        }
      })
      .catch((err) => console.log(err));

    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.signin_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, { 
      httpOnly: true, 
      maxAge: process.env.maxAge * 1000 
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

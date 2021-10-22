const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Course = require("../models/user.course");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exixts & is verified
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/signin");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/signin");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    await jwt.verify(
      token,
      process.env.JWT_SECRET,
      async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken._id);
          const userObject = user.toObject();
          delete userObject.password;
          
          res.locals.user = user;

          if (user) {
            let courses = new Object();
            let key = new Object();
            Course.find()
              .then(async (result) => {
                for (let i = 0; i < result.length; i++) {
                  key["lesson" + (i + 1)] = await Course.findById(
                    user.courses[i]._id
                  );
                  Object.assign(courses, key);
                }
                res.locals.courses = courses;
                next();
              })
              .catch((err) => console.log(err));
          } else {
            res.locals.courses = null;
            next();
          }
        }
      }
    );
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };

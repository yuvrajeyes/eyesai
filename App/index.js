const express = require("express");
const jwt = require("jsonwebtoken");
const authRoutes = require("./routes/authRoutes");
const Course = require("./models/user.course");
const Task = require("./models/user.task");
const User = require("./models/user.model");
const { requireAuth, checkUser } = require("./middlewares/auth.middlewares");

const router = express.Router();

require("dotenv").config();

router.get("*", checkUser);

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get("/homepage", requireAuth, (req, res) => {
  res.render("homepage");
});

router.get("/users", requireAuth, (req, res) => {
  res.render("users");
});

router.get("/courses", requireAuth, (req, res) => {
  res.render("courses");
});

router.get("/courseLessons", requireAuth, (req, res) => {
  res.render("courseLessons");
});

router.get("/courseLessons/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  Course.findById(id)
    .then((result) => {
      res.render("lessons", {
        lesson: result,
      });
    })
    .catch((err) => console.log(err));
});

router.post("/courseLessons/:id", async (req, res) => {
  const id = req.params.id;
  const token = req.cookies.jwt;
  if (token) {
    await jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        next();
      } else {
        let user = await User.findById(decodedToken._id);
        var index = user.courses.findIndex(function (item, i) {
          return item._id.toString() === id.toString();
        });
        user.courses[index].Completed = true;
        await user.save();
        res.redirect("/courseLessons");
      }
    });
  } else {
    next();
  }
});

// authentication routes
router.use(authRoutes);

// course routes
router.use(Course);

// tasks routes
router.use(Task);

module.exports = router;

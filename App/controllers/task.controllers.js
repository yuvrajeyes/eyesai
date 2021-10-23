const Task = require("../models/user.task");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

require("dotenv").config();

module.exports.task_post = async (req, res, next) => {
  let { Description, Completed, Deadline, Time } = req.body;
  console.log(req.body);
  if (Completed == "on") {
    Completed = true;
  } else {
    Completed = false;
  }
  Deadline = await (Deadline + ", " + Time);

  const token = req.cookies.jwt;
  if (token) {
    await jwt.verify(
      token,
      process.env.JWT_SECRET,
      async (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          next();
        } else {
          let user = await User.findById(decodedToken._id);
          let task = new Task({
            Description: Description,
            Completed: Completed,
            Deadline: Deadline,
            owner: user._id,
          });
          try {
            task.save().then((result) => {
              console.log("Task saved");
              res.redirect("tasks");
            });
          } catch (err) {
            console.log(err);
          }
        }
      }
    );
  }
};

module.exports.task_get = async (req, res) => {
  Task.find()
    .sort({ creeatedAt: -1 })
    .then((result) => {
      res.render("tasks", { tasks: result });
    })
    .catch((err) => console.log(err));
};

module.exports.task_getById = async (req, res) => {
  const id = req.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    console.log(req.params);
    Task.findById(id).then((result) => {
      res.render("details", { singleTask: result });
    });
  }
};

module.exports.task_update = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  // const updates = Object.keys(req.body);
  // const allowedUpdates = ["Task", "Completed"];
  // const isValidOperation = updates.every((update) =>
  //   allowedUpdates.includes(update)
  // );
  // if (!isValidOperation) {
  //   return res.status(401).send({ error: "Invalid updates" });
  // }
  // try {
  //   const task = await Task.findOne({
  //     _id: req.params.id,
  //     owner: req.user._id,
  //   });
  //   updates.forEach((update) => (task[update] = req.body[update]));
  //   await task.save();
  //   res.send(task);
  // } catch (e) {
  //   res.status(400).send(e);
  // }
};

module.exports.task_delete = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (token) {
      await jwt.verify(
        token,
        process.env.JWT_SECRET,
        async (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            next();
          } else {
            let user = await User.findById(decodedToken._id);
            Task.findOneAndDelete({
              _id: req.params.id,
              owner: user._id,
            })
              .then((result) => res.json({ redirect: "/tasks" }))
              .catch((err) =>
                res.status404.json({ error: "Task id not found" })
              );
          }
        }
      );
    }
  } catch (e) {
    res.status(500).send({ e: "Catch Error", e });
  }
};

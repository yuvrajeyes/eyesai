const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// const Course = require("./App/models/user.course");
// const Task = require("./App/models/user.task");
// const Lesson = require("./App/controllers/course.controllers");

require("dotenv").config();

const app = express();
const myapp = require("./App/index");

// middleware and static files
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// // connect to mongodb
const dbURI = process.env.dbURI;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async (result) => {
    console.log("connected to mongodb..");
    const PORT = process.env.PORT || 8888;
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  })
  .catch((err) => console.log(err));

app.use("/", myapp);

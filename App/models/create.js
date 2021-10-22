const Course = require("./user.course");
const Lesson = require("../controllers/course.controllers");
const Task = require("./user.task");


module.exports.create_course = async (req, res) => {
  for (const lesson of Lesson) {
    const les = await lesson;
    await Course.find()
      .then(async (results) => {
        const courseExists = await results.some(
          (result) => result.url == les.url
        );
        if (!courseExists) {
          les.save((result) => console.log("course created!"));
        }
      })
      .catch((err) => console.log(err));
  }

  let courses = new Object();
  let key = new Object();
  Course.find()
    .then(async (result) => {
      for (let i = 0; i < result.length; i++) {
        key["lesson" + (i + 1)] = await Course.findById(result[i]._id);
        await Object.assign(courses, key);
      }
      res.locals.courses = courses;
    })
    .catch((err) => console.log(err));
};

module.exports.create_task = async (req, res) => {
  Task.create({
    Description: "DESC1",
  })
}
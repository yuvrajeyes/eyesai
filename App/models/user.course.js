const mongoose = require("mongoose");

const Course = mongoose.model(
  "Course",
  new mongoose.Schema(
    {
      index: {
        type: String,
        required: true,
      },
      LessonName: {
        type: String,
        required: true,
      },
      Description: {
        type: String,
        required: true,
      },
      Slides: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Course;

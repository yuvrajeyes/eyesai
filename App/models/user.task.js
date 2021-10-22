const mongoose = require("mongoose");

function addDays(date, day) {
  date.setMinutes(date.getMinutes() + 60 * 24 * day);
  return new Date(date);
}

let options = {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const taskSchema = new mongoose.Schema(
  {
    Description: {
      type: String,
      default: "",
    },
    Completed: {
      type: Boolean,
      default: false,
    },
    Deadline: {
      type: String,
      default: addDays(new Date(), 3).toLocaleString([], options),
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;

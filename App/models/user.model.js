const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isEmail, isStrongPassword } = require("validator");
const Task = require("./user.task");

require("dotenv").config();

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

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Can't be blank, please enter a name"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Can't be blank, please enter an username"],
      match: [
        /^[a-zA-Z0-9]+$/,
        "username can contain only alphanumeric characters",
      ],
      minlength: [3, "username should be of atleast 3 characters"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Can't be blank, please enter an email address"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      validate: [isEmail, "Please enter a valid email"],
      trim: true,
    },
    mobile: {
      type: Number,
      required: [true, "Please enter mobile number"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: [8, "Password should be atleast 8 character"],
      validate: [
        isStrongPassword,
        "Password should containt atleat 1 lowercase, 1 uppercase and 1 symbols",
      ],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please enter confirm password"],
      minlength: [8, "Password should be atleast 8 character"],
    },
    social_profile: {
      instagram: {
        type: String,
        trim: true,
      },
      facebook: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
      github: {
        type: String,
        trim: true,
      },
    },
    avatar: {
      type: Buffer,
    },
    courses: [
      {
        coursesID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        Completed: {
          type: Boolean,
          default: false,
        },
        Deadline: {
          type: String,
          default: addDays(new Date(), 5).toLocaleString([], options),
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

// Hashing the password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "7 days",
  });
  await user.save();
  return token;
};

userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw Error("incorrect email");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("incorrect password");
  }
  return user;
};

// Remove all courses of a user, if user is deleted
userSchema.pre("remove", async function (next) {
  await Task.deleteMany({ owner: this._id });
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;

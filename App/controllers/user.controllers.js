const multer = require("multer");
const sharp = require("sharp");
const User = require("../models/user.model");
const { handleErrors } = require("./auth.controllers");

module.exports.user_get = async (req, res) => {
  res.send(req.user);
};

module.exports.user_update = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "username", "email", "password", "avatar"];
  const isValidOperation = updates.every((update) => {
    allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    throw Error("invalid updates");
  }
  try {
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();
    res.status(200).json({ user: req.user._id });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.delete_user = async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (err) {
    console.log.log(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const upload = multer({
  limits: { fileSize: 512000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(pdf|jpg|jpeg|png)$/)) {
      return cb(Error("avatar upload error"));
    }
    cb(undefined, true);
  },
});

module.exports.avatar_post =
  (upload.single("avatar"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 200, height })
      .jpeg()
      .toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
  },
  (err, req, res, next) => {
    res.status(400).send({
      error: error.message,
    });
  });

module.exports.avatar_delete = async (req, res) => {
  req.user.avatar = undefined;

  await req.user.save();
  res.send();
};

module.exports.avatar_get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw Error("user does not exists");
    } else {
      if (!user.avatar) {
        throw Error("avatar not found");
      } else {
        res.set("Content-Type", "image/jpg");
        res.send(user.avatar);
      }
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const HttpError = require("../models/errorModel");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, username, phone, password, password2 } = req.body;
    if (!name || !email || !username || !phone || !password) {
      return next(new HttpError("Fill in all fields", 422));
    }

    const newEmail = email.toLowerCase();
    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("The email already exists", 422));
    }

    const newUsername = username.toLowerCase();
    const usernameExists = await User.findOne({ username: newUsername });
    if (usernameExists) {
      return next(new HttpError("The username already exists", 422));
    }

    if (password.trim().length < 8) {
      return next(
        new HttpError(
          "Password is too week, it must have at least 8 or more characters",
          422
        )
      );
    }

    if (password != password2) {
      return next(new HttpError("The passwords do not match", 422));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      username: newUsername,
      phone,
      password: hashedPass,
    });
    res.status(201).json(`${newUser.username} registered`);
  } catch (error) {
    return next(new HttpError(error));
  }
};

const loginUser = async (req, res, next) => {
  res.json("Login new User");
};

const getUser = async (req, res, next) => {
  res.json("GetOne User");
};

const getAuthors = async (req, res, next) => {
  res.json("Get all users");
};

const changeUserAvatar = async (req, res, next) => {
  res.json("Change User avatar");
};

const editUser = async (req, res, next) => {
  res.json("Edit User");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAuthors,
  changeUserAvatar,
  editUser,
};

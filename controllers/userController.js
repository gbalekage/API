const registerUser = async (req, res, next) => {
  res.json("Register new User");
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

const { Router } = require("express");

const {
  registerUser,
  loginUser,
  getUser,
  getAuthors,
  changeUserAvatar,
  editUser,
} = require("../controllers/userController");

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.get("/", getAuthors);
router.post("/change-avatar", changeUserAvatar);
router.patch("/edit-user", editUser);

module.exports = router;

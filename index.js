const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const postsRoutes = require("./routes/postsRoutes");

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);

connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT || 8800, () =>
      console.log(`Server Started on the port ${process.env.PORT}`)
    )
  )
  .catch((error) => {
    console.log(error);
  });

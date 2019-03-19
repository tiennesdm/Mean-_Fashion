const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRoutes = require("./routes/adminroutes");
const userRoutes = require("./routes/loginauth");
const menRoutes = require("./routes/menroutes");
const womenRoutes = require("./routes/womenroutes");


const app = express();
mongoose
  .connect(
    "mongodb+srv://tiennesdm:n5BfiMQw9XNUZfHs@meanstack-srts7.mongodb.net/fashion?retryWrites=true",
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }

  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));
//app.use(app.router);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/men",  menRoutes);
app.use("/api/women", womenRoutes);


module.exports = app;

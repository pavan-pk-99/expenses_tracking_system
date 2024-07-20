require('dotenv').config(); // Load environment variables
const express = require("express");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const Router = require("./routers");
dotenv.config({ path: "./config.env" });
const app = express();

const dbURI ="mongodb+srv://pavankumarp2003:ovQgYCo2oYBGR7I2@cluster0.j90wg4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = process.env.PORT || 5000;
SECRET_KEY="mysecretkey"
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(Router);
mongoose
  .connect("mongodb+srv://pavankumarp2003:<password>@cluster0.j90wg4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then((result) => {
    app.listen(port);
    console.log("connected to mongodb and listening at port 5000");
  })
  .catch((err) => console.error(err));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

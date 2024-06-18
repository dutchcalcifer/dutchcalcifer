const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const app = express();

const routes = require("./src/routes/routes.js");
app.use("/", routes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.listen(process.env.PORT, () => {
  console.log("Node running on port", process.env.PORT);
});

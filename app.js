const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const app = express();

const routes = require("./src/routes/routes.js");
app.use("/", routes);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use((req, res, next) => {
  res.status(404).render("pages/404.ejs");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("pages/500.ejs");
});

app.listen(process.env.PORT, () => {
  console.log("Node running on port", process.env.PORT);
});

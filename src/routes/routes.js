const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.error(error);
  }
});

router.get("/favorites", async (req, res) => {
  try {
    res.render("pages/favorites");
  } catch (error) {
    console.error(error);
  }
});

router.get("/setup", async (req, res) => {
  try {
    res.render("pages/setup");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

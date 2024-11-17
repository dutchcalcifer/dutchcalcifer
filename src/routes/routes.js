const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", async (req, res) => {
  try {
    const dbPath = path.join(__dirname, "../data/db.json");
    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).render("pages/500.ejs");
        return;
      }
      const parsedData = JSON.parse(data);
      const randomMessage =
        parsedData.motd[Math.floor(Math.random() * parsedData.motd.length)];
      const randomPalete =
        parsedData.palate[Math.floor(Math.random() * parsedData.palate.length)];
      const music =
        parsedData.music[Math.floor(Math.random() * parsedData.music.length)];

      res.render("index", { randomMessage, randomPalete, music });
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("pages/500.ejs");
  }
});

module.exports = router;

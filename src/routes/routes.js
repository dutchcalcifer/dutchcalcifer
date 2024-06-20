const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  try {
    fs.readFile("src/data/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).render("pages/500.ejs");
        return;
      }
      const randomMessage =
        JSON.parse(data).motd[
          Math.floor(Math.random() * JSON.parse(data).motd.length)
        ];

      const randomPalete =
        JSON.parse(data).palate[
          Math.floor(Math.random() * JSON.parse(data).palate.length)
        ];

      res.render("index", { randomMessage, randomPalete });
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("pages/500.ejs");
  }
});

module.exports = router;

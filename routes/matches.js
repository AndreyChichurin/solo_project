const express = require('express');
const router = express.Router();
const request = require("request");
const moment = require("moment");

router.get("/", function (req, res) {
  request("https://api.crowdscores.com/v1/matches?api_key=73c827543f1a446a816e2d1448495740", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);

      for (var i = 0; i < body.length; i++) {
        body[i].start = moment.unix(body[i].start / 1000).format("YYYY MMM DD hh:mm:ss");
      }

      res.render("matches", {
        matches: body
      });
    } else {
      res.send("An error occured");
    }
  })
})

module.exports = router;


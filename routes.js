const express = require("express");
const app = express();
const port = 5000;

const data = ["code", "sleep", "eat"];

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("home", { wish: data });
  });

  app.get("/about", (req, res) => {
    res.send("about");
  });

  app.post("/sent", (req, res) => {
    const Item = new Wish({
      wish: req.body.item
    });
    Item.save()
      .then(data => {
        console.log("saved");
        res.send(data);
      })
      .catch(err => {
        throw err;
      });
  });
};

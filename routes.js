const express = require("express");
const app = express();
const port = 5000;

const data = ["code", "sleep", "eat"];

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("home", { wish: data });
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.post("/sent", (req, res) => {
    console.log(req.body.habit)
    data.push(req.body.habit)
    res.json({status:true})
  });
};

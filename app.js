const express = require("express");
const bodyParser = require("body-parser");
// const { getDate, getDay } = require(__dirname + "/date.js");
const date = require(__dirname + "/date.js");

// console.log(date);

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3001, () => {
  console.log("Server start on port 3001");
});

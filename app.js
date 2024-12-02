const cookieParser = require("cookie-parser");
const express = require(`express`);
const app = express();
const bcrypt = require(`bcrypt`)
const jwt = require(`jwt`)

app.use(cookieParser)

app.get(`/`, (req, res) => {
  res.cookie("name", "abcdefg");
  res.send("done")
});

app.get(`/read`, (req, res) => {
  console.log(req.cookies)
  res.send("Read page");
});
app.listen(3000);

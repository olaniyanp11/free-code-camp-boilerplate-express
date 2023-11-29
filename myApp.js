require("dotenv").config();

let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let absolute = __dirname + "/views/index.html";
  res.sendFile(absolute);
});
app.get("/json", (req, res) => {
 res.json({ message: "Hello json" });
});

module.exports = app;

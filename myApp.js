require("dotenv").config();

let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let absolute = __dirname + "/views/index.html";
  res.sendFile(absolute);
});
app.get("/json", (req, res) => {
  let mess = process.env.MESSAGE_STYLE.toLowerCase();
  console.log(mess);
  if (mess === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else res.json({ message: "Hello json" });
});

module.exports = app;

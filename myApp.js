require("dotenv").config();
let auth = require('./middleware/auth')

let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));
app.use(auth)

app.get("/", (req, res) => {
  let absolute = __dirname + "/views/index.html";
  res.sendFile(absolute);
});
app.get("/json", (req, res) => {
  let mess = process.env.MESSAGE_STYLE.toLowerCase();
  if (mess === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else res.json({ message: "Hello json" });
});
app.get("/now", (req, res,next) => {
    let time = new Date().toString()
    req.time = time
    next()
}, function(req,res){
    res.json({time: req.time})
})

module.exports = app;

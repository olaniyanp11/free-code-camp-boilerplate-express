require("dotenv").config();
let auth = require("./middleware/auth");

let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));
app.use(auth);
app.use(express.urlencoded({ extended: true }));



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
app.get(
  "/now",
  (req, res, next) => {
    let time = new Date().toString();
    req.time = time;
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);
app.get("/:word/echo", (req, res) => {
  let word = req.params.word;
  res.json({ echo: word });
});

app
  .route("/name")
  .get((req, res) => {
    let firstname = req.query.first;
    let lastname = req.query.last;
    let fname = `${firstname} ${lastname}`;
    res.json({ name: fname });
  })
  .post((req, res) => {
    let firstname = req.body.first;
    let lastname = req.body.last;
    let fname = `${firstname} ${lastname}`;
    res.json({ name: fname });
  });
module.exports = app;

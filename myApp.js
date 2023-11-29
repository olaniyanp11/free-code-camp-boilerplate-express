let express = require('express');
let app = express();
console.log("hello")
app.get('/', (req, res) => {
    res.send("Hello Express")
})

 module.exports = app;

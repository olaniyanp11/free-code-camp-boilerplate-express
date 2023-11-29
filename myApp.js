let express = require('express');
let app = express();
app.use('/public',express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    let absolute = __dirname + "/views/index.html";
    res.sendFile(absolute)
})

 module.exports = app;

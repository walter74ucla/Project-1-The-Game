const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname)));
app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/js", express.static(__dirname + '/js'));

// viewed at based directory http://localhost:8000/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(process.env.PORT || 8000);
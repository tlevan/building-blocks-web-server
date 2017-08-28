const dotenv  = require("dotenv");
const express = require("express");
const path    = require("path");

dotenv.config();

const serverPort = process.env.PORT || 80;
const logPrefix  = "request  |  "

const app = express();

app.use(function (req, res, next) {
    console.log(logPrefix + req.url);
    next();
});

app.use(express.static(path.join(__dirname, "static")));

const server = app.listen(serverPort, function () {
    console.log("server listening on port " + server.address().port);
});


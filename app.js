const express = require('express');
const app = express();

const router = require("./routes/index.js");

const connection = require('./db/connection.js');

var port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/project/v1", router);

connection.once('open', () => {
    console.log("connected to database");

    const server = app.listen(port, () => {
        console.log("listening");
    });
})
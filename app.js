const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: "Hello Aiya Patiyo..!",
        message2: "dklfskldg",
        Name: "dsaghdgjk"
    });
});

module.exports = app;

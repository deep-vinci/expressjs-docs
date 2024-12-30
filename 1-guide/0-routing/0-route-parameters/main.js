const express = require("express");
const app = express();

const port = 3000;
app.get("/:user/", (req, res) => {
    res.send(req.params);
})


app.get("/:user/:is_verified", (req, res) => {
    res.send(req.params);
})


app.get("/:user/:is_verified/:from-:till", (req, res) => {
    res.send(req.params);
})


app.listen(port);
const express = require("express");
const path = require("path")
const app = express();

const port = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
    res.status(404).send("error")
})
app.listen(port);
const tiger = require("./routes/tiger")
const lion = require("./routes/lion")
const elephant = require("./routes/elephant")

const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

const timeLogger = (req, res, next) => {
    console.log(Date.now());
    next();
}

app.use("/", timeLogger, express.static(path.join(__dirname, "home")));

app.use("/tiger", tiger)
app.use("/lion", lion)
app.use("/elephant", elephant)

app.listen(port);
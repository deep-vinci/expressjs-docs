const express = require("express");
const router = express.Router();


const timeLogger = (req, res, next) => {
    console.log(Date.now());
    next();
}

router.route("/")
    .get(timeLogger, (req, res) => {
        res.send("Tiger");
    })


module.exports = router;
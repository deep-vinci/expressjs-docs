const express = require("express");
const router = express.Router();


const timeLogger = (req, res, next) => {
    console.log(Date.now());
    next();
}
/* 
/elephant
*/
router.route("/")
    .get(timeLogger, (req, res) => {
        res.send("Elephant");
    })

router.route("/about")
    .get(timeLogger, (req, res) => {
        res.send("About elephant");
    })


module.exports = router;
const express = require("express");
const router = express.Router();


const timeLogger = (req, res, callNextFunction) => {
    console.log(Date.now());
    callNextFunction();
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
        res.redirect("/");
    })


module.exports = router;
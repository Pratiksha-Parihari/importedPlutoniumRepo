const express = require('express');

const externalModule = require("../logger/logger.js");
const dateInfo = require("../util/helper.js");
const validatorEx = require("../validator/formatter.js")
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send("My first ever API");
    externalModule.welcome();
    dateInfo.printDate();
    dateInfo.printMonth();
    dateInfo.getBatchInfo();
    validatorEx.afterTrim();
    validatorEx.changeToUpperCase();
    validatorEx.changetoLowerCase();

});

module.exports = router;
// adding this comment for no reason
/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_09
*/
const express = require('express');
const router = express.Router();
router.get("/static", (req, res) => {
    res.render("palindrome/static", {});
});
module.exports = router;
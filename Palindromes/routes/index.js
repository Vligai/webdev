/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/tree/master/Lecture%20Code/lecture_09
*/
const palindromeRoute = require("./palindrome");
const constructorMethod = (app) => {
    app.use("/palindrome", palindromeRoute);

    app.use("*", (req, res) => {
        res.redirect("/palindrome/static");
    })
};
module.exports = constructorMethod;
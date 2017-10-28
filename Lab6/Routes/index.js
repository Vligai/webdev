/*Vladislav Ligai*/
const my_education = require("./education");
const my_story = require("./story");
const about_me = require("./about");

const constructorMethod = (app) => {
    app.use("/education", my_education);
    app.use("/story", my_story);
	app.use("/about", about_me);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found HERE"});
    });
};

module.exports = constructorMethod;
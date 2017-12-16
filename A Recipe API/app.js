/*Vladislav Ligai*/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const my_routes = require("./routes");
const logger = require('morgan');
app.use(logger('dev'));
app.use(bodyParser.json());
my_routes(app);
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
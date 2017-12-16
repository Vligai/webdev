/*Vladislav Ligai*/
const express = require("express");
const my_routes = require('./Routes');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

my_routes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
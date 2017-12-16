/*
Vladislav Ligai
used: https://github.com/Stevens-CS546/CS-546-WS-Summer-1/blob/master/Lecture%20Code/lecture_09/app.js
*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const my_routes = require("./routes");
const exphbs = require('express-handlebars');
const session = require('express-session');
const Handlebars = require('handlebars');
const logger = require('morgan');
const connectf = require('connect-flash');
app.use(logger('dev'));
require('./data/login')(passport);
const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});
app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*connect-flash*/
app.use(connectf());
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');
app.use('/', my_routes);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});
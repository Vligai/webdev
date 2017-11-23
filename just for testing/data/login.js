/*
Vladislav Ligai
*/
var bcrypt = require("bcrypt-nodejs");
const passport = require("passport");
const data = require('../data');
const my_user = data.users;
const LocalStrategy = require('passport-local').Strategy;
/*
	from passport-local github page
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'passwd',
		passReqToCallback: true,
		session: false
	  },
	  function(req, username, password, done) {
		// request object is now first argument
		// ...
	  }
	));
	passport.use(new LocalStrategy(
		function(username, password, done) {
		User.findOne({ username: username }, function (err, user) {
		  if (err) { return done(err); }
		  if (!user) { return done(null, false); }
		  if (!user.verifyPassword(password)) { return done(null, false); }
		  return done(null, user);
		});
	  }
	));
*/
module.exports = function(passport) {
		passport.use('local', new LocalStrategy({
		  usernameField: 'username',
		  passwordField: 'password',
		  passReqToCallback: true
		},
		function(req, username, password, done) {
			my_user.findUser(username).then((user) => {
				bcrypt.compare(password, user.password, function(err, res) {
					if (err) 
						return done(err);
					else {
					  if (res === true) 
						return done(null, user);
					  else 
						return done(null, false, req.flash('loginMessage', 'Incorrect password!'));
					}  
				  });
				}).catch((error) => {
					return done(null, false, req.flash('loginMessage', 'User not found!'));
				});
			passport.serializeUser(function(user, done){done(null, user);});
			passport.deserializeUser(function(user, done){done(null, user);});
		}));	
	}

//module.exports = exportedMethods;	

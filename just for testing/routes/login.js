/*
Vladislav Ligai
*/
const express = require('express');
const router = express.Router();
const passport = require("passport");

router.get("/", async (req, res) => {
	try{
		await res.render("login/login", {message: req.flash('loginMessage')});
	} catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post('/login', passport.authenticate('local', {
		successRedirect: 'private',
		failureRedirect: '/',
		failureFlash: true })
);  

router.get("/private", async(req, res, next) => {
	try{
		if(!req.isAuthenticated())
			await res.redirect("/");
		else 
			await res.render("login/private",req.user);
	} catch (e) {
    res.status(500).json({ error: e });
  }
});

router.use("*",(req,res) => {
	res.sendStatus(404);
});

module.exports = router;

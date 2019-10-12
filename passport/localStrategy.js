const db = require("../models");
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
		// When a user tries to sign in this code runs
		db.User.findOne({
			where: {
			  email: email
			}
		  }).then(function(dbUser) {
			// If there's no user with the given email
			if (!dbUser) {
			  return done(null, false, {
				message: "Incorrect email."
			  });
			}
			// If there is a user with the given email, but the password the user gives us is incorrect
			else if (!dbUser.validPassword(password)) {
			  return done(null, false, {
				message: "Incorrect password."
			  });
			}
			// If none of the above, return the user
			return done(null, dbUser);
		  });
	}
)

module.exports = strategy
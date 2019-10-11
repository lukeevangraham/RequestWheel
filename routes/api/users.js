const express = require('express')
const router = express.Router()
// const User = require('../../models/user.js')
const db = require("../../models")

router.post('/user', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    db.User.findOne({ username: username }, (err, userMatch) => {
        if (userMatch) {
            return res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        const newUser = new User({
            username: username,
            password: password
        })
        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            return res.json(savedUser)
        })
    })


})

module.exports = router
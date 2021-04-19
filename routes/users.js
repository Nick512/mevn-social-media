const { v4: uuidv4 } = require("uuid")
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

//Import the User model
const User = require("../models/user")

//Route to create a new user
router.post("/", (req, res) => {
    const { name, password } = req.body

    //Validation
    User.findOne({ name }).then(async (user) => {
        if (user) return res.status(400).json({ msg: "User already exists" })

        try {
            //Hash password
            const hashedPassword = await bcrypt.hash(password, 10)

            //Create user id
            const userID = uuidv4()

            const newUser = new User({
                userID,
                name,
                password: hashedPassword,
            })

            newUser.save()
            res.json({ msg: "user created" })
            console.log("user created")
            res.redirect("/")
        } catch (e) {
            console.log(e)
        }
    })
})

//Login route
router.post("/login", (req, res) => {
    const { name, password } = req.body

    User.findOne({ name: name }, async (err, user) => {
        if (err) {
            res.json({ err })
        }

        if (user == null) {
            res.json({ err: "user not found" })
        } else {
            try {
                if (await bcrypt.compare(password, user.password)) {
                    user.password = ""
                    res.json({ user })
                } else {
                    res.json({ msg: "Password is incorrect" })
                }
            } catch {
                res.json({ err: error })
            }
        }
    })
})

module.exports = router

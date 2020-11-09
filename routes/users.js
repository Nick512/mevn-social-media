const express = require("express")
const router = express.Router()

//Import the User model
const User = require("../models/user")

//Route to create a new user
router.post("/", (req, res) => {
	const { name, password } = req.body

	//Validation

	User.findOne({ name }).then((user) => {
		if (user) return res.status(400).json({ msg: "User already exists" })

		const newUser = new User({
			name,
			password,
		})

		newUser.save()
		res.json({ msg: "user created" })
	})
})

module.exports = router

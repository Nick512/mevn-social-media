//Import the User model
const User = require("../models/user")

const express = require("express")
const router = express.Router()

//Route to create a new user
router.post("/", (req, res) => {
	const { postID, title, body, createdBy } = req.body

	const newPost = {
		postID,
		title,
		body,
		likes: 0,
		createdAt: Date.now(),
	}

	User.findOne({ userID: createdBy }).then((user) => {
		user.posts.push(newPost)
		user.save()
	})
})

module.exports = router

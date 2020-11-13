//Import the User and Post model
const User = require("../models/user")
const Post = require("../models/post")

const express = require("express")
const router = express.Router()

//Route to create a new post
router.post("/", (req, res) => {
	const { postID, title, body, createdBy } = req.body

	const newPost = new Post({
		postID,
		title,
		body,
		likes: [],
		createdAt: Date.now(),
		createdBy,
	})

	newPost.save()

	User.findOne({ userID: createdBy }).then((user) => {
		user.posts.push(postID)
		user.save()
	})
})

module.exports = router

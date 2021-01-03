//Import the User model
const Post = require("../models/post")

const express = require("express")
const router = express.Router()

//Route to like a post
router.post("/", (req, res) => {
	const { postID, userID, createdBy } = req.body

	Post.findOne({ postID: postID }).then((post) => {
		post.likes.push(userID)
		post.save()
	})
})

module.exports = router

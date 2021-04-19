//Import dependencies
const { v4: uuidv4 } = require("uuid")
const express = require("express")
const router = express.Router()

//Import the User and Post model
const User = require("../models/user")
const Post = require("../models/post")

//Route to create a new post
router.post("/", (req, res) => {
    const { title, body, createdBy } = req.body

    //Create post ID
    const postID = uuidv4()

    const newPost = new Post({
        postID,
        title,
        body,
        likes: [],
        createdAt: Date.now(),
        createdBy,
    })

    newPost.save()
    console.log(newPost)

    res.json({ msg: "post created" })

    User.findOne({ userID: createdBy }).then((user) => {
        try {
            user.posts.push(postID)
            user.save()
        } catch (error) {
            console.log(error)
        }
    })
})

module.exports = router

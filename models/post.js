const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
	postID: {
		type: String,
		required: true,
	},

	title: {
		type: String,
		required: true,
	},

	body: {
		type: String,
		required: true,
	},

	likes: {
		type: Number,
		default: 0,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
})

module.exports = Post = mongoose.model("post", PostSchema)

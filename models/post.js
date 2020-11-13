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
		type: Array,
		default: [],
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},

	createdBy: {
		type: String,
		required: true,
	},
})

module.exports = Post = mongoose.model("post", PostSchema)

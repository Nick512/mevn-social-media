const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
	userID: {
		type: String,
		required: true,
	},

	name: {
		type: String,
		required: true,
	},

	password: {
		type: String,
		required: true,
	},

	registerDate: {
		type: Date,
		default: Date.now,
	},

	posts: {
		type: Array,
		default: [],
	},

	following: {
		type: Array,
		default: [],
	},

	desciption: {
		type: String,
		default: "",
	},

	followers: {
		type: Number,
		default: 0,
	},
})

module.exports = User = mongoose.model("user", UserSchema)

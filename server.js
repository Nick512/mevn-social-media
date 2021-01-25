const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require("cors")

const user = require("./routes/users")
const post = require("./routes/post")
const likePost = require("./routes/likePost")

const app = express()
app.use(cors())

//Body Parser middleware
app.use(express.json())

//DB config
//const db = config.get("mongoURI")
const db = config.get("mongoURI")

//Connect to DB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log("Mongo conneted"))
	.catch((err) => console.log(err))

//User routes
app.use("/api/user", user)

app.use("/api/post", post)

app.use("/api/likepost", likePost)

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

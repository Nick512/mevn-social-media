const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const user = require("./routes/users")

const app = express()

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

app.get("*", (req, res) => {
	res.send("hello")
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

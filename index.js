const express = require("express")

const app = express()

//Body Parser middleware
app.use(express.json())

app.get("*", (req, res) => {
	res.send("hello")
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))

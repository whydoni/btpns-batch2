const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require("./routes/user")
const auth = require("./routes/auth")

app.use(cors())

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }))

// serve static files
app.use(express.static("public"))

// routing
app.use("/auth", auth)
app.use("/users", users) // edit, delete, detail, add, get

// error handler
app.use((req, res, next) => {
    const error = new Error("Error occured!!")
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        error: error.message
    })
})

module.exports = app


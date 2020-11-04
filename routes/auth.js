const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const users = require("../models/users")

const router = express.Router()
const key = process.env.JWT_KEY


router.post("/login", (req, res) => {
    const { username, password } = req.body

    const userLogin = users.find(user => user.username === username && user.password === password)
    // login success
    if (userLogin) {
        const dataUser = {
            username,
            role: userLogin.role
        }

        // create jwt token
        const token = jwt.sign(dataUser, key, { expiresIn: '1h' })

        return res.status(200).send({
            message: "Success logged in!!",
            data: [{ username, password, token }]
        })
    }

    // login failed
    return res.status(401).send({
        error: "Please check your username and password!!"
    })
})

//register user
router.post("/register", (req, res)=>{
    users.push(req.body)
    return response(res, 200, "Register success!!", [users])
})

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}

module.exports = router
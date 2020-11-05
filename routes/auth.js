const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userModel = require("../models/users")

const router = express.Router()
const key = process.env.JWT_KEY

//login worked
router.post("/login", (req, res) => {
    const { username, password } = req.body

    //const userLogin = users.find(user => user.username === username && user.password === password)
    //checking data to model
    
    userModel.getUser(username, password, (error, data) => {
        if (error) return res.status(500).send({ error })
        
        // login success
        if (data.length) {
            const dataUser = {
                username,
                role: data[0].role
            }
    
            // create jwt token
            const token = jwt.sign(dataUser, key, { expiresIn: '1h' })
    
            return res.status(200).send({
                message: "Success logged in!!",
                role: data[0].role,
                data: [{ username, token }]
            })
        }
    })

    // login failed
    // return res.status(401).send({
    //     error: "Please check your username and password!!"
    // })
})

//register 
router.post("/register", (req, res)=>{
    const { name, username, email, password } = req.body
    userModel.insertData(name, username, email, password, 2, (error, data) => {
        if (error) return res.status(401).send({error})

        return response(res, 200, "Register success!!", [])
    })
    // users.push(req.body)
    // return response(res, 200, "Register success!!", [])
})

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}

module.exports = router
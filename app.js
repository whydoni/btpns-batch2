const express = require("express")
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

//body-parser to json
const jsonParser = bodyParser.json()
const urlnecodedParser = bodyParser.urlencoded({extended:false})

//cors
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//list user
var users = [
    {
        "name": "admin",
        "username": "admin",
        "email": "admin@mail.com",
        "password": "12345"
    }, {
        "name": "user1",
        "username": "user1",
        "email": "user1@mail.com",
        "password": "123"
    }, {
        "name": "user2",
        "username": "user2",
        "email": "user2@mail.com",
        "password": "123"
    }, {
        "name": "user3",
        "username": "user3",
        "email": "user3@mail.com",
        "password": "123"
    }, {
        "name": "user4",
        "username": "user4",
        "email": "user4@mail.com",
        "password": "123"
}]

//get user
app.get("/users", (req,res) => {
    res.send({
        users
    })
})

//edit user
app.post("/edit/:email",jsonParser, (req,res) => {
    const email = req.params.email
    const param = req.body
    for (let i = 0; i<user.length; i++) {
        let thisuser = users[i]
        if (thisuser.email === email) {
            users[i] = param;
        }
    }

    res.send({
        massage : `Edited User : ${req.params.email}!!`
    })
})

//delete user
app.post("/delete/:email", jsonParser, (req,res) => {
    const email = req.params.email
    users = users.filter(i => {
        if (i.email !== email) {
            return true;
        }
        return false;
    });

    res.send({
        massage : `Deleted User : ${req.params.email}!`
    })
})

//add user
app.post("/register", jsonParser, (req, res)=>{
    console.log("req", req.body)
    users.push(req.body)
    res.send({
        message: "POST Success"
    })
})


app.use(express.static("public"))
module.exports = app
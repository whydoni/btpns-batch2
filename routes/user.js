const express = require("express")
const router = express.Router()

const jwtAuth = require("../middleware/jwtAuth")
let users = require("../models/users")

// public data
router.get("/", (req, res) => {
    // login success
    res.status(200).send({
        message: "Success",
        data: [users[0]]
    })
})

// private data
router.get("/all", jwtAuth, (dataLogin, req, res, next) => {
    if (dataLogin.role === "admin") {
        // login success
        res.status(200).send({
            message: "Success",
            data: users
        })
    } else {
        res.status(401).send({
            error: "Unauthorized!!"
        })
    }
})


// edit data
router.put("/edit/:email", jwtAuth, (dataLogin, req, res, next) => {
    const email = req.params.email
    const editedData = req.body
    if (dataLogin.role === "admin") {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                users[i] = editedData;
                return response(res, 200, "Data has been updated", [users])
            }
        }
    } else if (dataLogin.role === "user") {
        if (dataLogin.email===email) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email===email) {
                    users[i] = editedData;
                    return response(res, 200, "Success", [users])
                }
            }
        }
    }
    return response(res, 401, "Unauthorized!!", [])
})


//delete data
router.delete("/delete/:email", jwtAuth, (dataLogin, req, res, next) => {
    const email = req.params.email
    if (dataLogin.role === "admin") {
        users = users.filter(i => i.email !== email) 
        return response(res, 200, "Success", [users])
    }
    return response(res, 401, "Unauthorized!!", [])
})

const response = (res, code, message, data) => {
    res.send({
        code,
        message,
        data
    })
}

module.exports = router
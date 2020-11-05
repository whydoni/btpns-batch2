const conn = require("../config/database")


const getUser = (username = null, password = null, cb = () => { }) => {
    try {
        //const query = `select * from user where username='${username}' and password='${password}'` limit 1
        conn.query("SELECT b.name role from user a join role b on a.role = b.id where a.username=? and a.password=? limit 1",
        [username, password],
        function (error, results, fields) {
            if (error) {
                console.log("ERROR: getUser.if - " + error);
                return cb("Internal Server Error!!", null)
            }

            return cb(null, results)
        });
    } catch (err) {
        console.log("ERROR: getUser.catch - " + err);
        return cb("Internal Server Error!!", null)
    }
}




const getAllUser = (cb=() => {}) => {
    try {
        conn.query("SELECT * FROM user", 
        function (error, results, fields) {
            if (error) {
                console.log("ERROR: getUser.if - " + error);
                return cb("Internal Server Error!!", null)
            }

            return cb(null, results)
        });
    }  catch (err) {
        console.log("ERROR: getUser.catch - " + err);
        return cb("Internal Server Error!!", null)
    }
}

const deleteData = (email = null, cb=() => {}) => {
    try {
        conn.query("DELETE from user where email=?", [email],
        function (error, results, fields) {
            if (error) {
                console.log("ERROR: getUser.if - " + error);
                return cb("Internal Server Error!!", null)
            }

            return cb(null, results)
        });
    }  catch (err) {
        console.log("ERROR: getUser.catch - " + err);
        return cb("Internal Server Error!!", null)
    }
}

const insertData = (name, username, email, password, role, cb=() => {}) => {
    try {
        conn.query("INSERT INTO user VALUES(null, ?, ?, ?, ?, ?)", [name, username, email, password, role],
        function (error, results, fields) {
            if (error) {
                console.log("ERROR: getUser.if - " + error);
                return cb("Internal Server Error!!", null)
            }

            return cb(null, results)
        });
    }  catch (err) {
        console.log("ERROR: getUser.catch - " + err);
        return cb("Internal Server Error!!", null)
    }
}

const updateData = (name, username, password, role, email, cb=() => {}) => {
    try {
        conn.query("UPDATE user SET name=?, username=?, password=?, role=? WHERE email=?", [name, username, password, role, email],
        function (error, results, fields) {
            if (error) {
                console.log("ERROR: getUser.if - " + error);
                return cb("Internal Server Error!!", null)
            }

            return cb(null, results)
        });
    }  catch (err) {
        console.log("ERROR: getUser.catch - " + err);
        return cb("Internal Server Error!!", null)
    }
}


// let users = [
//     {
//         name: "admin",
//         username: "admin",
//         email: "admin@mail.com",
//         password: "12345",
//         role: "admin"
//     }, {
//         name: "user1",
//         username: "user1",
//         email: "user1@mail.com",
//         password: "123",
//         role: "user"
//     }, {
//         name: "user2",
//         username: "user2",
//         email: "user2@mail.com",
//         password: "123",
//         role: "user"
//     }, {
//         name: "user3",
//         username: "user3",
//         email: "user3@mail.com",
//         password: "123",
//         role: "user"
//     }, {
//         name: "user4",
//         username: "user4",
//         email: "user4@mail.com",
//         password: "123",
//         role: "user"
// }]

module.exports = { getUser, getAllUser, deleteData, insertData, updateData }
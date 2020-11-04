const fs = require("fs")
const http = require("http")
const url = require("url")
const app = require("./app")
const hostname = "127.0.0.1"
const port = 5000


const server = http.createServer(app)
// const server = http.createServer((req, res) => {
//     console.log("req :", req.url === "setting/admin/123");
//     console.log("req :", url.parse(req.url));
//     res.statusCode = 500
//     res.setHeader("Content-Type", "text/plain")
//     res.end("Hello World")
// })

server.listen(port, hostname, () => console.log("Server Listening on port " + port))
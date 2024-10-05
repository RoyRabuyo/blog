const express = require("express")

const routes = express.Router()

routes.get("/contact", (req, res) => {
    res.send("Welcome contact!")
})

routes.get("/home", (req, res) => {
    res.send("Welcome Home!")
})

routes.get("/about", (req, res) => {
    res.send("Welcome about!")
})
routes.get("/info", (req, res) => {
    res.send("Welcome info!")
})
routes.get("/dashboard", (req, res) => {
    res.send("Welcome dashboard!")
})

module.exports = routes

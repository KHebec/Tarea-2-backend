const express = require('express')
const app = express()
const logger = require("morgan")
const usersRouter = require("./routes/users")
const mathsRouter = require("./routes/maths")
const listRouter = require("./routes/list")

app.use(logger("dev"))
app.use(express.json())
app.use("/api", usersRouter)
app.use("/api", mathsRouter)
app.use("/api", listRouter)

module.exports = app
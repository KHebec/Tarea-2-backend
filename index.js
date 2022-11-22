const express = require('express')
const app = express()
const logger = require("morgan")
const cors = require("cors")

const usersRouter = require("./routes/users")
const mathsRouter = require("./routes/maths")
const listRouter = require("./routes/list")
const {conect} = require("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())

app.use("/api", usersRouter)
app.use("/api", mathsRouter)
app.use("/api", listRouter)
conect()

module.exports = app
const express = require("express")
const router = express.Router()
const {nameLastname, bodyName} = require("../controllers/indexController")


router.get('/person/:names/:lastname', nameLastname)
router.post('/body', bodyName)

module.exports = router
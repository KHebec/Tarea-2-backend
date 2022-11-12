const express = require("express")
const router = express.Router()
const {dividir, suma, parImpar} = require("../controllers/indexController")

router.get('/dividir/:dividendo/:divisor', dividir)
router.get('/suma/:num1/:num2', suma)
router.get('/number', parImpar)


module.exports = router
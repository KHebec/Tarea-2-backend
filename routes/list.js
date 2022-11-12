const express = require("express")
const router = express.Router()
const {listaCompras} = require("../controllers/indexController")

router.get('/list', listaCompras)


module.exports = router
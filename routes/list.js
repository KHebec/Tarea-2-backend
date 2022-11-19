const express = require("express")
const router = express.Router()
const {listaCompras, verPharmacy, crearPharmacy} = require("../controllers/indexController")

router.get('/list', listaCompras)
router.get("/ver",verPharmacy)
router.post("/crear",crearPharmacy)


module.exports = router
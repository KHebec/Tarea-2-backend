const express = require("express")
const router = express.Router()
const {listaCompras, verPharmacy, crearPharmacy, vistaUnicaFarmacia, editarPharmacy, deletePharmacy} = require("../controllers/indexController")
const { validarId }= require("../middlewares/validarid")
const{check}= require("express-validator")

//GET
router.get('/list', listaCompras)
router.get("/ver",verPharmacy)
router.get("/ver/:id", validarId, vistaUnicaFarmacia)

//POST
router.post("/crear", [
    check("drogas").not().isEmpty().withMessage("El campo drogas es requerido").isLength({min: 3, max: 16}).withMessage("El campo tiene que tener mas de 3 letras pero menos de 12"),
    check("troquel").not().isEmpty().withMessage("El campo troquel es requerido"),
    check("dosis").not().isEmpty().withMessage("El campo dosis es requerido"),
    check("stock").not().isEmpty().withMessage("El campo stock es requerido")
], crearPharmacy)

//PUT
router.put("/editar/:id", validarId, [
    check("drogas").not().isEmpty().withMessage("El campo drogas es requerido").isLength({min: 3, max: 16}).withMessage("El campo tiene que tener mas de 3 letras pero menos de 12"),
    check("troquel").not().isEmpty().withMessage("El campo troquel es requerido"),
    check("dosis").not().isEmpty().withMessage("El campo dosis es requerido"),
    check("stock").not().isEmpty().withMessage("El campo stock es requerido")
], editarPharmacy)

//DELETE
router.delete("/delete/:id", validarId, deletePharmacy)

module.exports = router
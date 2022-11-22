const{Pharmacy}= require("../models/farmacia")
const{validationResult}= require("express-validator")

const nameLastname = (req, res) =>{
    res.send(`Hello ${req.params.names}`+" "+`${req.params.lastname}`)
}

const listaCompras = (req, res) =>{
    res.json({
        cereales:req.query.cer,
        yerba:req.query.yer,
        cerveza:req.query.birra,
        vino:req.query.vino,
        cafe:req.query.cafe
    })
}

const dividir = (req, res) =>{
    let resultado= req.params.dividendo / req.params.divisor;

    if (req.params.divisor==0) {
      res.json({error: "no se puede dividir por cero"})
    } else {
      res.json({resultado})
    } 
}

const suma = (req, res) =>{
    let resultado= Number(req.params.num1) + Number(req.params.num2);

    if (req.params.num1 <0 || req.params.num2 <0) {
      res.json({error: "no se pueden enviar numeros menores que cero"})
    } else {
      res.json({resultado})
    } 
}

const parImpar = (req, res) =>{
    value= req.query.num;
    if (value%2==1) {
      res.send("no autorizado");
    } else{
      res.send("autorizado");
    } 
}


const bodyName = (req, res) =>{
    res.status(201).json({
        nombre:req.body.nombre,
        status:req.body.status
    })
}

const verPharmacy = async(req,res)=>{
  const items = await Pharmacy.find()
  res.status(200).json({items})
}

const crearPharmacy = async(req,res)=>{
  try {
    const err = validationResult(req)
    if (err.isEmpty()) {
      const item = new Pharmacy(req.body)
      await item.save()
      res.status(201).json({item})
    } else {
      res.status(501).json({err})
    }
    
  } catch (error) {
    res.status(501).json({error})
  }
}

const editarPharmacy = async(req,res)=>{
  try {
    const err= validationResult(req)
    if (err.isEmpty) {
      await Pharmacy.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json({msg: "se actualizo el producto"})
    } else {
      res.status(501).json({err})
    }
    
  } catch (error) {
    res.status(501).json({error})
  }
}

const deletePharmacy = async(req,res)=>{
  const item = await Pharmacy.findByIdAndDelete(req.params.id)
  res.status(204).json({msg: "El siguiente item fue eliminado", item})
  
}

const vistaUnicaFarmacia = async(req,res)=>{
  const item= await Pharmacy.findById(req.params.id)
  res.status(200).json({item})
}

module.exports = {nameLastname, listaCompras, dividir, suma, parImpar, 
  bodyName, verPharmacy, crearPharmacy, editarPharmacy, deletePharmacy, vistaUnicaFarmacia}
const{Pharmacy}= require("../models/farmacia")

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
    const item = new Pharmacy(req.body)
    await item.save()
    res.status(201).json({item})
  } catch (error) {
    res.status(501).json({error})
  }
}

module.exports = {nameLastname, listaCompras, dividir, suma, parImpar, bodyName, verPharmacy, crearPharmacy}
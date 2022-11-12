// const index = (req, res) =>{
//     res.status(200).send("Hello World!")
// }

// const listadoAlumnos = (req,res) => {
//     res.status(200).json({
//         alumno1: "Juan",
//         alumno2: "Ana",
//         alumno3: "Karen"
//     }) 
// }

// const ejemploPost = (req,res) => {
//     res.status(201).json({
//         msg: "Guardado con exito"
//     }) 
// }

// const ejemploBody = (req,res) => {
//     res.status(200).json({
//         name: req.body.name,
//         city: req.body.city
//     }) 
// }

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



module.exports = {nameLastname, listaCompras, dividir, suma, parImpar, bodyName}
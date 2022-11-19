const mongoose = require("mongoose")
const Schema = mongoose.Schema
const pharmacySchema = new Schema({
    drogas:{
        type: String,
        required: true
    },
    troquel:{
        type: Number,
        required: true
    },
    dosis:{
        type: Number,
        required: true
    },
    stock:{
        type: Boolean,
        required: true
    }
})

const Pharmacy = mongoose.model("Pharmacy",pharmacySchema)
module.exports = {Pharmacy}
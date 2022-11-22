const mongoose = require("../DB/ConectionDB.js");

const ProductoSchema  = mongoose.Schema({
        nombre:{
            type: String,
            required: true,
            unique: true
        },
        codigo:{
            type: String,
            required: true,
            unique: true
        },
        categoria:{
            type: String
        },
        valorCompra:{
            type: Number,
            required:true
        },
        valorVenta:{
            type: Number,
            required: true
        },
        descripcion:{
            type: String,
        },
        imagen:{
            type:String        
        },
        unidadMedida:{
            type: String
        },
        cantidad:{
            type:Number
        },
        calificacion:{
            type:String
        }
        

    },{
        collection: "Productos",
        versionKey: false
    });
module.exports = mongoose.model("productos",ProductoSchema)
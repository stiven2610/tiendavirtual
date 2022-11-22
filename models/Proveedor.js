const mongoose = require("../DB/ConectionDB.js");

const ProveedorSchema = mongoose.Schema({
   
    nombres:{
        type:String,
        required: true    
    },

    apellidos:{
        type:String,
          
    },



    tipoDocumento:{
        type:String,
        required: true   
    },


    NumDoc:{
        type:String,
        required: true  
    },

    Direccion:{
        type:String,
        required: true   
    },

    telefono:{
        type:String,
        required: true 
    },

    email:{
        type:String,
        required: true 
    },

    
//este e sun array se pone dentro de corchetes
    

},{
    collection: "proveedor",
    versionKey:false
});

module.exports = mongoose.model("proveedor", ProveedorSchema)
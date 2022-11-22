const mongoose = require("../DB/ConectionDB.js");

const UsuarioSchema = mongoose.Schema({
    usuario:{
        type:String,
        required: true
    },

    clave:{
        type:String,
        required: true
        
    },

    rol:{
        type:String,
        
    },

    nombres:{
        type:String,
        
    },

    Apellidos:{
        type:String,
        
    },

    tipoDoc:{
        type:String,
        required: true
        
    },

    numDoc:{
        type:String,
        required: true
        
    },

    direccion:{
        type:String,
        
    },

    telefono:{
        type:String,
        
    },

    email:{
        type:String,
        
    },

    estado:{
        type:String,
        required: true
        
    },

//este es un array se pone dentro de corchetes
    

},{
    collection: "usuario",
    versionKey:false
});

module.exports = mongoose.model("usuario", UsuarioSchema)
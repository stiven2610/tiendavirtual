const mongoose = require("../DB/ConectionDB.js");

const ConfiguracionSchema = mongoose.Schema({
    nombreTienda:{
        type:String,
        required: true
    },

    valorEnvio:{
        type:Number,
        required: true
        
    },

    topeEnvio:{
        type:Number,
        required: true
        
    },

   

//este e sun array se pone dentro de corchetes
    

},{
    collection: "configuracion",
    versionKey:false
});

module.exports = mongoose.model("configuracion",ConfiguracionSchema )
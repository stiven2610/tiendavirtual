//conexion de base de datos
const mongoose = require("mongoose");

const user = "stiven26";
const password = "IzDr1hXIW8iEuRRG";
const BDname = "miBD";
const uri = `mongodb+srv://${user}:${password}@cluster0.o9wipgi.mongodb.net/${BDname}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("base de datos conectada..."))
  .catch((e) => console.log(e));
  
  
  module.exports = mongoose; 


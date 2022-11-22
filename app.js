const express =require("express");
const app = express();
const cors = require("cors");
const bodyParser =require("body-parser");
const proveedorCtrl = require("./controller/ProveedorCtrl");
const usuarioCtrl = require("./controller/UsuarioCtrl");
const configuracionCtrl = require("./controller/ConfiguracionCtrl");
const mongoose = require ("mongoose");
const productoCtrl = require("./controller/ProductosCtrl");

app.use(cors());
app.use(bodyParser.json());

//proveedores
app.use("/proveedores",proveedorCtrl);

//Usuario
app.use("/usuarios",usuarioCtrl);

//Configuracion
app.use("/configuraciones",configuracionCtrl);

//productos
app.use("/productos",productoCtrl);

//el servidor que se va usar

app.listen(5000);
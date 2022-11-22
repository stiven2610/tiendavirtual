const express = require("express");
const proveedorCtrl = express.Router();
const Proveedor = require("../models/Proveedor");

//funcion listar proveedores
proveedorCtrl.get("/", (req, res) => {
  Proveedor.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
//agregar proveedor
proveedorCtrl.post("/", async(req, res) => {
  let proveedor = req.body;
   proveedor = await Proveedor.create(Proveedor,(err)=>{
    if(err)
      res.json({err: err});
    else 
      res.json(proveedor);
  });
});

//actualizar proveedor

proveedorCtrl.patch("/", async (req, res) => {
  let proveedor = req.body;
  proveedor = await Proveedor.updateOne({ _id: proveedor._id }, proveedor,(err) =>{
    if(err)
     res.json({err: err});
    else 
     res.json(proveedor);
  });
});
//consultar por id
proveedorCtrl.get("/id/:id", async (req, res) => {
  let proveedor = await Usuario.findById(req.params.id);
  res.json(proveedor);
});
//consultar proveedor
proveedorCtrl.get("/consultaProveedor", async (req, res) => {
  let proveedor = await Proveedor.findOne({
    proveedor: req.body.proveedor,
    clave: req.body.clave,
  });
  res.json(proveedor);
});

//eliminar proveedor
proveedorCtrl.delete("/:idProveedor", (req, res) => {
  Proveedor.deleteOne({ idProveedor: req.params.id })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = proveedorCtrl;

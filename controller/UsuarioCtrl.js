const express = require("express");
const usuarioCtrl = express.Router();
const Usuario = require("../models/Usuario");
const proveedorCtrl = require("./ProveedorCtrl");

//funcion 1 listar usuario1
usuarioCtrl.get("/", (req, res) => {
  Usuario.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//consultar por id
usuarioCtrl.get("/id/:id", async (req, res) => {
  let usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
});

//buscar login
usuarioCtrl.get("/login", async (req, res) => {
  let usuario = await Usuario.findOne({usuario: req.body.usuario,clave: req.body.clave,});
  res.json(usuario);
});

//Crear usuario metodo post
usuarioCtrl.post("/", async(req, res) => {
  let usuario = req.body;
  usuario = await Usuario.create(usuario,(err) =>{
    if(err)
    res.json({message: err});
    else res.json(usuario);
});
});

//actualizar usuario

usuarioCtrl.patch("/", async (req, res) => {
  let usuario = req.body;
  usuario = await Usuario.updateOne({ _id: usuario._id }, usuario,(err) =>{
    if(err)
     res.json({err: err});
    else 
     res.json(usuario);
  });
});
//eliminar usuariio
usuarioCtrl.delete("/:id", async (req, res) => {
  await Usuario.deleteOne({ _id: req.params.id });
  res.send("usuario eliminado");
});

module.exports = usuarioCtrl;

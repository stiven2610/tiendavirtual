const express = require("express");
const configuracionCtrl = express.Router();
const Configuracion = require("../models/Configuracion");

// buscar configuracion
configuracionCtrl.get("/", async (req, res) => {
  let configuracion = await Configuracion.findById("63793799d4f413875995fda5");
  res.json(configuracion);
});
//actualizar configurazion
configuracionCtrl.patch("/", async (req, res) => {
  let configuracion = req.body;
  configuracion = await Configuracion.updateOne({_id:
    "63793799d4f413875995fda5"},configuracion);
  res.json(configuracion);
});

module.exports = configuracionCtrl;

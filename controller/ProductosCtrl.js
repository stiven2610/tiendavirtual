const { json } = require("express");
const express = require("express");
const productoCtrl = express.Router();
const Producto = require("../models/Producto");

// listar productos
productoCtrl.get("/",async (req,res) =>{
    let productos= await Producto.find();
    res.json(productos);
});
// listar productos
productoCtrl.get("/buscar/:producto",async (req,res) =>{
    let productos= await Producto.find({nombre: req.params.producto});
    res.json(productos);
});


/* buscar por id */
productoCtrl.get("/id/:id", async (req, res) =>{
    let producto = await Producto.findById(req.params.id);
    res.json(producto);
});

/* crear producto*/
productoCtrl.post("/",async (req,res)=>{
    let producto = req.body;
    producto = await Producto.create(producto,(err) =>{
        if(err)
        res.json({ error: err});
        else res.json(producto);
});
    
});

//actualizar producto

productoCtrl.patch("/", async (req, res) => {
    let producto = req.body;
    producto = await Producto.updateOne({ _id: producto._id }, producto,(err) =>{
    res.json(producto);
    });
});


/* eliminar producto */
productoCtrl.delete("/:id", async(req,res) =>{
    await Producto.deleteOne({ _id: req.params.id});
    res.send("producto eliminado")
})
module.exports = productoCtrl;
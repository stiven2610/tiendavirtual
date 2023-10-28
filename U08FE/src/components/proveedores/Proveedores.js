import React ,{useState,useEffect} from 'react';
import{listarProveedoresAPI,agregarProveedoresAPI,eliminarProveedoresAPI, actualizarProveedoresAPI}from '../.././apis/proveedoresApis';
import TablaProveedores from './TablaProveedores';
import FormProveedores from './FormProveedores';


//se llaman todos los metodos que estan el apis/usuario.js
function Proveedores() {
  const[proveedores,setProveedores]=useState([]);
  const[proveedor,setProveedor]=useState(null);////useState es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente.
  
  //crud proveedor
  //LISTAR PROVEDORES
  useEffect(()=>{
    listarProveedoresAPI().then(proveedor=>setProveedores(proveedor));
  },[proveedor]);


  const guardarProveedor = (proveedor)=>{
    console.log(proveedor);
    if (proveedor._id === null) {
      return agregarProveedoresAPI(proveedor)
      .then(data=>setProveedores([...proveedores.data]));  
    }else{
      return actualizarProveedoresAPI(proveedor)
      .then(data =>data);
    }

  };  

  
  const eliminarProveedor = (id)=>{
    return eliminarProveedoresAPI(id)
  .then(data=>{
    if(data.deletCount ===1){
      setProveedores(proveedores.filter(proveedor=> proveedor._id !==id))
    }

    });
  
  };


  const mostrarProveedor =(proveedor)=>{
    setProveedor(proveedor);

  };




  return (
    <div>
      {<FormProveedores onSave={guardarProveedor} dataProveedor={proveedor}/>}
      {<TablaProveedores proveedores={proveedores} onDelete={eliminarProveedor} onSelect={mostrarProveedor}/>}
    </div>
    

  );
};


//sigue la tabla de proveedores


export default Proveedores;

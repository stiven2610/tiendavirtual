import React ,{useState,useEffect} from 'react';
import{ listarUsuariosAPI,agregarUsuariosAPI,eliminarUsuariosAPI,actualizarUsuariosAPI}from './../../apis/usuariosApis';
import TablaUsuarios from './TablaUsuarios';
import FormUsuarios from './FormUsuarios';



//se llaman todos los metodos que estan el apis/usuario.js
function Usuarios() {
  const[usuarios,setUsuarios]=useState([]);
  const[usuario,setUsuario]=useState(null);
  
  useEffect(()=>{
    listarUsuariosAPI().then(usuarios=>setUsuarios(usuarios));
  },[usuarios]);



  const guardarUsuario = (usuario)=>{
    if (usuario._id === null) {
      return agregarUsuariosAPI(usuario)
      .then(data=>setUsuarios([...usuarios.data]));  
    }else{
      return actualizarUsuariosAPI(usuario)
      .then(data =>data);
    }

  }; 

  
  const eliminarUsuario = (id)=>{
    return eliminarUsuariosAPI(id)
  .then(data=>{
    if(data.deletCount ===1){
      setUsuarios(usuarios.filter(usuario => usuario._id !==id))
    }

    });
  
  };


  const mostrarUsuario =(usuario)=>{
    setUsuario(usuario);

  };







  return (
    <div>
       {<FormUsuarios onSave={guardarUsuario} dataUsuario={usuario}/>}
      {<TablaUsuarios usuarios={usuarios} onDelete={eliminarUsuario} onSelect={mostrarUsuario}/>}
    </div>
    

  );
};


//sigue la tabla de proveedores


export default Usuarios;

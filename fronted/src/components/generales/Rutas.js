import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Usuarios from "../usuarios/Usuarios";
import Proveedores from "../proveedores/Proveedores";


function Rutas() {
  return (
    <div className="App">
      <header>
        <nav className="nav nav-tabs">
         <ul className="nav nav-pills">
         <li className="nav nav-item"><a className="nav-link" href="/">Home </a></li>
           <li className="nav nav-item"><a className="nav-link" href="/usuarios"> Usuarios </a></li> 
           <li className="nav nav-item"> <a className="nav-link" href="/proveedores"> Proveedores </a></li> 
         </ul>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
        <Route path ='/' element ={<h1>HOME</h1>}/>
          <Route path ='/usuarios' element ={<Usuarios/>}/>
          <Route path ='/proveedores' element ={<Proveedores/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
  
}
export default Rutas;

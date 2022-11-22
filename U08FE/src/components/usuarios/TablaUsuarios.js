import React,{useState} from 'react';

function TablaUsuarios(props){
    const{usuarios,onDelete,onSelect}=props;
    return(
        <table className="table table-hover table-bordered mt-4">
            <thead className="table-success">
               <tr className="table-success">
             <th>Usuario</th>
             <th>Clave</th>
             <th>Rol</th>
             <th>Nombres</th>
             <th>Apellidos</th>
             <th>Tipo Documento</th>
             <th>Numero Documento</th>
             <th>Direccion</th>
             <th>Telefono</th>
             <th>Email</th>
             <th>Estado</th>
             <th>Acciones</th>

               </tr>
            </thead >
            <tbody>
                {usuarios.map((usuario)=>{
                    return(
                        <tr key={usuario._id}>
                            <td>{usuario.usuario}</td>
                            <td>{usuario.clave}</td>
                            <td>{usuario.rol}</td>
                            <td>{usuario.nombres}</td>
                            <td>{usuario.Apellidos}</td>
                            <td>{usuario.tipoDoc}</td>
                            <td>{usuario.numDoc}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.estado}</td> 
                             <td>
                                <button type="button" className="btn btn-danger"onClick={()=>onDelete(usuario._id)}>Eliminar</button>
                                {/* slecciona por id */}
                                <button type="button" className="btn btn-primary" onClick={()=>onSelect(usuario)}>Seleccionar</button>
                            </td> 
                        </tr>
                       )
                })}
            </tbody>
        </table>

    );
    
}

export default TablaUsuarios;

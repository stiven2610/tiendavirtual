import React,{useState} from 'react';

function TablaProveedores(props){
    const{proveedores,onDelete,onSelect}=props;
    return(
        <table  className="table table-hover table-bordered mt-4">
            <thead className="table-success">
               <tr className="table-success">
             <th>Nombres</th>
             <th>Apellidos</th>
             <th>Tipo Documento</th>
             <th>Numero Documento</th>
             <th>Direccion</th>
             <th>Email</th>
             <th>Telefono</th>
             <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
                {proveedores.map((proveedor)=>{
                    return(
                        <tr key={proveedor._id}>
                            <td>{proveedor.nombres}</td>
                            <td>{proveedor.apellidos}</td>
                            <td>{proveedor.tipoDocumento}</td>
                            <td>{proveedor.NumDoc}</td>
                            <td>{proveedor.Direccion}</td>
                            <td>{proveedor.telefono}</td>
                            <td>{proveedor.email}</td>

                             <td>
                                <button type="button" className="btn btn-danger" onClick={()=>onDelete(proveedor._id)}>Eliminar</button>
                                {/* slecciona por id */}
                                <button type="button" className="btn btn-primary" onClick={()=>onSelect(proveedor)}>Seleccionar</button>
                            </td> 
                        </tr>
                       )
                })}
            </tbody>
        </table>

    );
    
}

export default TablaProveedores;

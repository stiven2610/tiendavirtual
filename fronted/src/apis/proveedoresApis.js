const puerto ="5000";
export function listarProveedoresAPI(){
    return fetch(`http://localhost:`+puerto+`/proveedores`)//fetch llama al servicio
    .then(res =>res.json())
    .then(data =>data);
}

//Aqui se hace rlos metodos

//se le especifica que metodo se va utilizar,
export function agregarProveedoresAPI(proveedor){
    return fetch(`http://localhost:`+puerto+`/proveedores`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(proveedor)
    })
    .then(res =>res.json())
    .then(data =>data);
}
//Para actualizar solo se cambia el metodo que es PATCH
export function actualizarProveedoresAPI(proveedor){
    return fetch(`http://localhost:`+puerto+`/proveedores`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(proveedor)
    })
    .then(res =>res.json())
    .then(data =>data);

}
// El signo $ se usa para llamar las variables
export function eliminarProveedoresAPI(id){
    return fetch(`http://localhost:`+puerto+`/proveedores/${id}`,{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'},
    })
    .then(res =>res.json())
    .then(data =>data);

}
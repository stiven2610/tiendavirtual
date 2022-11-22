const puerto ="5000";
export function listarUsuariosAPI(){
    return fetch(`http://localhost:`+puerto+`/usuarios`)//fetch llama al servicio
    .then(res =>res.json())
    .then(data =>data);
}

//Aqui se hace rlos metodos

//se le especifica que metodo se va utilizar,
export function agregarUsuariosAPI(usuario){
    return fetch(`http://localhost:`+puerto+`/usuarios`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
    })
    .then(res =>res.json())
    .then(data =>data);
}

//Para actualizar solo se cambia el metodo que es PATCH
export function actualizarUsuariosAPI(usuario){
    return fetch(`http://localhost:`+puerto+`/usuarios`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(usuario)
    })
    .then(res =>res.json())
    .then(data =>data);
}

// El signo $ se usa para llamar las variables
export function eliminarUsuariosAPI(id){
    return fetch(`http://localhost:`+puerto+`/usuarios/${id}`,{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'},
    })
    .then(res =>res.json())
    .then(data =>data);
}


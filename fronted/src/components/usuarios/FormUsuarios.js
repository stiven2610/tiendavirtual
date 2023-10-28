import React, { useState, useEffect } from "react";
//props  las propiedades que tiene la etiqueta que en este caso es FormUsuarios va tener la propiedad onSave ejemplo:type,value,input, lapropiedad onsave va recibir un usuario
function FormUsuarios(props) {
  const { onSave, dataUsuario } = props;

  const [usuario, setUsuario] = useState({
    _id: null,
    usuario: " ",
    clave: "",
    rol: " ",
    nombres: " ",
    Apellidos: " ",
    tipoDoc: " ",
    numDoc: " ",
    direccion: " ",
    telefono: " ",
    email: " ",
    estado: " ",
  });

  useEffect(() => {
    if (dataUsuario) setUsuario(dataUsuario);
    else
      setUsuario({
        _id: null,
        usuario: " ",
        clave: "",
        rol: " ",
        nombres: " ",
        Apellidos: " ",
        tipoDoc: " ",
        numDoc: " ",
        direccion: " ",
        telefono: " ",
        email: " ",
        estado: " ",
      });
  }, [dataUsuario]);

  const handleChance = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  //se recibe la variable
  const onSubmit = (e) => {
    e.preventDefault(); //para evitar que se mezclen la inofrmacion entre varias paginas abiertas, e es el elemento en este caso el formulario
    onSave(usuario);
    limpiar();
  };

  const limpiar = (e) => {
    setUsuario({
      _id: null,
      usuario: " ",
      clave: "",
      rol: " ",
      nombres: " ",
      Apellidos: " ",
      tipoDoc: " ",
      numDoc: " ",
      direccion: " ",
      telefono: " ",
      email: " ",
      estado: " ",
    });
  };
return(
  <section className="container">
  <form className="row g-3" onSubmit={onSubmit}>
    <div className="col-md-6">
      <div className="col-md-12">
        <label className="form-label">Rol</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="rol"
          value="Administrador"
          checked={usuario.rol === "Administrador"}
          onChange={(e) => {
            handleChance(e);
          }}
        />
        <label className="form-check-label">Administrador</label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="rol"
          value="Cliente"
          checked={usuario.rol === "Cliente"}
          onChange={(e) => {
            handleChance(e);
          }}
        />
        <label className="form-check-label">Cliente</label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="rol"
          value="Repartidor"
          checked={usuario.rol === "Repartidor"}
          onChange={(e) => {
            handleChance(e);
          }}
        />
        <label className="form-check-label">Repartidor</label>
      </div>
    </div>

    <div className="col-md-6">
      <div className="col-md-12">
        <label className="form-label">Estado</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="estado"
          value="Activado"
          checked={usuario.estado === "Activado"}
          onChange={(e) => {
            handleChance(e);
          }}
        />
        <label className="form-check-label"> Activo</label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="estado"
          value="Inactivado"
          checked={usuario.estado === "Inactivado"}
          onChange={(e) => {
            handleChance(e);
          }}
        />
        <label className="form-check-label"> Inactivo</label>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <label>Usuario</label>
      <input
        className="form-control"
        type="text"
        name="usuario"
        value={usuario.usuario}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label>Clave</label>
      <input
        className="form-control"
        type="text"
        name="clave"
        value={usuario.clave}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label>Nombres</label>
      <input
        className="form-control"
        type="text"
        name="nombres"
        value={usuario.nombres}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label>Apellidos</label>
      <input
        className="form-control"
        type="text"
        name="apellidos"
        value={usuario.apellidos}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label className="mr-sm-2">Tipo Documento</label>
      <select
        className="form-select"
        name="tipoDoc"
        value={usuario.tipoDoc}
        onChange={(e) => {
          handleChance(e);
        }}
      >
        <option value="CC">Cédula de Ciudadanía</option>
        <option value="NIT">NIT</option>
        <option value="TI">Tarjeta de Identidad</option>
        <option value="CE">Cédula de Extranjería</option>
        <option value="PAS">Pasaporte</option>
      </select>
    </div>

    <div className="col-md-4 mb-3">
      <label>Número Documento</label>
      <input
        className="form-control"
        type="text"
        name="numDoc"
        value={usuario.numDoc}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label>Dirección</label>
      <input
        className="form-control"
        type="text"
        name="direccion"
        value={usuario.direccion}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label>Teléfono</label>
      <input
        className="form-control"
        type="text"
        name="telefono"
        value={usuario.telefono}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>

    <div className="col-md-4 mb-3">
      <label>Email</label>
      <input
        className="form-control"
        type="text"
        name="email"
        value={usuario.email}
        onChange={(e) => {
          handleChance(e);
        }}
      />
    </div>
    
    <div className="col-md-12">
      <input type="submit" className="btn btn-primary" value="Guardar" />
      <button type="button" className="btn btn-danger" onClick={limpiar}>
        Limpiar
      </button>
    </div>
  </form>
</section>
)
}

export default FormUsuarios;

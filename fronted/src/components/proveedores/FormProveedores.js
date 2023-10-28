import React, { useState, useEffect } from "react";
//props  las propiedades que tiene la etiqueta que en este caso es FormUsuarios va tener la propiedad onSave ejemplo:type,value,input, lapropiedad onsave va recibir un usuario
function FormProveedores(props) {
  const { onSave, dataProveedor } = props;

  const [proveedor, setProveedor] = useState({
    _id: null,
    nombres: " ",
    apellidos: "",
    TipoDoc: " ",
    NumDoc: " ",
    Direccion: " ",
    telefono: " ",
    email: " ",
  });

  useEffect(() => {
    if (dataProveedor) setProveedor(dataProveedor);
    else
      setProveedor({
        _id: null,
        nombres: " ",
        apellidos: "",
        TipoDoc: " ",
        NumDoc: " ",
        Direccion: " ",
        telefono: " ",
        email: " ",
      });
  }, [dataProveedor]);

  const handleChance = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  //se recibe la variable
  const onSubmit = (e) => {
    e.preventDefault(); //para evitar que se mezclen la inofrmacion entre varias paginas abiertas, e es el elemento en este caso el formulario
    onSave(proveedor);
    limpiar();
  };

  const limpiar = (e) => {
    setProveedor({
      _id: null,
      nombres: " ",
      apellidos: "",
      TipoDoc: " ",
      NumDoc: " ",
      Direccion: " ",
      telefono: " ",
      email: " ",
    });
  };

  return (
    <section class="container">
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-4 mb-3">
          <label>Nombres</label>
          <input
            className="form-control"
            type="text"
            name="nombres"
            value={proveedor.nombres}
            onChange={(e) => {
              handleChance(e);
            }}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>apellidos</label>
          <input
            className="form-control"
            type="text"
            name="apellidos"
            value={proveedor.apellidos}
            onChange={(e) => {
              handleChance(e);
            }}
          />
        </div>

        <div className="col-md-4 mb-4">
          <label>Tipo Documento</label>
          <select
            className="form-select"
            name="tipoDocumento"
            value={proveedor.tipoDocumento}
            onChange={(e) => {
              handleChance(e);
            }}
          >
            <option value="CC">Cedula De Ciudadania</option>
            <option value="NIT">NIT</option>
            <option value="TI">Tarjeta De Identidad</option>
            <option value="CE">Cedula de Extranjeria</option>
            <option value="PAS">Pasaporte</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label>Numero Documento</label>
          <input
            className="form-control"
            type="text"
            name="NumDoc"
            value={proveedor.NumDoc}
            onChange={(e) => {
              handleChance(e);
            }}
          ></input>
        </div>

        <div className="col-md-4 mb-3">
          <label>Direccion</label>
          <input
            className="form-control"
            type="text"
            name="Direccion"
            value={proveedor.Direccion}
            onChange={(e) => {
              handleChance(e);
            }}
          ></input>
        </div>

        <div className="col-md- mb-3">
          <label>Telefono</label>
          <input
            className="form-control"
            type="text"
            name="telefono"
            value={proveedor.telefono}
            onChange={(e) => {
              handleChance(e);
            }}
          ></input>
        </div>

        <div className="col-md-4 mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value={proveedor.email}
            onChange={(e) => {
              handleChance(e);
            }}
          ></input>
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="Guardar" />
          <button type="button" className="btn btn-danger" onClick={limpiar}>
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormProveedores;

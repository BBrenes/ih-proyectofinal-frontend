import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import AdminGatosContext from "./../../context/admingatos/AdminGatosContext";

export default function DetallesGatos(props) {
  const { id } = useParams();
  console.log(id);

  const [editando, setEditando] = useState(false);
  const [creando, setCreando] = useState(false);

  // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
  const adminGatosContext = useContext(AdminGatosContext);
  const {
    gato,
    obtenerGato,
    eliminarGato,
    actualizarGato,
    crearGato,
    obtenerGatos,
  } = adminGatosContext;

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    edad: "",
    genero: "",
    esterilizado: false,
    descripcion: "",
    imagenUrl: "",
  });

  const { nombre, edad, genero, descripcion, imagenUrl } =
    datosFormulario;

  useEffect(() => {
    const generarEventos = async () => {
      await obtenerGato(id);
      return;
    };
    if (id === "creargato") {
      setDatosFormulario({
        nombre: "",
        edad: "",
        genero: "",
        esterilizado: false,
        descripcion: "",
        imagenUrl: "",
      });
      setCreando(true);
    } else {
      setCreando(false);
      setEditando(false);
      generarEventos();
    }
  }, [id]);

  // useEffect(() => {
  //     props.history.push(`/admingatos/${gato._id}`)
  // }, [gato])

  const clickEliminar = async (e) => {
    e.preventDefault();
    await eliminarGato(id);
    props.history.push("/admingatos");
    await obtenerGatos();
  };

  const clickEditar = (e) => {
    e.preventDefault();
    setEditando(true);
    setDatosFormulario({
      nombre: gato.nombre,
      edad: gato.edad,
      genero: gato.genero,
      esterilizado: gato.esterilizado,
      descripcion: gato.descripcion,
      imagenUrl: gato.imagenUrl,
    });
  };

  const monitoreoCambios = (event) => {
    console.log(event.target.value);
    setDatosFormulario({
      ...datosFormulario,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = async (event) => {
    event.preventDefault();
    await actualizarGato(id, datosFormulario);
    setEditando(false);
    await obtenerGatos();
  };

  const clickCancelar = (e) => {
    e.preventDefault();
    setEditando(false);
  };

  const enviarDatosCrear = async (event) => {
    event.preventDefault();
    const dato = await crearGato(datosFormulario);
    const gatoId = dato.data.gatoCreado._id;
    console.log("dato", dato);

    await setCreando(false);

    // await obtenerGatos()
    props.history.push(`/admingatos/${gatoId}`);
  };

  return (
    <div className="px-3">
      {creando ? (
        <>
          <h1>Crea un nuevo gatito</h1>
          <form
            onSubmit={(e) => {
              enviarDatosCrear(e);
            }}
          >
            <div class="form-outline mb-2">
                <label class="form-label" for="form2Example1">
                Nombre
              </label>
              <input
                type="text"
                id="form2Example1"
                name="nombre"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={nombre}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example2">
                Edad
              </label>
              <input
                type="text"
                id="form2Example2"
                name="edad"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={edad}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example3">
                Género
              </label>
              <input
                type="text"
                id="form2Example3"
                name="genero"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={genero}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example4">
                Descripción
              </label>
              <input
                type="text"
                id="form2Example4"
                name="descripcion"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={descripcion}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example5">
                Imagen URL
              </label>
              <input
                type="text"
                id="form2Example5"
                name="imagenUrl"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={imagenUrl}
                class="form-control"
              />
              
            </div>
            <div className="">
              <button
                type="submit"
                className="btn text-white btn-block mb-4 btn-primary d-inline"
                >Crear
              </button>
            </div>
          </form>
        </>
      ) : editando === false ? (
        gato === null ? (
          <h1>Selecciona un gato o crea uno nuevo :3</h1>
        ) : (
          <>
            <h1 className="mb-3">Detalles del gatito</h1>
            <div class="col-md-4 mb-3">
              <img
                src={gato.imagenUrl}
                class="card-img-top img-primary"
                alt="cat"
              />
            </div>
            <p>
              <b>Nombre: </b>
              {gato.nombre}
            </p>
            <p>
              <b>Edad: </b>
              {gato.edad}
            </p>
            <p>
              <b>Género: </b>
              {gato.genero}
            </p>
            <p className="mb-4">
              <b>Descripción: </b>
              {gato.descripcion}
            </p>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                clickEditar(e);
              }}
            >
              Editar
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={(e) => {
                clickEliminar(e);
              }}
            >
              Eliminar
            </button>
          </>
        )
      ) : (
        <>
          <h1 className="mb-3">Editando gatito</h1>
          <form
            onSubmit={(e) => {
              enviarDatos(e);
            }}
          >
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example1">
                Nombre
              </label>
              <input
                type="text"
                id="form2Example1"
                name="nombre"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={nombre}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example2">
                Edad
              </label>
              <input
                type="text"
                id="form2Example2"
                name="edad"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={edad}
                class="form-control"
              />
             
            </div>
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example3">
                Género
              </label>
              <input
                type="text"
                id="form2Example3"
                name="genero"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={genero}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-2">
            <label class="form-label" for="form2Example4">
                Descripción
              </label>
              <input
                type="text"
                id="form2Example4"
                name="descripcion"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={descripcion}
                class="form-control"
              />
              
            </div>
            <div class="form-outline mb-4">
            <label class="form-label" for="form2Example5">
                Imagen URL
              </label>
              <input
                type="text"
                id="form2Example5"
                name="imagenUrl"
                onChange={(e) => {
                  monitoreoCambios(e);
                }}
                value={imagenUrl}
                class="form-control"
              />
              
            </div>
            <div className="">
              <button
                type="submit"
                className="btn text-white btn-block mb-4 btn-primary d-inline"
                >Actualizar
              </button>
            
            <button className="d-inline btn text-white btn-block mb-4 btn-primary mx-3"
            onClick={(e) => {
              clickCancelar(e);
            }}
          >
            Cancelar
          </button>
          </div>
          </form>

        </>
      )}
    </div>
  );
}

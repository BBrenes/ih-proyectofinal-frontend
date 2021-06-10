import React, { useContext, useEffect } from "react";
import AdminGatosContext from "./../../context/admingatos/AdminGatosContext";

export default function Gatitos() {
  // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
  const adminGatosContext = useContext(AdminGatosContext);
  const { gatos, obtenerGatosUsuario } = adminGatosContext;
  console.log("entró a gatitos");

  useEffect(() => {
    const generarEventos = async () => {
      await obtenerGatosUsuario();
      return;
    };

    generarEventos();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-4 mb-2">Gatitos en adopción :3</h2>
        {gatos.length === 0 ? (
          "No hay gatitos aún."
        ) : (
          <div class=" container d-flex flex-wrap justify-content-between mb-5">
            {gatos.map((e) => {
              return (
                <div key={e._id}>
                  <div
                    class="card border-primary mt-4 mx-2"
                    style={{ maxWidth: "20rem" }}
                  >
                    <h4 class="text-center mt-3 text-warning">{e.nombre}</h4>
                    <div class="card-body">
                      <img src={e.imagenUrl} class="card-img-top" alt="cat" />
                      <div class="d-flex justify-content-center">
                        <p class="card-title mt-3 text-warning">
                          Edad: {e.edad}
                        </p>
                      </div>
                      <div class="d-flex justify-content-center">
                        <p class="card-title text-warning">
                          Género: {e.genero}
                        </p>
                      </div>
                      <div class="d-flex justify-content-center">
                        <p class="card-title text-warning">
                          Descripción: {e.descripcion}
                        </p>
                      </div>
                      <div class="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary mx-3">
                          Adoptar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

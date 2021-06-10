import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AdminGatosContext from "./../../context/admingatos/AdminGatosContext";

export default function ListaGatos() {
  // EXTRAER LOS VALORES DEL CONTEXT (ESTADO GLOBAL)
  const adminGatosContext = useContext(AdminGatosContext);
  const { gatos, obtenerGatos } = adminGatosContext;


  useEffect(() => {
    const generarEventos = async () => {
      await obtenerGatos();
      return;
    };

    generarEventos();
  }, []);

  return (
    <div className="px-4 pb-4">
      <h4 className="pb-3">Gatitos para adopción</h4>
      <Link to={`/admingatos/creargato`}>
        <button className="btn text-white btn-block mb-4 btn-primary">
          Nuevo Gatito
        </button>
      </Link>
      <div className="modal-scrollable-area">
        {gatos.length === 0
          ? "No hay gatitos aún."
          : gatos.map((e) => {
              return (
                <div key={e._id}>
                  <Link to={`/admingatos/${e._id}`}>
                    <div
                      class="card border-primary mb-3 p-3"
                      style={{ maxWidth: "540px" }}
                    >
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={e.imagenUrl}
                            class="card-img-top img-primary"
                            alt="cat"
                          />
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <p class="card-text mx-auto btn btn-secondary">{e.nombre}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

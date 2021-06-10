import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./../../context/autenticacion/AuthContext";
export default function Login(props) {
  // Extraer los valores del context
  // YO NECESITO UTILIZAR VALROES GLOBALES en este componente
  const authContext = useContext(AuthContext);
  const { autenticado, iniciarSesion } = authContext;
  const [datosFormulario, setDatosFormulario] = useState({
    email: "",
    password: "",
  });
  const { email, password } = datosFormulario;
  useEffect(() => {
    if (autenticado) {
      console.log("entró a Login")
      props.history.push("/admingatos");
    }
    return;
  }, [autenticado]);
  const monitoreoCambiosFormulario = (event) => {
    console.log(event.target.value);
    setDatosFormulario({
      ...datosFormulario,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    // CONECTARME CON EL ESTADO GLOBAL.
    // ENVIAR LOS DATOS DEL FORMULARIO HACIA UNA FUNCIÓN QUE SE CONECTE CON EL BACKEND Y MONGODB PARA CONFIRMAR QUE ES EL USUARIO
    event.preventDefault();
    iniciarSesion({
      email,
      password,
    });
  };
  return (
    <div
      class="container d-flex flex-column mx-auto mt-5 mb-5 py-5"
      style={{ width: "450px" }}
    >
      <form onSubmit={(e) => {enviarDatos(e)}}>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" name="email" 
            placeholder="Ingresa tu email" onChange={(e) => {monitoreoCambiosFormulario(e)}}
            value={email} class="form-control" />
          <label class="form-label" for="form2Example1">
            Email
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" name="password"
            placeholder="Ingresa tu contraseña" onChange={(e) => {monitoreoCambiosFormulario(e)}}
            value={password} class="form-control" />
          <label class="form-label" for="form2Example2">
            Contraseña
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example3"
                checked
                style={{ backgroundColor: "#0c8599", borderColor: "#0c8599" }}
              />
              <label class="form-check-label" for="form2Example3">
                {" "}
                Recuerdame{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">¿Olvidaste tu contraseña?</a>
          </div>
        </div>

        <button
          type="submit"
          class="btn text-white btn-block mb-4"
          style={{ width: "450px", backgroundColor: "#212529" }}
        >
          Iniciar Sesión
        </button>

        <div class="text-center">
          <p>
             ¿Aún no eres un usuario? <a href="#!">Registrate</a>
          </p>
          <p>o inicia sesión con:</p>
          <button
            type="button"
            class="btn text-white btn-floating mx-1"
            style={{ backgroundColor: "#0c8599" }}
          >
            <i class="fab fa-facebook-f"></i>
          </button>

          <button
            type="button"
            class="btn text-white btn-floating mx-1"
            style={{ backgroundColor: "#0c8599" }}
          >
            <i class="fab fa-google"></i>
          </button>

          <button
            type="button"
            class="btn text-white btn-floating mx-1"
            style={{ backgroundColor: "#0c8599" }}
          >
            <i class="fab fa-twitter"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useContext } from 'react'
import AuthContext from "./../../context/autenticacion/AuthContext";

export default function Header() {

  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  const clickLogout = (e) => {
    e.preventDefault();
    cerrarSesion();
  };

  return (
<nav class="navbar sticky-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1098ad" }}>
  <a class="navbar-brand" href="#">&nbsp;&nbsp;El Gato Vago</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Gatitos en adopción</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="/admingatos">Administrar gatitos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Donaciones</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Iniciar Sesión</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Registrarme</a>
      </li>
      <li class="nav-item">
      <a class="nav-link text-white" onClick={(e) => {clickLogout(e);}} href="/">Cerrar sesión</a>
      </li>
    </ul>
    <span class="navbar-text">
      
    </span>
  </div>
</nav>
  )
}

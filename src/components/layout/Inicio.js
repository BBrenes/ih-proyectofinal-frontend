import React from "react";

export default function Inicio() {
  return (
    <div className="container d-flex my-5">
      <div class="jumbotron">
        <h1 class="display-4">!Bienvenido!</h1>
        <p class="lead">
          Esta es la página de El Gato Vago, un refugio dedicado a 
           rescatar gatitos, si estas interesado en 
          adoptar un michi, estás en el lugar correcto. 
        </p>
        <hr class="my-4" />
        <p>
          Navega a través de nuestro sitio para ver los diferentes gatitos, 
          entre otras cosas.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Ver los michis
          </a>
        </p>
      </div>
      <div>
          <img src="https://img.wallpapersafari.com/desktop/728/410/8/52/Cak3c5.jpg" alt="gato" />
      </div>
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="bg-dark text-center text-white fixed-bottom">
        <div class="container p-3 pb-0">
          <section class="mb-2">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "#0c8599" }}
        >
          © 2021 El Gato Vago. Todos los derechos reservados.
          <a class="text-white" href="https://mdbootstrap.com/">
            
          </a>
        </div>
      </footer>
    </div>
  );
}

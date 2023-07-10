import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../config/userState";

export const NavBar = () => {
  const navigate = useNavigate();
  const destroyUserSession = userState((state) => state.removeSession);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div
            alt="menu"
            className="dropdown dropsend no-arrow iconNavs"
            id="menuIcon"
          >
            <div
              type="button"
              className="dropdown-toggle-no-caret"
              data-bs-toggle="dropdown"
            >
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <ul className="dropdown-menu dropdown-menu-start">
              <li>
                <Link to="/all-movies" className="dropdown-item">Todas las películas</Link>
              </li>
              <li>
                <Link to="/movie/create" className="dropdown-item">Agregar Película</Link>
              </li>
              <br />
              <li>
                <Link className="dropdown-item">Botón que no hace nada</Link>
              </li>
            </ul>
          </div>
          <div className="text-center mx-auto">
            <Link className="navbar-brand logo-hbo" to="/welcome">
              <img
                src="https://www.citypng.com/public/uploads/preview/hbo-max-white-logo-png-11663461912h0dosbsjoh.png"
                alt="logoHBO"
                width="120"
                height="40"
              />
            </Link>
          </div>

          <div>
            <div className="d-flex">
              <div className="iconNavs" alt="search" id="searchIcon">
                <ion-icon name="search-outline"></ion-icon>
              </div>

              <div
                alt="perfil"
                className="dropdown dropstart no-arrow iconNavs"
                id="perfilIcon"
              >
                <div
                  type="button"
                  className="dropdown-toggle-no-caret"
                  data-bs-toggle="dropdown"
                >
                  <ion-icon name="person-outline"></ion-icon>
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Mis Cosas</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Cambiar de perfil</Link>
                  </li>
                  <li>
                    <Link
                      to="/subscribe"
                      className="dropdown-item"
                    >
                      Actualizar perfil
                    </Link>
                  </li>
                  <br />
                  <li>
                    <div
                      onClick={async (e) => {
                        await destroyUserSession();
                        navigate("/");
                      }}
                      className="dropdown-item"
                      id="cerrarSesion"
                    >
                      Cerrar sesión
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

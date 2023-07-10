import React, { useState, useEffect } from "react";
import { CREATE_USER } from "../graphql/Mutation";
import { NavbarSubscribe } from "../components/NavbarSubscribe";
import { userState } from "../config/userState";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export const Subscribe = () => {
  const navigate = useNavigate();
  const setUserSession = userState((state) => state.addSession);
  const verifySession = userState((state) => state.session);

  //Variables globales
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState("")

  //Área de mutaciones
  const [createUser] = useMutation(CREATE_USER, {});


  return (
    <>
      <NavbarSubscribe />

      <div className="container creaCuenta">
        <div className="creaCuentaText" id="CreaTuCuenta">
          Crea tu cuenta
        </div>
        <div className="creaCuentaText">
          Accede a una biblioteca de entretenimiento genial, estés donde estés.
        </div>

        <div className="container formUser">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              await createUser({
                variables: { email, password },
              }).then(() => {
                setUserSession({ isValid: true})
                navigate("/home");
              }).catch((err) => {
                setIsValid("Error al crear el usuario")
                console.log(err)
              });
              //setear el state de la sesión para poder navegar a /home
            }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Dirección de correo electronico
              </label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                Nunca compartas tu correo con otra persona.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="containerbtnCreateAcc">
              <button
                type="submit"
                className="btn btn-primary InSub-suscrib"
                id="btnCreateAcc"
              >
                CREA TU CUENTA
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

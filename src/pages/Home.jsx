import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../graphql/Queries";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../config/userState";
import { Carousel } from "../components/Carousel";
import { CarouselMiLista } from "../components/CarouselMiLista";
import { useUserContext } from "../context/UsersContext";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  const contextUser = useUserContext();
  const navigate = useNavigate();
  const verifySession = userState((state) => state.session);
  console.log("Session from home", verifySession);


  useEffect(() => {
    if(!verifySession.isValid) {
      return navigate("/Login");
    }
  }, []);

  return (
    <>
      <div className=".container-sm main-container">
        <NavBar />
      </div>
      <Carousel />
      <div className=".container-sm main-container">
        <CarouselMiLista titleCarousel={`Continuar viendo`}/>
        <CarouselMiLista titleCarousel={`Solo para tí`} />      </div>
    </>
  );
};

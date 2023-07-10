import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userState } from "../config/userState";
import { Carousel } from "../components/Carousel";
import { CarouselMiLista } from "../components/CarouselMiLista";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  const navigate = useNavigate();
  const verifySession = userState((state) => state.session);
  console.log("Session from home", verifySession);


  useEffect(() => {
    if(!verifySession.isValid) {
      return navigate("/Login");
    }
    console.log(verifySession)
  }, [navigate, verifySession]);

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

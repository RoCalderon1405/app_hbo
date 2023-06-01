import React, { useEffect, useState } from "react";
import { userState } from "../config/userState";
import { useMovieContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";

export const CarouselMiLista = ({ titleCarousel }) => {
  const { searchMovies, data } = useMovieContext();
  const verifySession = userState((state) => state.session);

  useEffect(() => {
    if (!verifySession.isValid) {
      return;
    }
    searchMovies();
  }, [searchMovies]);

  return (
    <>
      <div className="container-title">
        <h5 className="tittle-carousel">
          {titleCarousel}{" "}
          <div className="containerFlecha">
            <ion-icon
              className="iconFlecha"
              name="chevron-forward-outline"
            ></ion-icon>
          </div>
        </h5>
      </div>
      <div className="container-carousel">
        {data &&
          data.getMovies.map(({  _id, tittle, image, description, likes, dateOfRelease }) => (
            <Link to={`/movie/${_id}`} 
            state={{ _id, tittle, image, description, likes, dateOfRelease }}
            className="elementCarousel" key={_id}>
              <img src={image} alt="" className="img-peliculasCarousel" />
              <div className="container-tittle-pelicula">
                <div className="tittle-pelicula-carousel">{tittle}</div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

import React, { useEffect, useState } from "react";

import { useMovieContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";

export const TodasMovies = () => {
  const { searchMovies, data } = useMovieContext();

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  if (data) {
    console.log(data);
  }

  return (
    <>
      <div className="container">
        {data &&
          data.getMovies.map(({ _id, tittle, image, description }) => (
            <Link
              to={`/movie/${_id}`}
              state={{ _id, tittle, image, description }}
              className="card"
              key={_id}
            >
              <div className="card-container">
                <div className="img-container">
                  <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{tittle}</h5>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

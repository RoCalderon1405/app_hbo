import React, { useEffect } from "react";

import { useMovieContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import { NavbarAllMovies } from "../components/NavbarAllMovies";

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
    <NavbarAllMovies/>
      <div className="container container-AllMovies">
        {data &&
          data.getMovies.map(({ _id, tittle, image, description, likes, dateOfRelease }) => (
            <Link
              to={`/movie/${_id}`}
              state={{ _id, tittle, image, description, likes, dateOfRelease }}
              className="card"
              key={_id}
            >
              <div className="card-container">
                <div className="img-container">
                  <img src={image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title__AllMovies">{tittle}</h5>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

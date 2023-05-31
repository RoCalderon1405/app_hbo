import React, { useState, createContext, useContext } from "react";
import { GET_MOVIES } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

const MoviesContext = createContext();

function MoviesProvider(props) {
  const [searchMovies, { data, error }] = useLazyQuery(GET_MOVIES);
  const [movie, setMovie] = useState("");


  const value = {
    searchMovies,
    data,
    error,
    movie,
    setMovie,
  };

  return (
    <MoviesContext.Provider value={value}>
      {props.children}
    </MoviesContext.Provider>
  );
}

const useMovieContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error(
      "useMovieContext must be used within a MoviesProvider. " +
        "Wrap a parent component in <MoviesProvider> to fix this error."
    );
  }
  return context;
};

export { useMovieContext, MoviesProvider };

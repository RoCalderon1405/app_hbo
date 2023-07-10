import React from "react";
import { GET_MOVIES } from "../graphql/Queries";
import { REMOVE_MOVIE } from "../graphql/Mutation";
import { NavbarMovieDetail } from "../components/NavbarMovieDetail";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

export const MovieDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, tittle, image, description, likes, dateOfRelease } =
    location.state;

  const [deleteMovie] = useMutation(REMOVE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }],
  });

    const handleDelete = async () => {
      const confirmed = window.confirm("¿Estás seguro de que quieres elminar esta película?")
      if(confirmed) {
        await deleteMovie({
          variables: { _id },
        });
        navigate("/all-movies");
      } else {
        return
      }
    };

  const imgCoverStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  };

  return (
    <>
      <NavbarMovieDetail />
      <div style={imgCoverStyle}></div>

      <div className="container MovieDetail-containerCard">
        <div className="ContainerCard-ContainerTitle">
          <div className="ContainerCard-ContainerTitle__Title">{tittle}</div>
        </div>

        <div className="ContainerCard__ContainerDescription">
          <div className="ContainerCard__ContainerDescription__Description">
            {description}
          </div>
          <div className="ContainerCard_ContainerDescription__Likes">
            Likes: {likes}
          </div>
          <div className="ContainerCard_ContainerDescription__dateOfRelease">
            Fecha de lanzamiento: {dateOfRelease}
          </div>
        </div>

        <div className="ContainerBtnMovie">
          <Link
            to={`/movie/update/${_id}`}
            state={{ _id, tittle, image, description, likes, dateOfRelease }}
            className="btn btn-warning ContainerBtn__btnUpdate"
          >
            Actualizar
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-danger MovieDetail-containerBtn__btnDelete"
          >
            <Link
              to="/all-movies"
              className="btn btn-danger MovieDetail-containerBtn__btnDelete"
            >
              Eliminar
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

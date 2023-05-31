import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MovieDetail = () => {
  const location = useLocation();
  const { _id, tittle, image, description } = location.state;

  const imgCoverStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0",
  };

  return (
    <>
      <div style={imgCoverStyle}></div>

      <div className="container MovieDetail-containerCard">
        <div className="ContainerCard-ContainerTitle">
          <div className="ContainerCard-ContainerTitle__Title">{tittle}</div>
        </div>

        <div className="ContainerCard__ContainerDescription">
          <div className="ContainerCard__ContainerDescription__Description">
            {description}
          </div>
        </div>

        <div className="ContainerBtnMovie">
          <Link
            to={`/movie/update/${_id}`}
            state={{ _id, tittle, image, description }}
            className="btn btn-warning ContainerBtn__btnUpdate"
          >
            Actualizar
          </Link>
          <Link
            to=""
            className="btn btn-danger MovieDetail-containerBtn__btnDelete"
          >
            Eliminar
          </Link>
        </div>
      </div>
    </>
  );
};

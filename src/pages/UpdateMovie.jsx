import React, { useState, useEffect } from "react";
import { UPDATE_MOVIE } from "../graphql/Mutation";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";

export const UpdateMovie = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState(0);
  const [dateOfRelease, setDateOfRelease] = useState("");
  const [_id, setId] = useState("second")

  const currentState = location.state;
  

  useEffect(() => {
    if (currentState) {
      setTittle(currentState.tittle);
      setDescription(currentState.description);
      setImage(currentState.image);
      setId(currentState._id);
    }
  }, []);

  const [updateMovie] = useMutation(UPDATE_MOVIE, {});

  return (
    <>
      <div>Actualiza la pelicula: {tittle}</div>
      <div className="container-formLogin__CreateMovie">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await updateMovie({
              variables: { _id, tittle, description, image, likes, dateOfRelease }
            });
            navigate("/all-movies");
          }}
        >
          <div className="mb-3">
            <label className="form-label_CreateMovie">Título</label>
            <input
              className="form-control__UptMovie"
              id="tittle"
              onChange={(e) => {
                setTittle(e.target.value);
                console.log(e.target.value);
              }}
              value={tittle}
            />
          </div>
          <div className="mb-3">
            <label className="form-label_CreateMovie">Descripción</label>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="form-control__UptMovie"
              id=""
              value={description}
            />
          </div>
          <div className="mb-3">
            <label className="form-label_CreateMovie">Likes</label>
            <input 
            onChange={(e) => {
                setLikes(e.target.value)
            }}
            className="form-control__UptMovie" id="" type="Number" />
          </div>
          <div className="mb-3">
            <label className="form-label_CreateMovie">Imagen URL</label>
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              className="form-control__UptMovie"
              id=""
              value={image}
            />
          </div>
          <div className="mb-3">
            <label className="form-label_CreateMovie">
              Fecha de lanzamiento
            </label>
            <input
              onChange={(e) => {
                setDateOfRelease(e.target.value);
              }}
              className="form-control__UptMovie"
              id=""
            />
          </div>

          <div className="ContainerBtn-UptMovie">
            <button
              type="submit"
              className="btn btn-primary ContainerBtn-UptMovie__btn"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

import React, { useState } from "react";
import { CREATE_MOVIE } from "../graphql/Mutation";
import { GET_MOVIES } from "../graphql/Queries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { NavbarMovieCreate } from "../components/NavbarMovieCreate";

export const CreateMovie = () => {
  const navigate = useNavigate();

  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState("");
  const [dateOfRelease, setDateOfRelease] = useState("");

  const [createMovie] = useMutation(CREATE_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }]
  });

  return (
    <>
      <NavbarMovieCreate />

      <div>Agrega una película</div>
      <div className="container-formLogin__CreateMovie">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await createMovie({
              variables: { tittle, description, image, likes, dateOfRelease },
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
              }}
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
            />
          </div>
          <div className="mb-3">
            <label className="form-label_CreateMovie">Likes</label>
            <input
              onChange={(e) => {
                setLikes(e.target.value);
              }}
              className="form-control__UptMovie"
              id=""
              type="Number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label_CreateMovie">Imagen URL</label>
            <input
              onChange={(e) => {
                setImage(e.target.value);
              }}
              className="form-control__UptMovie"
              id=""
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
              Agregar película
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

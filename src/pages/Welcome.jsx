import React from "react";
import { NavbarWelcome } from "../components/NavbarWelcome";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <>
      <NavbarWelcome />
      <div className="img-coverWelcome">
        <div className="container welcome-container">
          <div className="hero-content">
            <img
              src="https://hbomax-images.warnermediacdn.com/2023-04/lock%20up%20SPA.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"
              alt=""
              className="logoAhorra"
            />
          <Link
            className="btn btn-primary InSub-suscrib"
            to="/subscribe"
            id="InSub-suscribAhorra"
          >
            SUSCRÍBETE AHORA
          </Link>
          <div>*aplica al plan prepago anual</div>
          </div>
        </div>
      </div>
    </>
  );
};

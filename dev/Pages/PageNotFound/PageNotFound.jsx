import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className='PageNotFound container'>
      <div>
        <h2>Oops!. ¿Estas perdido?</h2>
        <p>
          Error 404. No pudimos conseguir esta ruta para ti, intenta regresar al <Link to={"/"}>Inicio</Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;

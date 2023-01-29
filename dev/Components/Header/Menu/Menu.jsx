import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

import { UserLogInContext } from "../../../Context/UserLogInContext";
import CartButton from "./CartButton/CartButton";

const Menu = ({ menuStatus }) => {
  const { CUT } = useContext(UserLogInContext);

  return (
    <nav className={menuStatus ? "Menu active" : "Menu"}>
      <ul>
        {!CUT.token ? (
          <>
            <li>
              <Link to={"/login"} className={"btn"}>
                Iniciar Sesion
              </Link>
            </li>
            <li>
              <Link to={"/signin"} className={"btn"}>
                Crear Cuenta
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/profile"} className={"btn"}>
                Perfil
              </Link>
            </li>
            <li>
              <Link to={"/logout"} className={"btn"}>
                Cerrar Session
              </Link>
            </li>
          </>
        )}
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

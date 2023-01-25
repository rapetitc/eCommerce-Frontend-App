import React from "react";
import { Link } from "react-router-dom";
import "./TitlePage.scss";

import logo from "../../../../public/logo.png";

const TitlePage = () => {
  return (
    <Link to={"/"} className='TitlePage'>
      <img src={logo} alt='eCommerce Logo' />
      <h1>eCommerce</h1>
    </Link>
  );
};

export default TitlePage;

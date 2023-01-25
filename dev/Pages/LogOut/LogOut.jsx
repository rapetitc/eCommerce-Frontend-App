import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LogOut.scss";

import { UserLogInContext } from "../../Context/UserLogInContext";

const LogOut = () => {
  const { handlerCredentials } = useContext(UserLogInContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (handlerCredentials(false)) {
      navigate("/");
    }
  }, []);

  return <div className='LogOut container'>Logging Out</div>;
};

export default LogOut;

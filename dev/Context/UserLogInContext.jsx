import React, { useState, useEffect, createContext } from "react";
import usersdb from "../src/users.json";

const checkCredentials = ({ username, password }) => {
  let response = false;
  for (const key in usersdb) {
    let user = usersdb[key];
    if (username === user.username && password === user.password) {
      response = true;
    }
  }
  return response;
};

const generateCUToken = (isLogingIn) => {
  const infoGenerated = {
    browser: navigator.appCodeName,
    token: isLogingIn ? 151515151515 : null,
    date: new Date(),
  };
  return infoGenerated;
};
const getCUTFromBrowser = () => {
  const CUTLS = localStorage.getItem("CUTLS");
  if (CUTLS === null) {
    const tempCUT = generateCUToken();
    localStorage.setItem("CUTLS", JSON.stringify(tempCUT));
    return tempCUT;
  } else {
    return JSON.parse(CUTLS);
  }
};

export const UserLogInContext = createContext();
const UserLogInProvider = ({ children }) => {
  const [CUT, setCUT] = useState(getCUTFromBrowser());

  const handlerCredentials = (isLogingIn, credentials) => {
    if (isLogingIn) {
      if (checkCredentials(credentials)) {
        setCUT(generateCUToken(isLogingIn));
        return true;
      }
      return false;
    }
    setCUT(generateCUToken(isLogingIn));
    return true;
  };

  const updatingCUTInBrowser = (CUT) => {
    localStorage.setItem("CUTLS", JSON.stringify(CUT));
  };

  const data = { CUT, handlerCredentials };

  useEffect(() => {
    updatingCUTInBrowser(CUT);
  }, [CUT]);

  return <UserLogInContext.Provider value={data}>{children}</UserLogInContext.Provider>;
};

export default UserLogInProvider;

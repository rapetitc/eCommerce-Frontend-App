import React, { useState } from "react";
import "./Header.scss";

import TitlePage from "./TitlePage/TitlePage";
import SearchBar from "./SearchBar/SearchBar";
import MenuController from "./MenuController/MenuController";
import Menu from "./Menu/Menu";

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <header className='header'>
      <div>
        <MenuController menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
        <TitlePage />
      </div>
      <SearchBar />
      <Menu menuStatus={menuStatus} />
    </header>
  );
};

export default Header;

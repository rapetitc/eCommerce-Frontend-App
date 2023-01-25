import React from "react";
import "./Main.scss";

import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import Slider from "../../Components/Slider/Slider";

const Main = () => {
  return (
    <main className='container'>
      <Slider />
      <br />
      <ItemListContainer></ItemListContainer>
    </main>
  );
};

export default Main;

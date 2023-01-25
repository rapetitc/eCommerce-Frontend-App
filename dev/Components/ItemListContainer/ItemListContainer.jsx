import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.scss";

import db from "../../src/db";

const ItemListContainer = () => {
  const [productItems, setProductItems] = useState([]);

  db.getItemsFrom("products", (data) => {
    setProductItems(data);
  });

  return (
    <div className='ItemListContainer'>
      <p>Items encontrados: {productItems.length}</p>
      {productItems.length > 0
        ? productItems.map((item, i) => {
            return (
              <Link to={"/product/" + item.id} className='item' key={i}>
                <div className='itemImg'>
                  <img src={item.thumbnail} alt='#' />
                </div>
                <div className='itemBody'>
                  <h3 className='item-title'>{item.title}</h3>
                  <p className='item-price'>${item.price}</p>
                  <p className='item-offer'>${item.price - 200}</p>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default ItemListContainer;

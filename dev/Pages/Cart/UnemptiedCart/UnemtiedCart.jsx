import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./UnemtiedCart.scss";

import ItemCounter from "../../../Components/ItemCounter/ItemCounter";

import { CartContext } from "../../../Context/CartContext";

const UnemptiedCart = ({ fullCart }) => {
  const { clearCart } = useContext(CartContext);

  return (
    <div className='UnemptiedCart'>
      <p>
        Se {fullCart.length > 1 ? "han" : "ha"} encontrado {fullCart.length} {fullCart.length > 1 ? "articulos" : "articulo"} en el carrito
      </p>
      <div className='buttons'>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
      {fullCart.map((item, i) => {
        return (
          <div className='cartItem' key={i}>
            <div className='cartItem-ImgPreview'>
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className='cartItem-Body'>
              <Link to={"/product/" + item.id} className='btn'>
                <h4>{item.title}</h4>
              </Link>
              <p>{item.description}</p>
              <ItemCounter id={item.id} />
              <p>Precio: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UnemptiedCart;

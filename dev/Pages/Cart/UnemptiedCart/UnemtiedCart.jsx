import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../../../Components/ItemCounter/ItemCounter";

import { CartContext } from "../../../Context/CartContext";

import db from "../../../src/db";

const UnemptiedCart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [fullCart, setFullCart] = useState([]);

  console.log('cargando');

  useEffect(() => {
    db.getItemsFrom("products", (db) => {
      const tempData = [];
      cart.forEach((item) => {
        const result = db.find((product) => {
          return product.id === item.id;
        });
        if (result) {
          tempData.push({ ...result, quantity: item.quantity });
        }
      });
      setFullCart(tempData);
    });
  }, [cart]);

  return (
    <div className='sectionBody'>
      <button onClick={clearCart}>Eliminar todo el carrito</button>
      <p>
        Se {fullCart.length > 1 ? "han" : "ha"} encontrado {fullCart.length} {fullCart.length > 1 ? "articulos" : "articulo"} en el carrito
      </p>
      {fullCart.map((item, i) => {
        return (
          <div className='cartItem' key={i}>
            <div className='cartItem-ImgPreview'>
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className='cartItem-Body'>
              <Link to={"/product/" + item.id}>
                <h4>{item.title}</h4>
              </Link>
              <p>{item.description}</p>
              <ItemCounter id={item.id} />
              <p>Precio: ${item.price}</p>
              <p>Total a pagar: ${item.price * item.quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UnemptiedCart;

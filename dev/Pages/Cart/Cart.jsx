import React, { useState, useEffect, useContext } from "react";
import "./Cart.scss";

import { CartContext } from "../../Context/CartContext";

import EmptyCart from "./EmptyCart/EmptyCart";
import UnemptiedCart from "./UnemptiedCart/UnemtiedCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, getFullCartDetails } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fullCart, setFullCart] = useState([]);
  const navigate = useNavigate()

  const handlerCheckout = () => {
    navigate('/checkout')
  };

  useEffect(() => {
    getFullCartDetails().then((data) => {
      let totalPriceCounter = 0;
      data.forEach(({ price, quantity }) => {
        totalPriceCounter += parseInt(price * quantity);
      });
      setTotalPrice(totalPriceCounter);
      setFullCart(data);
    });
  }, [cart]);

  return (
    <div className='Cart container'>
      <div className='section'>
        <div className='sectionHeader'>
          <div className='sectionHeaderTitle'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-card-list' viewBox='0 0 16 16'>
              <path d='M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z' />
              <path d='M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z' />
            </svg>
            <h3>Resumen de la orden</h3>
          </div>
        </div>
        <div className='sectionBody'>{fullCart.length > 0 ? <UnemptiedCart fullCart={fullCart} /> : <EmptyCart />}</div>
        {fullCart.length > 0 ? (
          <div className='sectionFooter'>
            <p>Total a pagar: ${totalPrice}</p>
            <div>
              <button onClick={handlerCheckout}>Continuar</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;

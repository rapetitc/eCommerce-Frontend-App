import React, { useState, useEffect, useContext } from "react";
import "./ItemCounter.scss";

import { CartContext } from "../../Context/CartContext";

const confirmQ = (cart, id) => {
  const itemToCheck = cart.find((item) => item.id == id);
  if (itemToCheck) {
    return itemToCheck.quantity;
  } else {
    return 0;
  }
};

const ItemCounter = ({ id }) => {
  const { cart, handlerCart } = useContext(CartContext);

  const [countQuantity, setCountQuantity] = useState(confirmQ(cart, id));

  console.log("Confirmando", id, "Cantidad", confirmQ(cart, id));

  const handlerCounter = (isAdding) => {
    if (isAdding) {
      if (countQuantity < 10) {
        setCountQuantity(countQuantity + 1);
      }
    } else {
      if (countQuantity > 0) {
        setCountQuantity(countQuantity - 1);
      }
    }
  };

  useEffect(() => {
    handlerCart(parseInt(id), countQuantity);
  }, [countQuantity]);

  return (
    <div className='ItemCounter'>
      <button
        onClick={() => {
          handlerCounter(false);
        }}
      >
        {countQuantity > 1 ? (
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-bag-dash' viewBox='0 0 16 16'>
            <path fillRule='evenodd' d='M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z' />
            <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
          </svg>
        ) : (
          <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-trash' viewBox='0 0 16 16'>
            <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
            <path fillRule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z' />
          </svg>
        )}
      </button>
      <input type='text' value={countQuantity} readOnly />
      <button
        onClick={() => {
          handlerCounter(true);
        }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' className='bi bi-bag-plus' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z' />
          <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
        </svg>
      </button>
    </div>
  );
};

export default ItemCounter;

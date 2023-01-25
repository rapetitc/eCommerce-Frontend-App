import React, { useState, useEffect, createContext } from "react";

const getCartFromBrowser = () => {
  const CTLS = localStorage.getItem("CTLS");
  if (CTLS === null) {
    localStorage.setItem("CTLS", JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(CTLS);
  }
};

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromBrowser());

  const handlerCart = (id, quantity) => {
    const itemToCheck = cart.find((item) => item.id === id);

    if (itemToCheck) {
      let tempCart = [...cart];
      if (quantity > 0) {
        tempCart[tempCart.indexOf(itemToCheck)].quantity = quantity;
      } else {
        tempCart = tempCart.filter((item) => item !== tempCart[tempCart.indexOf(itemToCheck)]);
      }
      setCart(tempCart);
    } else {
      if (quantity > 0) {
        setCart([{ id, quantity }, ...cart]);
      }
    }
  };
  
  const clearCart = () => {
    setCart([]);
  };

  const updateCartInBrowser = (cart) => {
    localStorage.setItem("CTLS", JSON.stringify(cart));
  };

  const data = { cart, handlerCart, clearCart };

  useEffect(() => {
    updateCartInBrowser(cart);
  }, [cart]);

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

import React, { useState, useEffect, createContext } from "react";
import db from "../src/db";

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
  const [totalUnitQ, setTotalUnitQ] = useState(0);

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

  const handlerTotalUnitQ = () => {
    if (cart.length > 0) {
      let totalQ = 0;
      cart.forEach((item) => {
        totalQ += item.quantity;
      });
      setTotalUnitQ(totalQ);
    }
  };

  const getFullCartDetails = async () => {
    const data = [];
    for (const item of cart) {
      const prod = await db.getItemByIdFrom(item.id, "products");
      const prodF = { ...prod, ...item };
      data.push(prodF);
    }
    return data;
  };

  const getQuantityById = (id) => {
    const itemToCheck = cart.find((item) => item.id == id);
    return itemToCheck ? itemToCheck.quantity : 0;
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateCartInBrowser = (cart) => {
    localStorage.setItem("CTLS", JSON.stringify(cart));
  };

  const data = { cart, handlerCart, getFullCartDetails, totalUnitQ, getQuantityById, clearCart };

  useEffect(() => {
    updateCartInBrowser(cart);
    handlerTotalUnitQ();
    //getFullCartDetails();
  }, [cart]);

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;

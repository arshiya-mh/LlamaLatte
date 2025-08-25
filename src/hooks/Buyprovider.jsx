import React, { createContext, useMemo, useState } from "react";

export const Buytbt = createContext();

export const BuytbtProvider = ({ children }) => {
  // ساختار سبد: { [id]: {id,title,price,img,qty} }
  const [cart, setCart] = useState({});

  const addItem = (item) => {
    setCart(prev => {
      const id = item.id;
      const existing = prev[id];
      const nextQty = existing ? existing.qty + 1 : 1;
      return { ...prev, [id]: { ...item, qty: nextQty } };
    });
  };

  const increment = (id) => {
    setCart(prev => {
      const it = prev[id];
      if (!it) return prev;
      return { ...prev, [id]: { ...it, qty: it.qty + 1 } };
    });
  };

  const decrement = (id) => {
    setCart(prev => {
      const it = prev[id];
      if (!it) return prev;
      const nextQty = it.qty - 1;
      if (nextQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...it, qty: nextQty } };
    });
  };

  const removeItem = (id) => {
    setCart(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const clearCart = () => setCart({});

  const totalCount = useMemo(
    () => Object.values(cart).reduce((sum, it) => sum + it.qty, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => Object.values(cart).reduce((sum, it) => sum + it.qty * it.price, 0),
    [cart]
  );

  const isEmpty = useMemo(() => Object.keys(cart).length === 0, [cart]);

  const isInCart = (id) => Boolean(cart[id]);

  return (
    <Buytbt.Provider
      value={{
        cart,
        addItem,
        increment,
        decrement,
        removeItem,
        clearCart,
        totalCount,
        totalPrice,
        isEmpty,
        isInCart,
      }}
    >
      {children}
    </Buytbt.Provider>
  );
};

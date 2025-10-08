import { CartContext } from "./CartContext";
import { useState } from "react";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const match = cart.find((sameItem) => sameItem.id === item.id);

    if (match) {
      const updatedCount = match.count + item.count;

      // Si la cantidad llega a 0 o menos, lo quitamos del carrito
      if (updatedCount <= 0) {
        setCart(cart.filter((sameItem) => sameItem.id !== item.id));
      } else {
        setCart(
          cart.map((sameItem) =>
            sameItem.id === item.id
              ? { ...sameItem, count: updatedCount }
              : sameItem
          )
        );
      }
    } else if (item.count > 0) {
      // Si no existe y count es positivo, lo agregamos
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const cartAmount = () => {
    const amount = cart.map((item) => item.count);
    const total = amount.reduce((acc, cur) => acc + cur, 0);
    return total;
  };

  const cartTotal = () => {
    const subtotals = cart.map((item) => item.price * item.count);
    const total = subtotals.reduce((acc, cur) => acc + cur, 0);
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartAmount,
        clearCart,
        cartTotal,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

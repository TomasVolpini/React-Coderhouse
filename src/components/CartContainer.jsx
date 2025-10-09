import { CartContext } from "./CartContext";
import { useContext } from "react";

import { useNavigate } from "react-router";
import CartItem from "./CartItem";

import styles from "../styles/CartContainer.module.css";

export default function CartContainer() {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal } =
    useContext(CartContext);

  const handleAdd = (item) => {
    addToCart({ ...item, count: 1 });
  };

  const handleSub = (item) => {
    addToCart({ ...item, count: -1 });
  };

  const handleTrash = (item) => {
    removeFromCart(item.id);
  };

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className={styles["cart-container"]}>
        <div>Cart is empty</div>
        <div>
          <button onClick={() => navigate("/")}>Go back</button>
        </div>
      </div>
    );
  }

  const total = cartTotal();

  return (
    <div className={styles["cart-container"]}>
      <CartItem
        cart={cart}
        handleAdd={handleAdd}
        handleSub={handleSub}
        handleTrash={handleTrash}
        clearCart={clearCart}
        navigate={navigate}
        total={total}
      ></CartItem>
    </div>
  );
}

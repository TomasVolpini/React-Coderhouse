import { CartContext } from "./CartContext";
import { useContext } from "react";
import ItemCounter from "./ItemCounter";
import { useNavigate } from "react-router";

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
      {cart.map((item) => (
        <div className={styles["cart-card"]} key={item.id}>
          <div className={styles["cart-card-img"]}>
            <img src={item.img} className={styles["item-thumbnail"]}></img>
          </div>
          <div className={styles["cart-card-info"]}>
            <div className={styles["cart-card-info-name"]}>{item.name}</div>
            <div className={styles["cart-card-info-price"]}>
              ${item.price * item.count}
            </div>
          </div>
          <div className={styles["cart-card-buttons"]}>
            <ItemCounter
              count={item.count}
              handleAdd={() => handleAdd(item)}
              handleSub={() => handleSub(item)}
              limit={0}
            ></ItemCounter>
            <button
              className={styles["cart-card-buttons-button"]}
              onClick={() => handleTrash(item)}
            >
              Remove item
            </button>
          </div>
        </div>
      ))}
      <div className={styles["cart-total"]}> Total ${total}</div>
      <div className={styles["cart-buttons"]}>
        <button onClick={clearCart}>Remove all items</button>
        <button onClick={() => navigate("/checkout")}>Go to checkout</button>
      </div>
    </div>
  );
}

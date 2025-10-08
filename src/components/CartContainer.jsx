import { CartContext } from "./CartContext";
import { useContext } from "react";
import ItemCounter from "./ItemCounter";
import { useNavigate } from "react-router";

import styles from "../styles/CartContainer.module.css";

export default function CartContainer() {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal } =
    useContext(CartContext);

  const handleAdd = (item) => {
    addToCart({ ...item, count: 1 }); // suma 1
  };

  const handleSub = (item) => {
    addToCart({ ...item, count: -1 }); // resta 1
  };

  const handleTrash = (item) => {
    removeFromCart(item.id);
  };

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <>
        <div>Cart is empty</div>
        <button onClick={() => navigate("/")}>Go back</button>
      </>
    );
  }

  const total = cartTotal();

  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.img} className={styles["item-thumbnail"]}></img>
          <div>{item.name}</div>
          <div>${item.price * item.count}</div>
          <ItemCounter
            count={item.count}
            handleAdd={() => handleAdd(item)}
            handleSub={() => handleSub(item)}
            limit={0}
          ></ItemCounter>
          <button onClick={() => handleTrash(item)}>Trash</button>
        </div>
      ))}
      <div>{total}</div>
      <button onClick={clearCart}>Trash all</button>
      <button onClick={() => navigate("/checkout")}>Go to checkout</button>
    </>
  );
}

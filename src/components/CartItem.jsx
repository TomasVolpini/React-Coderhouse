import ItemCounter from "./ItemCounter";
import styles from "../styles/CartContainer.module.css";

export default function CartItem({
  cart,
  handleAdd,
  handleSub,
  handleTrash,
  clearCart,
  navigate,
  total,
}) {
  return (
    <>
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
    </>
  );
}

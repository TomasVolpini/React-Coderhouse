import styles from "../styles/ItemDetail.module.css";
import ItemCounter from "./ItemCounter";

export default function ItemDetail({
  item,
  handleAddToCart,
  count,
  handleSub,
  handleAdd,
}) {
  return (
    <div className={styles["detail-container"]}>
      <img className={styles["item-thumbnail"]} src={item.img} alt="" />
      <div className={styles["item-right"]}>
        <p className={styles["item-title"]}>{item.name}</p>
        <p className={styles["item-price"]}>${item.price}</p>
        <p className={styles["item-desc"]}>{item.desc}</p>
        <ItemCounter
          count={count}
          handleSub={handleSub}
          handleAdd={handleAdd}
          limit={1}
        ></ItemCounter>
        <div>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

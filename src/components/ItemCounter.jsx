import styles from "../styles/ItemDetail.module.css";

export default function ItemCounter({ count, handleAdd, handleSub, limit }) {
  return (
    <div className={styles["item-counter"]}>
      <button onClick={handleSub} disabled={count === limit}>
        -
      </button>
      <div>{count}</div>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

import styles from "../styles/ItemCounter.module.css";

export default function ItemCounter({ count, handleAdd, handleSub, limit }) {
  return (
    <div className={styles["item-counter"]}>
      <button
        className={styles["counter-button"]}
        onClick={handleSub}
        disabled={count === limit}
      >
        -
      </button>
      <div>{count}</div>
      <button className={styles["counter-button"]} onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

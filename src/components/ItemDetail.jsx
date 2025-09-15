import styles from "../styles/ItemDetail.module.css";

export default function ItemDetail({ item }) {
  return (
    <div className={styles["detail-container"]}>
      <img className={styles["item-thumbnail"]} src={item.thumbnail} alt="" />
      <div className={styles["item-right"]}>
        <p className={styles["item-title"]}>{item.title}</p>
        <p className={styles["item-price"]}>${item.price}</p>
        <p className={styles["item-desc"]}>{item.description}</p>
      </div>
    </div>
  );
}

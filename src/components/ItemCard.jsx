import styles from "../styles/ItemCard.module.css";
import { Link } from "react-router";

export default function ItemCard({ items }) {
  return items.map((item) => (
    <div key={item.id} className={styles["item-card"]}>
      <div className={styles["card-img"]}>
        <img className={styles["item-thumbnail"]} src={item.img} alt="" />
      </div>
      <div className={styles["card-text"]}>
        <p className={styles["item-title"]}>{item.name}</p>
        <p className={styles["item-price"]}>${item.price}</p>
        <Link className={styles["link"]} to={`/item/${item.id}`}>
          See more
        </Link>
      </div>
    </div>
  ));
}

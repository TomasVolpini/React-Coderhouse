import ItemCard from "./ItemCard";
import styles from "../styles/ItemCard.module.css";

export default function ItemList({ items }) {
  return (
    <div className={styles["item-list"]}>
      <ItemCard items={items}></ItemCard>
    </div>
  );
}

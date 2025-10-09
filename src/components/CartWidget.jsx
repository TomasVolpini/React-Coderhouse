import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import styles from "../styles/CartWidget.module.css";

export default function CartWidget() {
  const { cartAmount } = useContext(CartContext);
  const amount = cartAmount();
  const navigate = useNavigate();
  return (
    <button className={styles["cart"]} onClick={() => navigate("/cart")}>
      🛒 {amount}
    </button>
  );
}

import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import CheckoutForm from "./CheckoutForm";
import styles from "../styles/CheckoutContainer.module.css";

export default function CheckoutContainer() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setShowMessage(true);

      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, []);

  if (cart.length === 0 && showMessage) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>😅 Oops...</h2>
        <p>
          You shouldn't have been able to reach this page with an empty cart.
          <br />
          Redirecting to the homepage in {countdown}...
        </p>
      </div>
    );
  }

  return (
    <div className={styles["checkout-container"]}>
      <CheckoutForm></CheckoutForm>
    </div>
  );
}

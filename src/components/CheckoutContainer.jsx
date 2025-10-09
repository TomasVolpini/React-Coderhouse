import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import CheckoutForm from "./CheckoutForm";
import styles from "../styles/CheckoutContainer.module.css";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import toast from "react-hot-toast";

export default function CheckoutContainer() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const order = {
      buyer: { name, email, phone },
      total: cartTotal(),
      items: cart,
      date: serverTimestamp(),
    };

    const orderPromise = createOrder(order);
    toast.promise(orderPromise, {
      loading: "Order in process...",
      success: (orderData) => (
        <b>Your order has been processed! Your code is: {orderData.id}</b>
      ),
      error: <b>Something went wrong, please try again</b>,
    });
    const orderResult = await orderPromise;
    if (orderResult) {
      clearCart();
      navigate("/checkout-success");
    }
  };

  return (
    <div className={styles["checkout-container"]}>
      <CheckoutForm handleSubmit={handleSubmit}></CheckoutForm>
    </div>
  );
}

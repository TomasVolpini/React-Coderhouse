import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import styles from "../styles/CheckoutContainer.module.css";

export default function CheckoutForm() {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
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
    <form className={styles.checkoutForm} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Checkout</h2>

      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" required />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit Order
      </button>
    </form>
  );
}

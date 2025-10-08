import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" required />
      </label>

      <label>
        Email:
        <input name="email" type="email" required />
      </label>

      <label>
        Phone:
        <input name="phone" type="tel" required />
      </label>

      <button type="submit">Submit Order</button>
    </form>
  );
}

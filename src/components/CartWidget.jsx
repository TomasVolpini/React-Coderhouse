import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

export default function CartWidget() {
  const { cartAmount } = useContext(CartContext);
  const amount = cartAmount();
  const navigate = useNavigate();
  return <button onClick={() => navigate("/cart")}>🛒 {amount}</button>;
}

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function CheckoutSuccess() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
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
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Yay!</h2>
      <p>
        Your order has been successfully saved 😉
        <br />
        Redirecting to the homepage in {countdown}...
      </p>
    </div>
  );
}

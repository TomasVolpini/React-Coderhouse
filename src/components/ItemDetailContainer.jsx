import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../firebase/db";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import toast from "react-hot-toast";

export default function ItemDetailContainer() {
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const { id } = useParams();

  const handleAddToCart = () => {
    addToCart({ ...item, count });
    toast.success(`Added to cart!`);
  };

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, []);

  const handleSub = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading product detail...</p>
      ) : (
        <ItemDetail
          item={item}
          count={count}
          handleAddToCart={handleAddToCart}
          handleSub={handleSub}
          handleAdd={handleAdd}
        ></ItemDetail>
      )}
    </>
  );
}

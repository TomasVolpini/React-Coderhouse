import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getAllProducts, getProductsByCat } from "../firebase/db";

export default function ItemListContainer() {
  const [items, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { categ } = useParams();

  useEffect(() => {
    setLoading(true);
    categ
      ? getProductsByCat(categ)
          .then((data) => setItem(data))
          .finally(() => setLoading(false))
      : getAllProducts()
          .then((data) => setItem(data))
          .finally(() => setLoading(false));
  }, [categ]);

  return (
    <>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <ItemList items={items}></ItemList>
      )}
    </>
  );
}

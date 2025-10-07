import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getAllProducts, getProductsByCat } from "../firebase/db";

export default function ItemListContainer() {
  const [items, setItem] = useState([]);
  const { categ } = useParams();

  useEffect(() => {
    categ
      ? getProductsByCat(categ).then((data) => setItem(data))
      : getAllProducts().then((data) => setItem(data));
  }, [categ]);

  return <ItemList items={items}></ItemList>;
}

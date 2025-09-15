import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function ItemListContainer() {
  const [items, setItem] = useState([]);
  const { categ } = useParams();

  useEffect(() => {
    const urlAll = "https://dummyjson.com/products";
    const urlCateg = `https://dummyjson.com/products/category/${categ}`;

    fetch(categ ? urlCateg : urlAll)
      .then((res) => res.json())
      .then((data) => setItem(data.products));
  }, [categ]);

  return <ItemList items={items}></ItemList>;
}

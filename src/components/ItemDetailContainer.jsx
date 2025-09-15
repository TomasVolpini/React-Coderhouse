import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const urlItem = `https://dummyjson.com/products/${id}`;

    fetch(urlItem)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return <ItemDetail item={item}></ItemDetail>;
}

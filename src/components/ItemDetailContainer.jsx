import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../firebase/db";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((data) => setItem(data));
  }, []);

  return <ItemDetail item={item}></ItemDetail>;
}

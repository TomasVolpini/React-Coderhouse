import ItemCard from "./ItemCard";
import ContenedorFlex from "./ContenedorFlex";

export default function ItemList({ items }) {

  return (
    <ContenedorFlex>
        <ItemCard items={items}></ItemCard>
    </ContenedorFlex>
  );
}

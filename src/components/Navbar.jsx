import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import { useLocation } from "react-router";

export default function Navbar({ categs, onChange, onClick, isDetailPage }) {
  return (
    <nav>
      <div id="nav-logo" onClick={onClick}>
        Tiendita Genérica
      </div>
      {!isDetailPage && <CategoryList categs={categs} onChange={onChange} />}
      <CartWidget />
    </nav>
  );
}

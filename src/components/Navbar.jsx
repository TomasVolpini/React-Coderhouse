import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";

export default function Navbar({ categs, onChange, onClick, showElement }) {
  return (
    <nav>
      <div id="nav-logo" onClick={onClick}>
        Blumix
      </div>
      {showElement && <CategoryList categs={categs} onChange={onChange} />}
      <CartWidget />
    </nav>
  );
}

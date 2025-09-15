import CartWidget from "./CartWidget";

export default function Navbar({ categs, onChange }) {
  return (
    <nav>
      <div>Tiendita Genérica</div>
      <select
        name="categs"
        id="categs"
        defaultValue="defect"
        onChange={onChange}
      >
        <option value="defect">Elija una categoría</option>
        {categs.map((categ) => (
          <option key={categ} value={categ}>
            {categ}
          </option>
        ))}
      </select>
      <CartWidget />
    </nav>
  );
}

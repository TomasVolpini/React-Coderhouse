import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <nav>
      <div>TodoMotor Quilmes</div>
      <ul>
        <li>Juntas de Motor</li>
        <li>Componentes de Motor</li>
        <li>Bombas</li>
      </ul>
      <CartWidget />
    </nav>
  );
}

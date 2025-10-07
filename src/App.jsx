import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import NavbarContainer from "./components/NavbarContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavbarContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categ" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

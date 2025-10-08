import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import NavbarContainer from "./components/NavbarContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./components/CartProvider";
import CartContainer from "./components/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer";
import CheckoutSuccess from "./components/CheckoutSuccess";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>

      <CartProvider>
        <BrowserRouter>
          <NavbarContainer />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categ" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

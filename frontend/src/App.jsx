import "./App.css";
import ProductItem from "./components/ProductItem";
import { Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Shop />} />
        {/* <Route path="/success" element={<Success />} /> */}
      </Routes>
    </CartProvider>
  );
}

export default App;

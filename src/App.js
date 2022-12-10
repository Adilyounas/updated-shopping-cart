import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./style/header.scss";
import "./style/home.scss";
import "./style/cart.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;

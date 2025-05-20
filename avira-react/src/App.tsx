import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import ProductsPage from "./components/ProductsPage";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

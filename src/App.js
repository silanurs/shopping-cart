import { Routes, Route, Link}  from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import Products from "./pages/Shopping.js"
import 'bootstrap/dist/css/bootstrap.css';
import Product from "./pages/product.js"
import Cart from "./pages/cart.js"
import NotFound from "./pages/NotFound.js"


const App = () => {
  return (
    <div>
     <nav className="container-fluid">
        <h1 className="brand"><strong>CosmetiCo</strong></h1>
        <Link to="/">Home</Link>
        <Link to="products">Shopping</Link>
        <Link  to="cart" className="fa-solid fa-basket-shopping"></Link>
     </nav>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:id" element={<Product/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
     </Routes>
    </div>
  );
};

export default App;
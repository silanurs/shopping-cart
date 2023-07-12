import { Routes, Route, Link}  from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import Products from "./pages/Shopping.js"
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div>
     <nav className="container-fluid">
        <h1 className="brand"><strong>CosmetiCo</strong></h1>
        <Link to="/">Home</Link>
        <Link to="products">Shopping</Link>
        <i class="fa-solid fa-basket-shopping"></i>
     </nav>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
     </Routes>
    </div>
  );
};

export default App;
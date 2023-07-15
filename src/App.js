import { Routes, Route, NavLink}  from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import Products from "./pages/Shopping.js"
import 'bootstrap/dist/css/bootstrap.css';
import Product from "./pages/product.js"
import Cart from "./pages/cart.js"
import NotFound from "./pages/NotFound.js"
import product1 from "./imgs/shopping-imgs/product1.jpg"
import product2 from "./imgs/shopping-imgs/product2.jpg"
import product3 from "./imgs/shopping-imgs/product3.jpg"
import product4 from "./imgs/shopping-imgs/product4.jpg"
import product5 from "./imgs/shopping-imgs/product5.jpg"
import product6 from "./imgs/shopping-imgs/product6.jpg"
import product7 from "./imgs/shopping-imgs/product7.jpg"
import product8 from "./imgs/shopping-imgs/product8.jpg"
import product9 from "./imgs/shopping-imgs/product9.jpg"
import product10 from "./imgs/shopping-imgs/product10.jpg"
import product11 from "./imgs/shopping-imgs/product11.jpg"
import product12 from "./imgs/shopping-imgs/product12.jpg"
import { useState } from "react";


const App = () => {
  const [cart, setCart] = useState([ ]);

  const images =[
    { id:"/products/AHA-BHA Serum", src:product1, title:"AHA-BHA Serum", price:"5$"},
    { id:"/products/Glycolic Acid Serum", src:product2, title:"Glycolic Acid Serum", price:"6$"},
    { id:"/products/Vitamin C", src:product3, title:"Vitamin C", price:"5$"},
    { id:"/products/Skin Care Set", src:product4, title:"Skin Care Set", price:"12$"},
    { id:"/products/Retinol Set", src:product5, title:"Retinol Set", price:"15$"},
    { id:"/products/Body Lotions", src:product6, title:"Body Lotions", price:"8$"},
    { id:"/products/Perfume", src:product7, title:"Perfume", price:"11$"},
    { id:"/products/PHA Serum", src:product8, title:"PHA Serum", price:"6$"},
    { id:"/products/Hand Cream", src:product9, title:"Hand Cream", price:"3$"},
    { id:"/products/Bakuchiol Serum", src:product10, title:"Bakuchiol Serum", price:"5$"},
    { id:"/products/Sun Cream", src:product11, title:"Sun Cream", price:"13$"},
    { id:"/products/Scented Body Mist", src:product12, title:"Scented Body Mist", price:"9$"}
 ]
 const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget gravida erat. Ut a imperdiet elit.
  Donec mauris felis, ornare quis congue id, sagittis in mauris. Aliquam tempor nisl id lorem volutpat, non tempor mi tristique.
   Phasellus et viverra lorem, vel laoreet massa. Phasellus erat metus, rhoncus faucibus venenatis ut, maximus efficitur tortor. 
   Phasellus tempor risus leo, in dapibus purus malesuada non. Mauris scelerisque tristique erat, sit amet malesuada nibh malesuada non. 
   Etiam et congue arcu, in varius quam. Vivamus lacinia pharetra finibus.
  Suspendisse non neque ut massa convallis porttitor. Nam auctor sapien sed condimentum porttitor. 
  Proin at consectetur risus. In ultrices a metus vitae sollicitudin.`
  return (
    <div>
     <nav className="container-fluid">
        <h1 className="brand"><strong>CosmetiCo</strong></h1>
        <NavLink  className="link" to="/" >Home</NavLink>
        <NavLink className="link" to="products">Shopping</NavLink>
        <NavLink  to="cart" className="fa-solid fa-basket-shopping link">
        <span className="badge ">0</span>
        </NavLink>
        
     </nav>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/products" >
        <Route index element={<Products images={images} text={text}/>}></Route>
        <Route path=":id" element={<Product images={images} text={text} addCart={setCart} cart={cart}/>}></Route>
      </Route>
      <Route path="/cart" element={<Cart cart={cart}/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
     </Routes>
    </div>
  );
};

export default App;
import product1 from "../imgs/shopping-imgs/product1.jpg"
import product2 from "../imgs/shopping-imgs/product2.jpg"
import product3 from "../imgs/shopping-imgs/product3.jpg"
import product4 from "../imgs/shopping-imgs/product4.jpg"
import product5 from "../imgs/shopping-imgs/product5.jpg"
import product6 from "../imgs/shopping-imgs/product6.jpg"
import product7 from "../imgs/shopping-imgs/product7.jpg"
import product8 from "../imgs/shopping-imgs/product8.jpg"
import product9 from "../imgs/shopping-imgs/product9.jpg"
import product10 from "../imgs/shopping-imgs/product10.jpg"
import product11 from "../imgs/shopping-imgs/product11.jpg"
import product12 from "../imgs/shopping-imgs/product12.jpg"
import { Link } from "react-router-dom"

const Products = ()=>{
   const images =[
      { id:"/products/AHA-BHA", src:product1, title:"AHA-BHA Serum", price:"5$"},
      { id:"/products/Glycolic Acid Serum", src:product2, title:"Glycolic Acid Serum", price:"6$"},
      { id:"/products/Vitamin C", src:product3, title:"Vitamin C", price:"5$"},
      { id:"/products/Skin Care Set", src:product4, title:"Skin Care Set", price:"12$"},
      { id:"/products/Retinol Set", src:product5, title:"Retinol Set", price:"15$"},
      { id:"/products/Body Lotions", src:product6, title:"Body Lotions", price:"8$"},
      { id:"/products/Perfume", src:product7, title:"Perfume", price:"11$"},
      { id:"/products/PHA Serum", src:product8, title:"PHA Serum", price:"6$"},
      { id:"/products/Hand Cream", src:product9, title:"Hand Cream", price:"3$"},
      { id:"/products/Bakuchiol %1 Serum", src:product10, title:"Bakuchiol %1 Serum", price:"5$"},
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
   function truncate(str){
      return str.length > 10 ? str.substring(0, 50) + "..." : str;
   }
   return(
    <div className="products container">
      {images.map(item=>{ 
         return   <div className="card" key={item.id} >
         <img className="card-img-top px-2 py-2" src={item.src} alt="img" style={{ height:"250px"}}></img>
         <div className="card-body">
            <h4 className="card-title"><strong>{item.title}</strong></h4>
            <h3 className="card-title"><strong>{item.price}</strong></h3>
            <p className="card-text">{truncate(text)}</p>
            <button className="btn">Add to Cart</button>
            <Link to={item.id} className="btn ">View Product</Link>
         </div>
      </div>
})}

    </div>
   )
}
export default Products
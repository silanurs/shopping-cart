
import { Link } from "react-router-dom"

const Products = (props)=>{

   function truncate(str){
      return str.length > 10 ? str.substring(0, 50) + "..." : str;
   }
   return(
    <div className="products container">
      {props.images.map(item=>{ 
         return   <div className="card" key={item.id} >
         <img className="card-img-top px-2 py-2" src={item.src} alt="img" style={{ height:"250px"}}></img>
         <div className="card-body">
            <h4 className="card-title"><strong>{item.title}</strong></h4>
            <h3 className="card-title"><strong>{item.price}</strong></h3>
            <p className="card-text">{truncate(props.text)}</p>
            <button className="btn">Add to Cart</button>
            <Link to={item.id} className="btn">View Product</Link>
         </div>
      </div>
})}

    </div>
   )
}
export default Products
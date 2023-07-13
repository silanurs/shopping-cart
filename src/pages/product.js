import { useParams } from "react-router-dom";
const Product = (props)=>{
    const {id} = useParams();
    const product= props.images.filter(item=>item.title===id);

   return(
   <div className="container m-5 p-5 product-info">
    <h2 className=""><strong>{id}</strong></h2>
    <div className="product-details">
      <img src={product[0]["src"]} alt="product"></img>
      <div className="product-side">
        <p>"{props.text}"</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
   </div>)

}
export default Product;
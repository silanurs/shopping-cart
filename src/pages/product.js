import { useParams } from "react-router-dom";
const Product = ()=>{
    const {id} = useParams();
   return(
   <div className="container m-5 p-5 product-info">
    <h2 className=""><strong>{id}</strong></h2>
   </div>)

}
export default Product;
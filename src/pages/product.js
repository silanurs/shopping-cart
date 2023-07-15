import { useParams } from "react-router-dom";
const Product = (props)=>{
    const {id} = useParams();
    const addItem = ()=>{
      props.setItem(props.item + 1)
      document.querySelector(".badge").textContent=props.item
    }
    const product= props.images.filter(item=>item.title===id);
    const addToCart = ()=>{
      addItem()
      props.addCart([...props.cart, product]);
      document.querySelector('.add-to-cart').classList.add('disabled');
      if(document.querySelector('.add-to-cart').classList.contains('disabled')){
        return alert('Product is added to the cart!')
      }
    }

   return(
   <div className="product-info">
    <div className="product-details">
      <img src={product[0]["src"]} alt="product"></img>
      <div className="product-side">
      <h2 className=""><strong>{id}</strong></h2>
      <p><strong>{product[0]["price"]}$</strong></p>
        <p>"{props.text}"</p>
        <button className="btn add-to-cart" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
   </div>)

}
export default Product;
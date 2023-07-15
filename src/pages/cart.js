const Cart = ({cart})=>{
           
    return(
        <div className="shopping-cart ">
          {cart.map(item=>item.map(product=>{ 
             return   <div className="cart" key={product.id} >
             <img  src={product.src} alt="img" style={{ height:"8vh", width:"7vw"}}></img>
             <p className="cart-title"><strong>{product.title}</strong></p>
             <p className="cart-price"><strong className="price">{product.price}</strong></p>
             <p className="remove-cart">&#10005;</p>
              
          </div>
    }))}
   
        </div>
       )
}
export default Cart;
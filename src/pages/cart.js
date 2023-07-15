const Cart = ({cart})=>{
        const prices=cart.map(item=>item.map(product=>product.price)).toString().split(",").map(i=>Number(i))
        const total=prices.reduce((x,y)=>x+y)
        
    return(
        <div className="shopping-cart ">
            <div className="cart-container">
            {cart.map(item=>item.map(product=>{ 
             return   <div className="cart" key={product.id} >
             <img  src={product.src} alt="img" style={{ height:"8vh", width:"7vw"}}></img>
             <p className="cart-title"><strong>{product.title}</strong></p>
             <p className="cart-price"><strong className="price">{product.price}$</strong></p>
              
          </div>
    }))}
            </div>

    <div className="checkout">
    <p>Total:{total}</p>
       <button className="btn checkout-btn">Checkout</button>
    </div>

        </div>
       )
}
export default Cart;
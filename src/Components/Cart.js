import React, { useContext } from 'react'
import { AppContext } from '../Context/ProductContext'
import CartItem from './CartItem';
import Footer from './Footer'
import { Link } from 'react-router-dom';
export default function Cart() {
  const {cart , clearCart} = useContext(AppContext);

 if(cart.length === 0){
  return  <div>
    <h3>NO CART IN ITEM</h3>
    <br />
    <br />
    <br />
    <Footer/>
  </div>
  
 }

  return (
    <div>
      <div className="container">
        <div className="cart_head grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

          <div className="cart_item">
            {
              cart.map((curElem) => {
                return <CartItem key={curElem.id} {...curElem} />
              })
            }
          </div>

       <hr />
       <div className="cartbtn">
        <Link to="/products">
        <button>Continue Shopping</button>
        </Link>
        <button onClick={clearCart}>clear cart</button>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

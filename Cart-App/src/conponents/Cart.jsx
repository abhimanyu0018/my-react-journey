import React,{useContext} from 'react'
import {cartContext} from '../contexts/CartContext'

const Cart = () => {

    const cart= useContext(cartContext)
 
    let total = 0
    
  return (
    <div>
        <h2>Cart</h2><br />
        <div>
            {cart.cartItems.map((item)=> {
                   total = total+item.price
                   return (
                    <li>{item.name} price: {item.price}</li>
                   )
            })}
<br /><br />
            <h2>Total : {total}</h2>
        </div>
    </div>
  )
}

export default Cart
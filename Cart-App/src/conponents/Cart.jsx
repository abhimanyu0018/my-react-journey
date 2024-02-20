import React,{useContext} from 'react'
import cartContext from '../contexts/CartContext'

const Cart = () => {

    const cart= useContext(cartContext)
  return (
    <div>
        <h2>Cart</h2>
        <div>
            <li>Laptop  -  10000</li>
        </div>
    </div>
  )
}

export default Cart
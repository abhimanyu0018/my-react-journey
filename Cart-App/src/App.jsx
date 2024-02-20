import { useState } from 'react'
import Item from "./conponents/Item"
import Cart from "./conponents/Cart"
import cartContext from './contexts/CartContext'
import './App.css'

function App() {

  return (
   <>
      <div>
      <Item name="Earphone" price={1000}/>
      <Item name="Mobile" price={20000}/>
      <Item name="Laptop" price={55000}/>
      </div>
      <hr />

      <Cart/>
   </>
  )
}

export default App

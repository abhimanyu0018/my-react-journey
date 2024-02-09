import { useState } from 'react'
import './App.css'
import CurrencyBox from './component/Currency-box'

function App() {
  

  return (
    <>
      <div className="main">
        <CurrencyBox/>
        <button>swap</button>
        <CurrencyBox/>
        
      </div>
    </>
  )
}

export default App

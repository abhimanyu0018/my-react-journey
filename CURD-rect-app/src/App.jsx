import { useState } from 'react'
import logo from './assets/hands Contact.png'
import './App.css'

function App() {
      return (
        <>
           <div className="header">
                 <div><img src='{logo}'/></div>
                 <h2>Contact</h2>
           </div>

           <div>
               <input type="text"/> 
               <button>add</button>
           </div>
        </>
      )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  const [color,setcolor] = useState('white')
  
  return (
    <>
      <div className='main' style={{backgroundColor:color }}>
              <div className='color-box'>
              <button onClick={()=>{setcolor('red')}}>
                   red
               </button >

               <button onClick={()=>{setcolor('orange')}}>
                   orange
               </button>

               <button onClick={()=>{setcolor('purple')}}>
                   purple
               </button>

               <button onClick={()=>{setcolor('black')}}>
                   black
               </button>

               <button onClick={()=>{setcolor('white')}}>
                   white
               </button>
              </div>
      </div>
    </>
  )
}

export default App

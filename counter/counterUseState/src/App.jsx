import { useState } from 'react'
import './App.css'





function App() {
  const [counter,setCounter] = useState(10)

  const addOne = ()=>{
    setCounter(counter + 1)
  }
  
  const removeOne =()=>{
    if(counter != 0){
      setCounter(counter - 1)
    }
  }




  return (
    <>
     <h1>Counter</h1>
     <h3>{counter}</h3>

     <button onClick={addOne}>Add Counter</button>
     <br /> <br />
     <button onClick={removeOne}>Remove Counter</button>
    </>
  )
}

export default App

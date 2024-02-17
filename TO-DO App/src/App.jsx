import { useState } from 'react'
import './App.css'

function App() {
     const [value,setValue] = useState('')

     const getValue = () =>{
             console.log(value)
     }

  return (
    <>
      <div className="heading">
        <h2>TO DO</h2>
      </div>
      <div className="input-box">
        <input type="text" onChange={(e) => {setValue(e.target.value)}} />
        <button  onClick={getValue} >ADD</button>
      </div>

      <div className="toDo-list">

      </div>
    </>
  )
}

export default App

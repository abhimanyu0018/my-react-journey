import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className="input">
          <input type="text" />
          <button>copy</button>
        </div>

        <div className="control">
          <input type="range" min={5} max={10}/>
          <label> length {}</label>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import JsonData from './MOCK_DATA.json'

function App() {
   const [value,setValue] = useState('')
  return (
    <>
      <div className="search">
        <input type="text" placeholder='Search...' onChange={(e) => {setValue(e.target.value)}}/>
      </div>

      { JsonData.filter( (val) =>{
        if(value == '' )
        {
          return val
        }

        else if((val.first_name.toLowerCase()).includes(value)){
          return val
        }

        
      }).map((val,key) =>{
        return <p className='para'  key={val.id}> {val.first_name} </p>
      })}
    </>
  )
}

export default App

import React,{useContext} from 'react'
import {counterContext} from "./context/counter"

const Updater = (props) => {

    const count = useContext(counterContext)

    const increment = () => {
        count.setCount(prev => prev+1)
    }

    const decrement = () => {
        count.setCount(prev => prev-1)
    }
  return (
    <div className="btn-box">
        <h2>{props.name}</h2>
        <button onClick={decrement}>decrese</button>
        <button onClick={increment}>increse</button>
    </div>
  )
}

export default Updater
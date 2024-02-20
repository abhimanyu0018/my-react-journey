import { useState,useContext } from 'react'
import Updater from './Updater'
import './App.css'
import {counterContext} from "./context/counter"

function App() {

  const count = useContext(counterContext)

  console.log(count)
     
  return (
    <>
       <div className='main'>
           <h2>Counter is {count.count}</h2>
           <br /><br />
           <Updater name="1 comp"/>
           <Updater name="2 comp"/>
           <Updater name="3 comp"/>
           <Updater name="4 comp"/>
       </div>
    </>
  )
}

export default App

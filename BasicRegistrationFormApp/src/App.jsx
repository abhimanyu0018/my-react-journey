import { useState } from 'react'
import './App.css'

function App() {

  const [value,setValue]  =  useState({
    firstName:'',
    lastName:'',
    email:''
  })



  const submit = false
  const [isFirstName,setIsFirstName] = useState(false)
  const [isLastName,setIsLastName] = useState(false)
  const [isEmail,setIsEmail] = useState(false)

  const submitFunc = ()=>{
    pre
  }

  return (
    <>
        <div className="mainBox">
          <form action="#" onSubmit={() =>{
            submitFunc()
          }} >

             {submit ? <p className='submitted'>form is submitted</p> : null}
             <input type="text" placeholder="Enter First Name" onChange={(e) =>{
              setValue({...value,firstName: e.target.value})
              setIsFirstName(true)
             }} /> 
             <span>this field is reqired</span> 

             <input type="text" name="" id="" placeholder="Enter Last Name" onChange={(e)=>{
              setValue({...value,lastName: e.target.value})
              setIsLastName(true)
             }} />
             <span>this field is reqired</span> 

             <input type="text" placeholder='Email..' onChange={(e)=>{
              setValue({...value,email: e.target.value})
             }} />
             <span>this field is reqired</span> 

             <button type="submit">Submit</button>

          </form>
        </div>
    </>
  )
}

export default App

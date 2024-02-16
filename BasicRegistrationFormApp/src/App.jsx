import { useState } from 'react'
import './App.css'

function App() {

  const [value,setValue]  =  useState({
    firstName:'',
    lastName:'',
    email:''
  })



  const [submit,setSubmit] = useState(false)
  const [isFirstName,setIsFirstName] = useState(false)
  const [isLastName,setIsLastName] = useState(false)
  const [isEmail,setIsEmail] = useState(false)

  const submitFunc = ()=>{
    preventDefault() 

  }

  const handler = ()=>{
    if(!value.firstName || !value.lastName || !value.email){
      setSubmit(false)
    }
    else{
      setSubmit(true)
    }
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
             {submit && !value.firstName ? <span>this field is reqired</span>  : null }

             <input type="text" name="" id="" placeholder="Enter Last Name" onChange={(e)=>{
              setValue({...value,lastName: e.target.value})
              setIsLastName(true)
             }} />
             {submit && !value.lastName ? <span>this field is reqired</span>  : null }

             <input type="text" placeholder='Email..' onChange={(e)=>{
              setValue({...value,email: e.target.value})
             }} />
             {submit && !value.email ? <span>this field is reqired</span>  : null }

             <button type="submit" onClick={handler}>Submit</button>

          </form>
        </div>
    </>
  )
}

export default App

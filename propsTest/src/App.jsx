import './App.css'

function App(props) {
  

  return (
    <>
       <h1>hello {props.name}
       </h1>
       {props.children}
       

    </>
  )
}

export default App

import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addValueToList = (e) => {
    e.preventDefault() 
    setTodoList((prev) =>{
      return [...prev,{
        title: value,
        isComplete: false
      }]
    });

    setValue('')

    
  };

  const checked = (i) => {

    if(todoList[i].isComplete === true)
    {
      todoList[i].isComplete = false
    }

    if(todoList[i].isComplete === false)
    {
      todoList[i].isComplete = true
    }


    console.log(todoList[i].isComplete)

  }


  const deleteHandler = (i) =>{
    let newList =  [...todoList]
    newList.splice(i,1)
    setTodoList(newList)
  }

  return (
    <>
      <div className="heading">
        <h2>TO DO</h2>
      </div>
      <div className="input-box">
        <form action="" onSubmit={addValueToList}>
        <input
         value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button>ADD</button>
        </form>
      </div>

      <div className="toDo-list">
        <h2>TO DO List</h2>
        <ul className="list">
          {todoList.map((val,i) => {
            return (
              <li key={val.title}>
                <input type="checkbox"/>
                <label>{val.title}</label>
                <button className="btn btn-Del" onClick={() => {deleteHandler(i)}}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

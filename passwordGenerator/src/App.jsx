import { useState,useCallback,useEffect,useRef } from "react";
import "./App.css";




function App() {
  const [length, setlength] = useState(8);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password,setPassword] = useState('');

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNum){
      str += "0123456789";
    }

    if(isChar){
      str += "!@#$%^&*()+/*-~`";
    }

    for (let i = 1; i <= length; i++) {
       let index = (Math.random() * str.length +1)
       pass += str.charAt(index)
       
    }
    setPassword(pass)

  },[length,isChar,isNum])

  const copytoClipBoard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }


  useEffect(() => {
    passwordGenerator()
  },[length,isNum,isChar])


  

  return (
    <>
      <div className="main">
        <h1>Password Generator</h1>
        <div className="input">
          <input type="text" readOnly  ref={passwordRef} value={password}/>
          <button className="copy" onClick={copytoClipBoard}>copy</button>
        </div>

        <div className="control">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label className="lengthLabel"> length {length}</label> 
      

          <input
            type="checkbox"
            defaultChecked = {isNum}
            onClick={() => {
              setIsNum((prev) => !prev);
            }}
          />
          <label>Number</label>

          <input
            type="checkbox"
            defaultChecked = {isChar}
            onClick={() => {
              setIsChar( (prev) => !prev);
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;

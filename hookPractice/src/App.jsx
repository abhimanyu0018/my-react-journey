import { useState } from "react";
import "./App.css";

function App() {
  const [name,setName] = useState("")
  const [surname,setSurname] = useState("")
  const [email,setEmail] = useState("")
  const [gender, setgender] = useState("");

  const [mobNo,setMobNo] = useState("+91")

  return (
    <>
      <div className="main">
        <div className="main-input">
          <div className="header">
            <h1>INPUT</h1>
          </div>

          <form action="#">
            <input type="text" placeholder="name" onChange={(e) =>{
              setName(e.target.value)
            }} />
            <br />
            <input type="text" placeholder="surname" onChange={(e) =>{
              setSurname(e.target.value)
            }} />
            <br />

            <input type="email" placeholder="email" onChange={(e) =>{
              setEmail(e.target.value)
            }} />
            <br />

            {/* gender radio */}
            <label htmlFor="">Gender:</label>
            <input
              type="radio"
              name="gender"
              onClick={() => {
                setgender("Male");
              }}
              value={"male"}
            />
            <label htmlFor="">Male</label>
            <input
              type="radio"
              name="gender"
              onClick={() => {
                setgender("Female");
              }}
              value={"female"}
            />
            <label htmlFor="">Female</label>
            <input
              type="radio"
              name="gender"
              onClick={() => {
                setgender("Other");
              }}
              value={"other"}
            />
            <label htmlFor="">Other</label>

            <br />
            <label htmlFor="">Skill:</label>

            <input type="checkbox" name="skill" value={"JS"} />
            <label htmlFor="">JS</label>
            <input type="checkbox" name="skill" value={"RectJS"} />
            <label htmlFor="">RectJS</label>
            <input type="checkbox" name="skill" value={"NextJS"} />
            <label htmlFor="">NextJS</label>

            <br />

            <label htmlFor="">Mobile: </label>
            <select name="code" id="">
              <option value="+91" defaultChecked>
                +91
              </option>
              <option value="+11">+11</option>
              <option value="+92">+92</option>
              <option value="+90">+90</option>
            </select>
            <input type="text" maxLength={10} />
          </form>
        </div>

        <div className="main-output">
          <div className="header">
            <h1>OUTPUT</h1>
          </div>

          <form action="#">
            <input type="text" disabled placeholder="name" value={name} />
            <br />
            <input type="text" disabled placeholder="surname" value={surname}/>
            <br />

            <input type="email" disabled placeholder="email" value={email}/>
            <br />

            {/* gender radio */}
            <label htmlFor="">Gender:</label>
            <input type="text" value={gender} />

            <br />
            <label htmlFor="">Skill:</label>

            <input type="checkbox" name="skill" value={"JS"} />
            <label htmlFor="">JS</label>
            <input type="checkbox" name="skill" value={"RectJS"} />
            <label htmlFor="">RectJS</label>
            <input type="checkbox" name="skill" value={"NextJS"} />
            <label htmlFor="">NextJS</label>

            <br />

            <label htmlFor="">Mobile: </label>
            <select name="code" id="">
              <option value="+91" defaultChecked>
                +91
              </option>
              <option value="+11">+11</option>
              <option value="+92">+92</option>
              <option value="+90">+90</option>
            </select>
            <input type="text" maxLength={10} />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import pic from "./assets/christmas.png"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="nav" className="flex w-full h-20 bg-slate-500 justify-around items-center">
        <div>
          <h1 className="font-bold text-xl">MyLogo</h1>
        </div>
        <div>
          <div className="flex gap-4 font-medium">
            <a href="" className="text-white hover:text-amber-700">Home</a>
            <a href="" className="text-white hover:text-amber-700">About</a>
            <a href="" className="text-white hover:text-amber-700">Contact</a>
            <a href="" className="text-white hover:text-amber-700">Github</a>
          </div>
        </div>
        <div>
          <div className="flex gap-7">
            <button>Log in</button>
            <button className="bg-amber-700 text-white py-2 px-3 rounded-md">Get started</button>
          </div>
        </div>
      </div>

      <div id="home-container" className="flex justify-evenly items-center mt-4">
        <img src={pic} alt="pic" className="w-1/3 rounded-3xl"  />
        <div className="flex flex-col items-end" >
          <h2 className="text-5xl font-bold">Download Now</h2>
          <h3 className="text-2xl pl-1 font-bold">Lorem, ipsum</h3>
          <div >
            <button className="bg-amber-800 mt-2 text-white py-3 px-5 rounded-md">
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

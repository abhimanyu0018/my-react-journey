import React from "react"
import { createBrowserRouter,RouterProvider, Link, Outlet } from "react-router-dom"

//Components
import Home from "./compoents/Home";
import About from "./compoents/About";
import Profile from "./compoents/Profile";
import Error from "./compoents/Error";

function App() {
   
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/profile",
      element: <Profile/>
    }
  ]);

  return (
   <>
   <RouterProvider router={router}>
   <div className="header">
     <h2>logo</h2>

     <div>
         <Link to="/about">About</Link> 
         <Link to="/profile">Profile</Link>
     </div>
     
   </div>

   {/* <RouterProvider router={router} /> */}
   <Outlet/>

   </RouterProvider>
   <div className="footer">
    <h2>footer</h2>
    <p>Lorem ipsum dolor sit amet.</p>
   </div>
   </>
  )
}

export default App

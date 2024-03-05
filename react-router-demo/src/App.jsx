import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

//Components
import Home from "./compoents/Home";
import About from "./compoents/About";
import Profile from "./compoents/Profile";
import Error from "./compoents/Error";
import Layout from "./compoents/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {path: "",element: <Home/>},
        { path: "/about", element: <About /> },
        { path: "/profile", element: <Profile /> },
      ],
      errorElement: <Error />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

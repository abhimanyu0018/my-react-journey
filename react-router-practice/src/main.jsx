import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Components/Layout.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github from './Components/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '', element: <Home/>},
      {path: '/about', element: <About/>},
      {path: '/contact', element:<Contact/>},
      {path: '/user/:userId', element: <User/> },
      {path: '/github', element: <Github/>}
    ]
    
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={ router }/>
  </React.StrictMode>,
)

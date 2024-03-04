import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ea?</p>
        <ul>
                    <Link to="/about">About</Link>

           <li>item2</li>
           <li>item3</li>
           <li>item4</li>
           <li>item5</li>  
        </ul>
    </div>
  )
}

export default Home
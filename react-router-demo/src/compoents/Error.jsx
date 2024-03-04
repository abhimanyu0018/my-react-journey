import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h1>404 Not Found</h1>
        <button><Link to= "/">Back to Home</Link></button>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div className="text-center my-48 font-bold">
        <h1>User:  <span className="text-xl">{userId}</span> </h1>
    </div>
  )
}

export default User
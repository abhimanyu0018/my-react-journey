import React,{useEffect,useState} from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/abhimanyu0018')
        .then(response => response.json())
        .then(data => setData(data) )
    },[])
  return (
   <div className="flex flex-col items-center my-10 gap-10">
           <div>

                    <img className="rounded-3xl" src={data.avatar_url}alt="github pic" width={200}  />
           </div>
           <div>
           <h2>Followers: <span> {data.followers} </span></h2>
           <h2>Following: <span> {data.following} </span></h2>
           <h2>Location: <span> {data.location} </span></h2>
           </div>
   </div>
  )
}

export default Github
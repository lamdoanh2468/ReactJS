import { useState,useEffect } from "react";
 function Profile(){
        const [user,setUser]=useState(null);
        const[loading,setLoading]=useState(true);
        //JSON-Users-Loading
        useEffect(() =>{
            setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/users/1")
                .then((res)=>res.json())
                .then((user)=>setUser(user))
                .finally(()=>setLoading(false))},
                2000)
            },[]
        )
        return <ul>
                {loading&&<li>Loading...</li>}
                {!user?<li>User Not found</li>:<li key={user.id}>{user.name}-{user.username}-{user.email}-{user.phone}-{user.website}-{user.address.street}-{user.address.city}</li>}
                </ul> 
    }
export default Profile

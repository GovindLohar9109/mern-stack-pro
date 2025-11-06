import { useEffect, useState } from "react";
import { getUsers } from "./api/user-api";


export default function GetAllUsers(){

    const [users,setUsers]=useState([]);
    
    console.log(users);
    useEffect(()=>{
        
        getUsers(setUsers);
    },[])

    return <>

        <h1>All Users</h1>

        {users.map((user,idx)=>{
           
            return (
                <>
                    <h3 key={idx}>{user.name}</h3>
                </>
            )
        })}

        


    
    </>
    
}
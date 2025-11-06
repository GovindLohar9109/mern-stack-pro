import axios from "axios";
import { url } from "../data";


export async function addUser(user_name){

    try{
        var res=await axios.post(url+ "/add-user",{user_name});
        
    }
    catch(err){
        console.log("Sever Error...",err);
    }

}
export async function getUsers(setUser){

    try{
        var res=await axios.get(url+"/get-users");
     
        setUser(res.data);
        
    }
    catch(err){
      
        setUser([])
    }

}

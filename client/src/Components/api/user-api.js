import axios from "axios";
import { url } from "../data";


export async function addUser(user_name){

    try{
        var res=await axios.post(url+"/add-user",{user_name});
        console.log(res);
    }
    catch(err){
        console.log("Sever Error...");
    }

}
export async function getUsers(setUser){

    try{
        var res=await axios.get(url+"/get-users");
        console.log(res.data)
        setUser({users:res.data.users});
        
    }
    catch(err){
        console.log("Sever Error...");
        setUser({users:[]})
    }

}
export async function deleteUser(user_id){

    try{
        var res=await axios.delete(url +`/delete-user/${user_id}`);
        console.log(res);
    }
    catch(err){
        console.log("Sever Error...");
    }

}
import axios from "axios";
export const RegisterApiCall = async(userCredentials)=>{
    try{
        await axios.post('http://localhost:5000/api/auth/adduser',userCredentials);
    }catch(error){
        console.log(error);
    }
}
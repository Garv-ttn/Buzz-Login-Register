import axios from 'axios';
import {startlogin,successlogin,failedlogin} from '../Actions/Actions'

export const LoginApiCall=async(userCredentials,dispatch)=>{
dispatch(startlogin());
    try{
        const user = await axios.post('http://localhost:5000/api/auth/login',userCredentials);
        dispatch(successlogin(user.data));
        console.log(user.data);
    }catch(error){
        dispatch(failedlogin(error));
        console.log('Error',error);
    }
}
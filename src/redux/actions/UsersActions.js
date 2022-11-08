import axios from "axios";
import { ADD_USER, DELETE_USER, FAIL_USER, GET_USER } from "../constants/UsersConstants";


export const getUsers=()=> async (dispatch)=>{

    try {
        const res=await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type:GET_USER,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:FAIL_USER,
            payload:error
        })
    }
}

export const AddUser=(payload)=>{
    return {
        type:ADD_USER,
        payload
    }
}

export const DeleteUser=(id)=>{
    console.log(id)
    return{
        type:DELETE_USER,
        payload:id
    }
}

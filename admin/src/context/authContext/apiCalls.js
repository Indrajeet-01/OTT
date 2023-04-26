import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"

export const login = async (user,dispatch) => {
    dispatch(loginStart())
    try{
        const res =axios.post("auth/login",user)
        dispatch(loginSuccess((await res).data))
    }catch(err){
        dispatch(loginFailure())
    }
}
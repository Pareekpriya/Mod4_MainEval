import { auth } from "@/firebase/firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"


export const REGISTER_USER = "REGISTER_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const registerUser = () => async(dispatch) =>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)  
        const user = userCredential.user
        dispatch({type:REGISTER_USER,payload:user})
    }catch(err){
        console.error("Error in Regestration:",err)
    }
   
};


export const loginUser = ()=> async(dispatch)=>{
     try{
       const userCredential = await signInWithEmailAndPassword(auth,email,password)
       const user = userCredential.user
       dispatch({type:LOGIN_USER,payload:user})
     }catch(err){
        console.error("login error:",err)
     }
}


export const logOutUser = ()=> async(dispatch) =>{
    try{
        await signOut(auth) 
      dispatch({type:LOGOUT_USER})
    }catch(err){
        console.error("error in logout:",err)
    }
}


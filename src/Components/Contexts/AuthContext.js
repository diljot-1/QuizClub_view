import React , {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase.prod'

const AuthContext = React.createContext();

export function useAuthContext(){
    return useContext(AuthContext);
}
export  function AuthProvider({children}) {
    
    const [currentUser,setCurrentUser]= useState();
    
    function login(email, password){
         return auth.signInWithEmailAndPassword(email, password)
    }
    function signup(email,password){
       
        return auth.createUserWithEmailAndPassword(email, password);     //returns a promise
    }

    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged((currentUser)=>{setCurrentUser(currentUser)})  //set current user only when mounts and return a function

        return unsubscribe;      //unsubscribe from listener whenever we unmount (? more research)
    },[]);
    
    const value={currentUser, signup,login};
    return (
        <>
            <AuthContext.Provider value={value} >
                {children}
            </AuthContext.Provider>
        </>
    )
}

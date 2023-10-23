import React, { createContext } from 'react';
export let AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    let register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    let googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }


    let authorization = {
        register,
        login,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext } from 'react';
export let AuthContext = createContext(null);
import { getAuth } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    let register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    let authorization = {
        register
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
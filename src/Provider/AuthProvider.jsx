import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.init";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const createUser =(user,password)=>{
        return createUserWithEmailAndPassword(auth,user,password)
    }

    const userData = {
        createUser,
    }
    return <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;
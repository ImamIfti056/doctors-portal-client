import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    // REGISTER USER
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error.message))
    }

    // LOGIN USER
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {}) 
        .catch((error) => console.log(error.message))
    };

    // OBSERVE USER STATE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
        });
        return () => unsubscribe;
    },[])

    // SIGNOUT USER
    const logOut = () => {
        signOut(auth).then(() => {})
        .catch(e => console.log(e.message))
    }

    return{
        user,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;
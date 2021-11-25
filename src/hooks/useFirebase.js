import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, updateProfile, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // REGISTER USER
    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            // SENDING USERNAME TO FIREBASE
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {}).catch((e) => {setAuthError(e.message)});
        })
        .catch(error => setAuthError("User already exists!"))
        .finally(() => {
            setIsLoading(false);
        });
    }

    // LOGIN USER
    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setAuthError('');
        }) 
        .catch((error) => setAuthError(error.message))
        .finally(() => setIsLoading(false));
    };

    // GOOGLE SIGN IN
    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setAuthError('');
            
        }).catch((error) => {
            setAuthError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // OBSERVE USER STATE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            } else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[])

    // SIGNOUT USER
    const logOut = () => {
        signOut(auth).then(() => {
            setAuthError('')
        })
        .catch(e => {
            setAuthError(e.message)
        })
        .finally(() => setIsLoading(false));
    }

    return{
        user,
        isLoading,
        googleSignIn,
        authError,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;
import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, updateProfile, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, getIdToken } from 'firebase/auth';
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

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

            // SAVE USER TO DATABASE
            saveUser(email, name, 'POST');

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
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const destination = location?.state?.from || '/';
            history.push(destination);
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
            saveUser(result.user.email, result.user.displayName, 'PUT');
            
        }).catch((error) => {
            setAuthError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // OBSERVE USER STATE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken)
                })
            } else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    },[])

    // CHECKING IF ADMIN
    useEffect(() => {
        fetch(`https://frozen-reaches-40395.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

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

    // SAVE USER TO DATABASE
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://frozen-reaches-40395.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {})
    }

    return{
        user,
        admin,
        isLoading,
        googleSignIn,
        authError,
        token,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;
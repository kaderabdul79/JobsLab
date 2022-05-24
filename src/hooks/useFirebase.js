import initializeFirebase from '../Firebase/firebase.init';
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const navigate = useNavigate();

    // const registerUser = (email, password,name, navigate) => {
    //     setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             setAuthError('');
    //             const newUser = { email, displayName: name };
    //             setUser(newUser);
    //             navigate('/');
    //         })
    //         .catch((error) => {
    //             setAuthError(error.message);
    //             console.log(error.message);
    //         })
    //         .finally(() => setIsLoading(false));
    // }

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                // saveUser(email, name, 'POST');
                // send name to firebase after creation
                // updateProfile(auth.currentUser, {
                //     displayName: name
                // }).then(() => {
                // }).catch((error) => {
                // });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // 
        //Authenticate Using Google Sign-In
        const usingGoogleSignin = (location,navigate) => {
            signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                navigate('/');
                // console.log(user)
                // 
                // createUserAcc(user.email,user.displayName,'PUT')
                // where user want to go? find it and redirect to there if came direct login rediret to homepage
                const destination = location.state?.from || ''
                navigate(destination)
            }).catch((error) => {
                setAuthError('');
            });
    
        }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        usingGoogleSignin,
    }
}

export default useFirebase;
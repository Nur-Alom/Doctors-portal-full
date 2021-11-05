import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


// initialize.
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // Create an User/Register User.
    const registerNewUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // 
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // const user = result.user;
                const destination = location?.state?.form || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // User Logout/SignOut
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    };

    // User Observation.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    return {
        user,
        loading,
        authError,
        registerNewUser,
        loginUser,
        logout,

    }
}

export default useFirebase;
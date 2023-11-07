import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import axios from "axios";
 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    const setProfilePicture = (image_url) => {
        return updateProfile(auth.currentUser, {
          photoURL: image_url,
        });
      };

    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
                // console.log(currentUser);
                const userEmail=currentUser?.email||user?.email;
                const loggedUser={email:userEmail};
                setUser(currentUser);
                setLoading(false);
                // if(currentUser)
                // {
                    
                //     axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials:true})
                //     .then(res=>{
                //         console.log(res.data);
                //     })
                // }else{
                //     axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
                //     .then(res=>{
                //         console.log(res.data)
                //     })
                // }
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        setProfilePicture,
        googleSignIn,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    

};
AuthProvider.propTypes={
    children:PropTypes.node
}


export default AuthProvider;
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfic";

import { useState } from "react";

import { useGlobalContex } from "./useGlobalContex";
import toast from "react-hot-toast";

export const useRegister = () => {
    const [isPending, setIsPending] =useState(false);
    const {dispatch} = useGlobalContex();
    const registerWithGoogle = async () => { 
            setIsPending(true);
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            dispatch({type: "LOG_IN", payload: user });
            toast.success(`Welcome ${user.displayName}`)
            setIsPending(false)
        } catch (error) {
            const errorMessage = error.message;
            alert(errorMessage);
            setIsPending(false)
        }
     };

     const registerEmailAndPassword = async (email, password, displayName, photoURL) =>{
        try {
            const register = createUserWithEmailAndPassword(auth, email, password);
            setIsPending(true);

            const userCredential = (await register).user;
            await updateProfile(auth.currentUser, {
                photoURL,
                displayName,
            });

            dispatch({type: 'LOG_IN', payload: user});
            toast,success(`Welcome ${user.displayName}`)
            setIsPending(false);

        } catch(error) {
            const errorMessage = error.message;
            toast.error(errorMessage)
            setIsPending(false);
            
        }
     }

    return {registerWithGoogle, isPending, registerEmailAndPassword }
}
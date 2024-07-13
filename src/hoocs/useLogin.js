import {auth} from '../firebase/FirebaseConfic'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import {useGlobalContex} from './useGlobalContex'
import toast from 'react-hot-toast'


export const useLogin = () => {
    const [isPanding, setIsPanding] = useState(false);
    const {dispatch} = useGlobalContex()

     const signIn = async (email, password) => {    
        setIsPanding(true);
       
        try{
            
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user
            dispatch({type: 'LOG_IN', payload: user });
            toast.success(`Welcome ${user.displayName}`)
            setIsPanding(false);

        } catch (error) {
            const errorMassage = error.massage;
            toast.error(errorMassage)
            setIsPanding(false);
        }
     };
     return {isPanding, signIn}
}

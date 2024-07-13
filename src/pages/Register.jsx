import {Form, Link, useActionData} from 'react-router-dom'
import { ForimInput } from '../companents'
import { useEffect } from 'react';

  

export const action = async ( {request} ) => {
    let formData = await request.formData();
    let displayName = formData.get('displayName')
    let photoURL = formData.get('photoURL')
    let email = formData.get('email')
    let password = formData.get('password')

    return {displayName, photoURL, email, password}
}

import { useRegister } from '../hoocs/useRegister';

function Register() {
    const userData = useActionData();
    const {isPending, registerWithGoogle, registerEmailAndPassword} = useRegister()

    useEffect(() =>{
        if(userData){
            registerEmailAndPassword(userData.email, userData.password, userData.displayName, userData.photoURL);
        }
    }, [userData])
    

    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full ">
            <div className=" hidden lg:block bg-cover bg-no-repeat bg-center bg-[url('https://picsum.photos/1000/1300')] "></div>
            <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://picsum.photos/1000/1300')] lg:bg-none grid place-items-center ">
                <Form method='post' className="flex flex-col gap-2 w-96 bg-base-100 shadow-xl p-8">
                    <h1 className='text-center text-3xl font-semibold'>Register</h1>
                    <ForimInput name='displayName' type='text' label='Your Name' />
                    <ForimInput name='photoURL' type='url' label='You Image URL' />
                    <ForimInput name='email' type='email' label='email' />
                    <ForimInput name='password' type='password' label='password' />


                    <div>   
                        {isPending && (
                            <button disabled type='submit' className="btn btn-primary btn-block">Loading...</button>
                        )}
                        {!isPending && (
                            <button type='submit' className="btn btn-primary btn-block">Register</button>
                        )}
                        
                    </div>
                    <div className='w-full'>
                    {
                        isPending && (
                        <button disabled type='button' className="btn btn-secondary btn-block">Loading...</button>
                    )}
                    {
                        !isPending && (
                        <button onClick={registerWithGoogle} type='button' className="btn btn-secondary btn-block">Google</button>

                    )}
                    </div>
                    <div className='text-center '>
                        <p className='text-slate-500'>If you have accaunt <Link className=' link link-primary ' to='/login'>Login</Link></p>
                    </div>
                </Form>
            </div>

        </div>
    )
}
export default Register
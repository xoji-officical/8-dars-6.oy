import {Form, Link, useActionData} from 'react-router-dom'
import { ForimInput } from '../companents'
import { useEffect } from 'react';


    export const action = async ( {request} ) => {
    let formData = await request.formData();
    let email = formData.get('email')
    let password = formData.get('password')

    return {email, password}
}
import { useRegister } from '../hoocs/useRegister';
import { useLogin } from '../hoocs/useLogin';


function Login() {

    const {isPending, registerWithGoogle} = useRegister()
    const { isPending: isPandingLogin, signIn} = useLogin()
    

     const xoji = useActionData();
    useEffect(() =>{
        if(xoji){
            signIn(xoji.email, xoji.password);
        }
    }, [xoji])

    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full ">
            <div className=" hidden lg:block bg-cover bg-no-repeat bg-center bg-[url('https://picsum.photos/1000/1350')] "></div>
            <div className=" bg-cover bg-no-repeat bg-center bg-[url('https://picsum.photos/1000/1350')] lg:bg-none grid place-items-center ">
                <Form method='post' className="flex flex-col gap-5 w-96 bg-base-100 shadow-xl p-8">
                    <h1 className='text-center text-3xl font-semibold'>Login</h1>
                    <ForimInput name='email' type='email' label='email' />
                    <ForimInput name='password' type='password' label='password' />

                    <div>   
                        {isPandingLogin && (
                        <button disabled type='button' className="btn btn-primary btn-block">Loading...</button>
                        )}

                        {!isPandingLogin && (
                        <button type='submit' className="btn btn-primary btn-block">Login</button>
                        )}
                    </div>
                    <div className='w-full'>
                    {
                        isPending && (
                        <button type='button' className="btn btn-secondary btn-block">Loading...</button>
                    )}
                    {
                        !isPending && (
                        <button onClick={registerWithGoogle} type='button' className="btn btn-secondary btn-block">Google</button>

                    )}
                    </div>
                    <div className='text-center '>
                        <p className='text-slate-500'>If you don't have accaunt <Link className=' link link-primary ' to='/register'>Register</Link></p>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default Login
import React from 'react'
import { getProviders, signIn } from "next-auth/react";
import SignInComponent from './SignInComponent';



async function SignInPage() {
    const providers = await getProviders();
  return (
    <div className='flex content-center justify-center mt-20 lg:scale-[1.3]'>
    <img className='w-10' src="/google.png" alt="" />
    <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage
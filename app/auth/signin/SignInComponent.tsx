'use client'
import { getProviders, signIn } from "next-auth/react"


type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({providers}: Props) {
    return (
      <div>
        {providers && Object.values(providers!).map((provider) => (
          <div key={provider.name}>
            <button 
            className="bg-blue-500 py-2 px-3 text-white font-semibold rounded mx-4"
            onClick={() => signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
            })}>Sign in with {provider.name}</button>   
          </div>
        ))}
      </div>
    )
  }

export default SignInComponent
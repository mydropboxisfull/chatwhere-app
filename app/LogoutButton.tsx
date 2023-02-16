'use client';
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <div>

    <button onClick={() => signOut()} className="bg-[#2c2c2e] hover:bg-black text-white font-bold py-2 px-4 rounded">Sign out</button>
    </div>

  )
}

export default LogoutButton
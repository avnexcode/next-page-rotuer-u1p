import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Navbar() {
  const { data }: any = useSession()
  return (
    <nav className="p-5 flex justify-between items-center">
      <ul className="flex gap-10">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/product">Product Client</Link></li>
        <li><Link href="/product-server">Product Server</Link></li>
        <li><Link href="/product-static">Product Static</Link></li>
        {data?.user ? <li><button onClick={() => { signOut() }}>SignOut</button></li> : <li><button onClick={() => { signIn() }}>SignIn</button></li>}
      </ul>
      <ul>
        {data?.user ? <li className="bg-blue-500 text-white px-5 py-2">{data?.user.fullname}</li> : null}
      </ul>
    </nav>
  );
}

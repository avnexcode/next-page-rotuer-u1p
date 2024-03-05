"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function Navbar() {
  const { data }: any = useSession()
  return (
    <nav className="p-5 flex justify-between items-center">
      <ul className="flex gap-10 flex-wrap">
        <li className="min-w-[50px] w-[100px]"><Link href="/">Home</Link></li>
        <li className="min-w-[50px] w-[100px]"><Link href="/about">About</Link></li>
        <li className="min-w-[50px] w-[100px]"><Link href="/product">Product Client</Link></li>
        <li className="min-w-[50px] w-[100px]"><Link href="/product-server">Product Server</Link></li>
        <li className="min-w-[50px] w-[100px]"><Link href="/product-static">Product Static</Link></li>
        {data?.user ? <li><button onClick={() => { signOut() }}>SignOut</button></li> : <li><button onClick={() => { signIn() }}>SignIn</button></li>}
      </ul>
      <ul>
        {data?.user ? (
          <li className="bg-blue-500 flex items-center gap-4 text-white px-5 py-2">
            <img alt="profile" src={data?.user.image} width={40} height={40} />
            {/* <Image alt="profile" src={image} width={40} height={40} /> */}
            {data?.user.username}
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

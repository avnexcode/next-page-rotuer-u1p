import React from 'react'
import Link from "next/link"
export default function Index() {
    return (
        <>
            <form method='post' action="" className='p-5 flex flex-col gap-4'>
                <h1 className='text-5xl text-red-500'>Registers Dulu Dek</h1>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' className='max-w-md p-1 border-2 font-semibold text-lg' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' className='max-w-md p-1 border-2 font-semibold text-lg' />
                </div>
                <div className=''>
                    <button className='text-xl border-2 px-5 py-1'>Login</button>
                </div>
                <div>
                    <span className='text-xl'>Sudah punya akun?<Link href="/auth/login" className='underline'>Login</Link></span>
                </div>
            </form>
        </>
    )
}

import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
export default function Index() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const { push } = useRouter()
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setError("")
        setIsLoading(true)
        const data = {
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value,
        }
        const result = await fetch('/api/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        if (result.status === 200) {
            event.target.reset()
            setIsLoading(false)
            push("/auth/login")
        } else {
            setError(result.status === 400 ? "Email already exist" : "")
            setIsLoading(false)
        }
    }
    return (
        <>
            <p>{error ? <span>{error}</span> : null}</p>
            <form className='p-5 flex flex-col gap-4' onSubmit={handleSubmit}>
                <h1 className='text-5xl text-red-500'>Registers Dulu Dek</h1>
                <div className='flex flex-col'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' className='max-w-md p-1 border-2 font-semibold text-lg' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' className='max-w-md p-1 border-2 font-semibold text-lg' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' className='max-w-md p-1 border-2 font-semibold text-lg' />
                </div>
                <div className=''>
                    <button className='text-xl border-2 px-5 py-1'>{isLoading ? "Loading..." : "Register"}</button>
                </div>
                <div>
                    <span className='text-xl'>Sudah punya akun?<Link href="/auth/login" className='underline'>Login</Link></span>
                </div>
            </form>
        </>
    )
}

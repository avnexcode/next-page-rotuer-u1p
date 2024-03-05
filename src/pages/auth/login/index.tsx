import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
export default function Index() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const { push, query } = useRouter()
    const callbackUrl: any = query.callbackUrl || "/"
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setError("")
        setIsLoading(true)
        try {
            const res = await (signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl
            }))
            if (!res?.error) {
                setIsLoading(false)
                push(callbackUrl)
            } else {
                setIsLoading(false)
                setError("Email or password is incorect.")
            }
        } catch (error: any) {
            setIsLoading(false)
            setError("Email or password is incorect.")

        }
    }
    return (
        <>
            {error ? <p>{error}</p>: null}
            <form
                method="post"
                className="flex flex-col gazp-4 p-5"
                onSubmit={handleSubmit}
            >
                <h1 className="text-5xl text-red-500">Login Dulu Dek</h1>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="max-w-md border-2 p-1 text-lg font-semibold"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={"password"}
                        className="max-w-md border-2 p-1 text-lg font-semibold"
                    />
                </div>
                <div className="">
                    <button className="border-2 px-5 py-1 text-xl">Login</button>
                </div>
                <div>
                    <span className="text-xl">
                        Belum punya akun?
                        <Link href="/auth/register" className="underline">
                            Register
                        </Link>
                    </span>
                </div>
            </form>
        </>
    );
}

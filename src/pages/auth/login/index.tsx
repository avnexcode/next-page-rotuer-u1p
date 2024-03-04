import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Index() {
    const router = useRouter();
    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("/product");
    };
    return (
        <>
            <form
                method="post"
                className="flex flex-col gazp-4 p-5"
                onSubmit={formHandler}
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

"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useProducts } from "@/features/product/useProduct";
type Product = {
    id: string;
    name: string;
    price: number;
}
export default function Index() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const { data: products, isLoading: productLoading } = useProducts()
    useEffect(() => {
        if (!isLogin) {
            router.push("/auth/login");
        }
    }, [isLogin, router]);
    return (
        <>
            <h1 className="text-8xl">Hello Product Clients</h1>
            <ul className="flex flex-col gap-3 p-5 [&>*]:text-2xl [&>*]:underline">
                {productLoading && <h1>Loading...</h1>}
                {products?.data?.map((item: Product, index: number) => {
                    return (
                        <li key={index}>
                            <Link href={`/product/${item.id}`}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

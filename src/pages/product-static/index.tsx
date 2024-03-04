import Link from "next/link"
type Product = {
    id: string;
    name: string;
    price: number
}
export default function Index(props: any) {
    const products = props.products
    return (
        <>
            <h1 className="text-8xl">Hello Product Server Static</h1>
            <ul className="flex flex-col gap-3 p-5 [&>*]:text-2xl [&>*]:underline">
                {products.map((item: Product, index: number) => {
                    return (
                        <li key={index}>
                            <Link href={`/product-static/${item.id}`}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/product')
    const response = await res.json()
    return {
        props: {
            products: response.data
        },
        // revalidate: 10
    }
}
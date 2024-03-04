import { GetServerSideProps } from "next";
type Product = {
    id: string;
    name: string;
    price: number;
}
export default function Index(props: any) {
    const product = props.product
    return (
        <>
            <h1 className="text-3xl font-bold underline">Detail Server</h1>
            <h1 className="text-3xl">
                Product <span className="text-red-600">{product?.name || 'Product Tidak Ditemukan'}</span>
            </h1>
            <p className="text-2xl">{product?.price || ""}</p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    if (!params || typeof params.product !== 'string') {
        return {
            notFound: true
        };
    }

    try {
        const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
        const response = await res.json();

        return {
            props: {
                product: response.data
            }
        };
    } catch (error) {
        console.error("Error occurred:", error);
        return {
            props: {
                product: null
            }
        };
    }
};
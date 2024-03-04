import { useRouter } from "next/router";
import { useProductById } from "@/features/product/useProductId";
export default function Product() {
    const { query }: { query: { product?: string } } = useRouter();
    const productId = query.product || ''; 
    const { data: product, isLoading: productLoading } = useProductById(productId);
    // const { data: product } = useProductById(`${query.product}`)
    // const { data: product, isLoading: productLoading } = useProductById(Array.isArray(query.product) ? query.product[0] : query.product || '')
    return (
        <>
            {productLoading && <h1>Loading...</h1>}
            <h1 className="text-3xl">
                Product <span className="text-red-600">{product?.data.name || 'Product Tidak Ditemukan'}</span>
            </h1>
            <p className="text-2xl">{product?.data.price || ""}</p>
        </>
    );
}

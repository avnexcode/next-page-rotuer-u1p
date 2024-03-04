import axiosInstance from "@/lib/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useProductById = (id: string) => {
    return useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            if(!id) {
                return null
            }
            const response = await axiosInstance.get(`/product/${id}`)
            return response.data
        }
    })
}
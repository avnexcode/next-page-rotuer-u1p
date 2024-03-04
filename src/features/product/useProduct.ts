import axiosInstance from "@/lib/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => useQuery({
    queryKey: ["products"],
    queryFn: async () => {
        const response = await axiosInstance.get('/product')
        return response.data
    }
})


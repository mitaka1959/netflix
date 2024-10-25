import useSWR from "swr";
import fetcher from "@/prisma/lib/fetcher";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher, {
        revalidateOnFocus: true,  
        dedupingInterval: 0,      
        refreshInterval: 0,       
    });

    return { data, error, isLoading, mutate };
};

export default useCurrentUser;

import useSWR from "swr";
import fetcher from "@/prisma/lib/fetcher";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher, {
        revalidateOnFocus: true,  // Forces refetch when window regains focus
        dedupingInterval: 0,      // Forces refetch every time
        refreshInterval: 0,       // Disable automatic polling
    });

    return { data, error, isLoading, mutate };
};

export default useCurrentUser;

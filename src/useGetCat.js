import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  const refetchData = () => {
    console.log("data refetched");
    refetch();
  };

  if (error) {
    console.error(error);
  }

  return { data, refetchData, isCatLoading, error };
};

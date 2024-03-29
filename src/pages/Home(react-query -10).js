import { useQuery } from "@tanstack/react-query";
import { Form } from "../components/Form";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
    // refetchOnWindowFocus: false,
  });

  if (isError) {
    return <h1> Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div>
      <h1>
        This is the Home Page of <p>{catData?.fact}</p>
        <button onClick={refetch}>Update</button>
      </h1>

      <Form />
    </div>
  );
};

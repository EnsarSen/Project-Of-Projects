import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export const CatFact = () => {
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["catFacts"],
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  const Navigate = useNavigate();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError)
    return (
      <h1>
        Uh oh... there was an error please contact dev at senensar170@gmail.com
      </h1>
    );

  return (
    <div>
      <h1>Ensar's Cat Fact Generator</h1>
      <h2> {data?.fact} </h2>
      <button onClick={refetch}>New Fact</button>
      <div>
        <button onClick={() => Navigate("/")}> Return Home </button>
      </div>
    </div>
  );
};

import { QueryClient, QueryClientProvider, UseQueryResult, useQuery } from "react-query";

const queryClient = new QueryClient(); // #1 - Cache

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const {
    isLoading,
    error,
    data,
  }: UseQueryResult<
    {
      name: string;
      description: string;
      subscribers_count: number;
      stargazers_count: number;
      forks_count: number;
    },
    { message: string }
  > = useQuery("repoData", () =>
    // #2 - Cache Key & Fetcher
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return <div>"An error has occurred: " + {error.message};</div>;
  return (
    <div>
      <a href="https://saengmotmi.netlify.app/react/react-query/">출처</a>

      {data && (
        <>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong>
          <strong>✨ {data.stargazers_count}</strong>
          <strong>🍴 {data.forks_count}</strong>
        </>
      )}
    </div>
  );
}

// Components
import ErrorBoundary from "@components/client/errorBoundary";
import ErrorHandling from "../../error";
// Libs
import { Metadata, ResolvingMetadata } from "next";
// Styles

interface IgetDataRequest {
  postId: number;
}

interface IgetDataResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData({ postId }: IgetDataRequest) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 10 },
    }
  );
  if (res.status === 404) {
    throw new Error("404 Not Found");
  }
  const data: IgetDataResponse = await res.json();
  return data;
}

interface IParams {
  postId: number;
}

export async function generateMetadata(
  { params }: { params: IParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `POST - ${params.postId}`,
  };
}

export default async function PostIdPage({ params }: { params: IParams }) {
  const data = await getData({ postId: params.postId });

  return (
    <main style={{ padding: "6rem", minHeight: "100vh" }}>
      <ErrorBoundary fallback={<ErrorHandling />}>
        <h1 style={{ marginBottom: "10px" }}>POST PAGE - {params.postId}</h1>
        <article style={{ padding: "10px", border: "1px solid black" }}>
          <p style={{ marginBottom: "10px" }}>{data.title}</p>
          <p>{data.body}</p>
        </article>
      </ErrorBoundary>
    </main>
  );
}

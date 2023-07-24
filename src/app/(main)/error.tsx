"use client";

import { useRouter } from "next/navigation";

export default function ErrorHandling({ error }: { error?: Error }) {
  const router = useRouter();

  return (
    <main style={{ padding: "6rem", minHeight: "100vh" }}>
      <h2>Something went wrong!</h2>
      <button onClick={() => router.push("/ISR")}>Try again</button>
    </main>
  );
}

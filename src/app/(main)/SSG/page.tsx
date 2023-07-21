// Components
// Libs
import type { Metadata } from "next";
// Styles
import styles from "@styles/page.module.css";

export const metadata: Metadata = {
  title: "SSG",
  description: "Generated by create next app",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "force-cache",
  });
  return res.json();
}

export default async function SSGPage() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <h1>SSG PAGE</h1>
    </main>
  );
}

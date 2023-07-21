"use client";
import { useEffect } from "react";
// Components
// Libs
// Styles
import styles from "@styles/page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

export default function CSRPage() {
  useEffect(() => {
    handleGetData(); // Cache-Status: MISS
    handleGetData(); // Cache-Status: HIT
    // revalidate: 0 or cache: 'no-store' can skip cache
  }, []);

  const handleGetData = async () => {
    const data = await getData();
    console.log(data);
  };

  return (
    <main className={styles.main}>
      <h1>CSR PAGE</h1>
    </main>
  );
}

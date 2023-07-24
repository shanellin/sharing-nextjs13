import { Suspense } from "react";
// Components
import FastComponent from "@components/server/fastComponent";
import SlowComponent from "@components/server/slowComponent";
import ClientComponent from "@components/client/clientComponent";
import Loading from "../loading";
// Libs
import type { Metadata } from "next";
// Styles
import styles from "@styles/page.module.css";

export const metadata: Metadata = {
  title: "SSR",
  description: "Generated by create next app",
};

export default async function SSRPage() {
  return (
    <main className={styles.main2}>
      <h1>SSR PAGE</h1>

      <Suspense fallback={<Loading />}>
        <FastComponent />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>

      <ClientComponent />
    </main>
  );
}

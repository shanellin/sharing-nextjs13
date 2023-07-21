"use client";
import React from "react";
// Components
import Link from "next/link";
// Libs
import { usePathname } from "next/navigation";
// Styles
import styles from "@styles/page.module.css";

export default function PostLink({ postId }: { postId: number }) {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${postId}`}>
      <div className={styles.card}>
        <h2>
          POST{postId} <span>-&gt;</span>
        </h2>
        <p>Go to post{postId} page.</p>
      </div>
    </Link>
  );
}

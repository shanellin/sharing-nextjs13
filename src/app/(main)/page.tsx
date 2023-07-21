// Components
import Image from "next/image";
import Link from "next/link";
// Libs
// Styles
import styles from "@styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href={"/SSR"}>
          <div className={styles.card}>
            <h2>
              SSR <span>-&gt;</span>
            </h2>
            <p>Go to SSR page.</p>
          </div>
        </Link>

        <Link href={"/SSG"}>
          <div className={styles.card}>
            <h2>
              SSG <span>-&gt;</span>
            </h2>
            <p>Go to SSG page.</p>
          </div>
        </Link>

        <Link href={"/ISR"}>
          <div className={styles.card}>
            <h2>
              ISR <span>-&gt;</span>
            </h2>
            <p>Go to ISR page.</p>
          </div>
        </Link>

        <Link href={"/CSR"}>
          <div className={styles.card}>
            <h2>
              CSR <span>-&gt;</span>
            </h2>
            <p>Go to CSR page.</p>
          </div>
        </Link>

        <Link href={"/shop-listing"}>
          <div className={styles.card}>
            <h2>
              SHOP - LISTING <span>-&gt;</span>
            </h2>
            <p>Go to Shop-listing page with styled-component</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

// Components
import ShopHeader from "@components/ssr/shopHeader";
import ShopFooter from "@components/ssr/shopFooter";
// Libs
import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
// Styles
import "@styles/globals.css";
import StyledComponentsRegistry from "@styles/registry"

const DancingScript = Dancing_Script({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop meta",
  description: "Shop description",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DancingScript.className}>
        <StyledComponentsRegistry>
          <ShopHeader />
          {children}
          <ShopFooter />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

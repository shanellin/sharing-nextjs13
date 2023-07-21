// Components
import ShopListingPage from "@containers/shop-listing";
// Libs
// Styles
import styles from "@styles/page.module.css";

export default async function ShopListing() {
  return (
    <main className={styles.main2}>
      <ShopListingPage />
    </main>
  );
}

import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout_container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

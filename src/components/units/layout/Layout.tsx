import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout ({children}:PropsWithChildren){
  return (
    <div>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout;
import React, { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-page">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

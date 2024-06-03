import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

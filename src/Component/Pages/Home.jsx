import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Layout/Banner";
import About from "../Layout/About";
import Services from "../Layout/Services";

function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Services/>
    </Layout>
  );
}

export default Home;

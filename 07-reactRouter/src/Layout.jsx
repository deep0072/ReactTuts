import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />

      {/* this outlet will be dynamically changed and Header and Footer will be same. means all children of this Layout component will be sanwitched between Header and footer component */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

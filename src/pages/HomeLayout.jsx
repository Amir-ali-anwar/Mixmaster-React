import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
    <Navbar />
    <section className="page">
      <Outlet />
    </section>
    </>
  );
};

export default HomeLayout;

import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isNavigation = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page">
        {isNavigation ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;

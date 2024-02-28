'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import appStore from "@/utils/redux/appStore";

const Body = ({ children }) => {
  return (
    <Provider store={appStore}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  );
};

export default Body;

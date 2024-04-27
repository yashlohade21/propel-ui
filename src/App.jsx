import React from "react";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;

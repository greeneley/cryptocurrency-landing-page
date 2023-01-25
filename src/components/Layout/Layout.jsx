import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

export default function layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      {children}
      {/*<Footer />*/}
    </div>
  );
}

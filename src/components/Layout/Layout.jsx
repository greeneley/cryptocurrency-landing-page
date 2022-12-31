import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

export default function layout({ children }) {
  return (
    <div className="mx-auto">
      <Navbar />
      {children}
    </div>
  );
}

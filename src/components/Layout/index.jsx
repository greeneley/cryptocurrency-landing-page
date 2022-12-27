import React from "react";
import Navbar from "../Navbar";

export default function index({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}

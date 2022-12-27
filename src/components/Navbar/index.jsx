import React from "react";
import Logo from "../../images/logo.svg";

export default function Navbar(props) {
  return (
    <div className="py-4 flex">
      <div className="flex ">
        <img src={Logo} alt="Neva" />
      </div>
      <div></div>
    </div>
  );
}

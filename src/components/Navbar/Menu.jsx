import React from "react";
import { FiChevronDown } from "react-icons/fi";

function Menu() {
  return (
    <>
      <a href="#" className="md:mx-6 hover:text-primary">
        Crytocurrency
      </a>
      <a href="#" className="md:mx-6 hover:text-primary">
        Exchanges
      </a>
      <a href="#" className="md:mx-6 hover:text-primary">
        Watchlist
      </a>
      <a href="#" className="md:mx-6 hover:text-primary">
        NFT
      </a>
      <a href="#" className="md:mx-6 hover:text-primary">
        Portfolio
      </a>
      <a href="#" className="md:mx-6 hover:text-primary">
        Products
        <FiChevronDown className="inline ml-2" />
      </a>
    </>
  );
}

export default Menu;

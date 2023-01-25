import React from "react";
import DropdownMenu from "./DropDownMenu";
function Menus() {
  return (
    <>
      <div className="w-full">
        <a href="#" className="hover:text-primary block py-2">
          Crytocurrency
        </a>
      </div>
      <div className="w-full">
        <a href="#" className="hover:text-primary block py-2">
          Exchanges
        </a>
      </div>
      <div className="w-full">
        <a href="#" className="hover:text-primary block py-2">
          Watchlist
        </a>
      </div>
      <div className="w-full">
        <a href="#" className="hover:text-primary block py-2">
          NFT
        </a>
      </div>
      <div className="w-full">
        <a href="#" className="hover:text-primary block py-2">
          Portofolios
        </a>
      </div>
      <DropdownMenu>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Portofolios
          </a>
        </div>
        <div className="w-full">
          <a href="/" className="hover:text-primary py-2 block">
            Portofoliosx
          </a>
        </div>
      </DropdownMenu>
    </>
  );
}

export default Menus;

import React from "react";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { FiChevronDown } from "react-icons/fi";
export default function Navbar() {
  return (
    <nav className="bg-primary bg-opacity-5 sticky top-0">
      <div className="sticky container mx-auto top-0 flex py-8 justify-between items-center w-5/6">
        <div className="flex items-center">
          <img src={Logo} className="mr-6" alt="Neva" />
          <div className="flex">
            <a href="#" className="mx-6 hover:text-primary">
              Crytocurrency
            </a>
            <a href="#" className="mx-6 hover:text-primary">
              Exchanges
            </a>
            <a href="#" className="mx-6 hover:text-primary">
              Watchlist
            </a>
            <a href="#" className="mx-6 hover:text-primary">
              NFT
            </a>
            <a href="#" className="mx-6 hover:text-primary">
              Portfolio
            </a>
            <a href="#" className="mx-6 hover:text-primary">
              Products
              <FiChevronDown className="inline ml-2" />
            </a>
          </div>
        </div>
        <div className="flex">
          <SecondaryButton className="mr-4">Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { FiChevronDown } from "react-icons/fi";
import { useScrollPosition } from "../../hooks/hooks-internal.jsx";
export default function Navbar() {
  // Change navigation on scroll: https://www.skillthrive.com/hunter/posts/change-nav-on-scroll
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();
  return (
    <nav
      className={classNames(
        scrollPosition > 0
          ? "bg-white shadow py-3"
          : "bg-primary bg-opacity-5 py-8",
        "sticky top-0 transition-all duration-700"
      )}
    >
      <div className="container mx-auto top-0 flex justify-between items-center w-5/6">
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

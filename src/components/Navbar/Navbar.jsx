import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { useScrollPosition } from "../../hooks/hooks-internal.jsx";
import Menu from "./Menu.jsx";
import { BsList } from "react-icons/bs";
export default function Navbar() {
  // Change navigation on scroll: https://www.skillthrive.com/hunter/posts/change-nav-on-scroll

  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <div className="container mx-auto top-0 flex justify-between items-center md:w-5/6 w-32">
        <div className="flex items-center">
          <img src={Logo} className="mr-6" alt="Neva" />
          <div className="invisible h-0 xl:flex xl:visible xl:h-auto">
            <Menu />
          </div>
        </div>
        <div className="invisible h-0 xl:flex xl:visible xl:h-auto">
          <SecondaryButton className="mr-4">Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
      <div className="md:hidden text-2xl">
        <button>
          <BsList />
        </button>
      </div>
    </nav>
  );
}

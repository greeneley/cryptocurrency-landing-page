import React, { useEffect, useState } from "react";
import classNames from "classnames";

import Logo from "../../images/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { useScrollPosition } from "../../hooks/hooks-internal.jsx";
import Menus from "./Menus.jsx";
import { BsList, BsX } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
export default function Navbar() {
  // Change navigation on scroll: https://www.skillthrive.com/hunter/posts/change-nav-on-scroll

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  useEffect(() => {
    if (isMobile) {
      setDropdownOpen(false);
    }
  }, [isMobile]);

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const thresholdHeight = 50;
    if (height > thresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);
  const handleBlackScreenClick = (e) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };
  return (
    <nav
      className={classNames(
        "fixed py-8 z-10 w-full transition-all duration-700",
        {
          "bg-white shadow-lg !py-3": backgroundWhite,
        }
        // scrollPosition > 0
        //   ? "bg-white shadow-lg !py-3"
        //   : "bg-primary bg-opacity-5 py-8"
      )}
    >
      <div className="px-4 container md:mx-auto top-0 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} className="mr-6" alt="Neva" />
          <div className="hidden mx-4 gap-8 xl:flex">
            <Menus />
          </div>
        </div>
        <div className="hidden xl:flex">
          <SecondaryButton className="mr-4">Sign In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
        <div className="md:hidden text-2xl">
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ? <BsX /> : <BsList />}
          </button>
          <div
            className={classNames({
              "text-base left-0 top-full right-0 absolute transition-all duration-400": true,
              "invisible opacity-0": !dropdownOpen,
              "visible opacity-100": dropdownOpen,
            })}
          >
            <div
              className="h-screen left-0 bg-back bg-opacity-30"
              onClick={handleBlackScreenClick}
            >
              <div className="z-20 shadow-xl bg-white p-6">
                <div className="gap-4 flex mb-6 justify-center">
                  <SecondaryButton className="w-full">Sign In</SecondaryButton>
                  <PrimaryButton className="w-full">Sign Up</PrimaryButton>
                </div>
                <div className="mb-4">
                  <Menus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

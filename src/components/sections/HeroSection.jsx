import React from "react";
import globeCrypto from "../../images/illustrations/globe.png";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton.jsx";
import { FiChevronDown } from "react-icons/fi";
function HeroSection(props) {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="container mx-auto grid grid-cols-2 items-center w-5/6 h-[48em]">
        <div className="flex items-center">
          <div>
            <p className="text-primary">SIGN UP TODAY</p>
            <h1 className="text-6xl font-bold leading-normal">The World’s</h1>
            <h1 className="text-6xl font-bold leading-normal">
              Fastest Growing
            </h1>
            <h1 className="text-6xl font-bold leading-normal">
              Crypto Web App
            </h1>
            <div className="my-8">
              <p className="text-gray">
                Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                using
              </p>
              <p className="text-gray">
                bank transfers or your credit/debit card.
              </p>
            </div>
            <div className="flex">
              <PrimaryButton className="mr-4">Get Started</PrimaryButton>
              <SecondaryButton>
                Download App
                <FiChevronDown className="inline ml-2" />
              </SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <img src={globeCrypto} alt="globe" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import React from "react";
import TradingToolsImage from "../../images/illustrations/tradingtools.png";
import SecondaryButton from "../buttons/SecondaryButton.jsx";
import Fade from "react-reveal/Fade";
function TradingTools() {
  return (
    <div className="px-6">
      <div className="rounded-3xl bg-gradient-to-b bg-[#F4F9FF]">
        <div className="container mx-32 py-20">
          <div className="grid grid-cols-2 items-center">
            <div className="ml-14 w-5/6">
              <h2 className="font-semibold text-3xl leading-normal">
                Advanced Trading Tools
              </h2>
              <p className="font-medium mt-10">
                Professional Access, Non-stop Availability
              </p>
              <p className="font-light mt-3">
                We provide premium access to crypto trading for both individuals
                and institutions through high liquidity, reliable order
                execution and constant uptime.
              </p>
              <p className="font-medium mt-10">A Range of Powerful Apis</p>
              <p className="font-light mt-3">
                Set up your own trading interface or deploy your algorithmic
                strategy with our high-performance FIX and HTTP APIs. Connect to
                our WebSocket for real-time data streaming.
              </p>
              <p className="font-medium mt-10">Customer Support</p>
              <p className="font-light mt-3">
                Premium 24/7 support available to all customers worldwide by
                phone or email. Dedicated account managers for partners.
              </p>
              <div className="mt-10">
                <SecondaryButton>Get Started</SecondaryButton>
                <a
                  href="#"
                  className="inline text-primary underline ml-10 hover:text-gray transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="ml-14">
              <Fade bottom>
                <img src={TradingToolsImage} alt="" />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingTools;

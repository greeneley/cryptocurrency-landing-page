import React from "react";
import buyIcon from "../../images/illustrations/buy.png";
import PrimaryButton from "../buttons/PrimaryButton";
import { BsChevronDown } from "react-icons/bs";

function BuyAndTradeSection(props) {
  return (
    <div className="container mx-auto py-28 flex items-center justify-center ">
      <div className="grid grid-cols-2 gap-10 flex items-center">
        <div className="max-w-xl">
          <h2 className="font-semibold text-3xl mb-4 leading-normal">
            Buy & trade on the <br /> original crypto exchange.
          </h2>
          <p className="text-gray mb-6">
            Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
            Crypto Coin. We accept BTC crypto-currency
          </p>
          <div className="flex justify-between gap-6 mb-4">
            <div className="border border-primary rounded-2xl py-4 px-6 flex items-center w-full">
              <div className="border-r border-primary pr-6">
                <small className="text-primary">Amount</small>
              </div>
              <input
                type="text"
                className="text-right outline-none w-full"
                value="5,000"
              />
            </div>
            <div className="border border-primary rounded-2xl py-6 px-8 flex items-center">
              <img
                src="src/public/cryptocurrencies/usd.svg"
                alt=""
                className="inline-b mr-2"
              />
              <span className="mr-2">USD</span>
              <span className="mr-2 px-2">
                <BsChevronDown />
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-6 mb-4">
            <div className="border border-primary rounded-2xl py-4 px-6 flex items-center w-full">
              <div className="border-r border-primary pr-6">
                <small className="text-primary">Amount</small>
              </div>
              <input
                type="text"
                className="text-right outline-none w-full"
                value="0.10901"
              />
            </div>
            <div className="border border-primary rounded-2xl py-6 px-8 flex items-center">
              <img
                src="src/public/cryptocurrencies/btc.svg"
                alt=""
                className="inline-b mr-2"
              />
              <span className="mr-2">BTC</span>
              <span className="mr-2 px-2">
                <BsChevronDown />
              </span>
            </div>
          </div>
          <PrimaryButton className="w-full">Buy Now</PrimaryButton>
        </div>
        <div className="motion-safe:animate-fadeIn">
          <img src={buyIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default BuyAndTradeSection;

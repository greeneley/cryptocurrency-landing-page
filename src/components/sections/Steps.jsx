import React from "react";
import signUp from "../../images/illustrations/signup.png";
import fund from "../../images/illustrations/wallet.png";
import buy from "../../images/illustrations/okay.png";
import arrow from "../../images/arrow.svg";
function Steps(props) {
  return (
    <div className="px-6">
      <div className="rounded-3xl bg-gradient-to-b bg-[#F4F9FF]">
        <div className="container mx-auto py-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Get started in just a few minutes
            </h2>
          </div>
          <div className="my-10">
            <div className="flex text-center justify-center">
              <div className="w-[23em] text-center justify-center">
                <img src={signUp} alt="" className="inline-block mb-[10px]" />
                <div className="text-center">
                  <h3 className="font-medium mb-[15px]">Sign Up</h3>
                  <p className="font-light inline-block w-auto text-center">
                    Buy Bitcoin or Ethereum, then securely store it in your
                    Wallet or send it on easily to friends
                  </p>
                </div>
              </div>
              <img src={arrow} alt="" className="-mx-4" />
              <div className="w-[23em] text-center justify-center">
                <img src={fund} alt="" className="inline-block mb-[10px]" />
                <div className="text-center">
                  <h3 className="font-medium mb-[15px]">Fund</h3>
                  <p className="font-light inline-block w-auto text-center">
                    Choose your preferred payment method such as bank transfer
                    or credit card to top up your NEFA Wallet
                  </p>
                </div>
              </div>
              <img src={arrow} alt="" className="-mx-4" />
              <div className="w-[23em] text-center justify-center">
                <img src={buy} alt="" className="inline-block mb-[10px]" />
                <div className="text-center">
                  <h3 className="font-medium mb-[15px]">Buy Crypto</h3>
                  <p className="font-light inline-block w-auto text-center">
                    Sign up for your free NEFA Wallet on web, iOS or Android and
                    follow our easy process to set up your profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;

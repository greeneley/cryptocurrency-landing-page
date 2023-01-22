import React from "react";
import faq from "../../images/illustrations/faq.png";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import SecondaryButton from "../buttons/SecondaryButton.jsx";
import { AiOutlineArrowUp } from "react-icons/all.js";
import Fade from "react-reveal/Fade";
function Faq(props) {
  return (
    <div className="container mx-auto my-10 justify-center">
      <div className="grid grid-cols-2 items-center my-36">
        <div className="ml-14 text-center">
          <Fade bottom>
            <img src={faq} alt="" />
          </Fade>
        </div>
        <div className="w-5/6">
          <p className="text-primary font-extralight">SUPPORT</p>
          <h2 className="font-semibold text-3xl leading-normal">
            Frequently asked questions
          </h2>
          <div className=" border-b border-lightgray pt-[25px]">
            <div className="flex justify-between">
              <p className="font-medium">Why should I choose NEFA?</p>
              <span>
                <BsChevronUp />
              </span>
            </div>
            <p className="mr-5 font-light py-5">
              We're industry pioneers, having been in the cryptocurrency
              industry since 2016. We've facilitated more than 21 billion USD
              worth of transactions on our exchange for customers in over 40
              countries. Today, we're trusted by over 8 million customers around
              the world and have received praise for our easy-to-use app, secure
              wallet, and range of features.
            </p>
          </div>
          <div className="flex justify-between border-b border-lightgray py-[25px]">
            <p className="font-medium">How secure is NEFA?</p>
            <span>
              <BsChevronDown />
            </span>
          </div>
          <div className="flex justify-between border-b border-lightgray py-[25px]">
            <p className="font-medium">Do I have to buy a whole Bitcoin?</p>
            <span>
              <BsChevronDown />
            </span>
          </div>
          <div className="flex justify-between border-b border-lightgray py-[25px]">
            <p className="font-medium">How do I actually buy Bitcoin?</p>
            <span>
              <BsChevronDown />
            </span>
          </div>
        </div>
      </div>
      <p className="text-center">
        <SecondaryButton className="rounded-2xl bg-[#FAFAFA] border-neutral-300 text-gray hover:text-white">
          <span>Back to top</span>
          <AiOutlineArrowUp className="inline ml-3" />
        </SecondaryButton>
      </p>
    </div>
  );
}

export default Faq;

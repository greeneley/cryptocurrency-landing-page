import React from "react";
import CreditCardImage from "../../images/illustrations/credit-card.png";
import SecondaryButton from "../buttons/SecondaryButton";
import { BsCheckCircleFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
function CreditCard(props) {
  return (
    <div className="container mx-auto my-10 justify-center">
      <div className="grid grid-cols-2 gap-10 items-center my-36">
        <div className="ml-14">
          <Fade bottom>
            <img src={CreditCardImage} alt="" />
          </Fade>
        </div>
        <div className="ml-14">
          <h2 className="font-semibold text-3xl leading-normal">
            Introducing the NEFA <br /> Credit Card
          </h2>
          <p className="font-normal mt-5">
            Subject to cardholder and rewards terms which will be available{" "}
            <br /> at application.
          </p>
          <ul className="py-2 mt-5">
            <li className="py-2">
              <BsCheckCircleFill color={"blue"} className="inline mx-5" />
              Up to 3% back on purchases
            </li>
            <li className="py-2">
              <BsCheckCircleFill color={"blue"} className="inline mx-5" />
              Earn rewards in bitcoin or any crypto on NEFA
            </li>
            <li className="py-2">
              <BsCheckCircleFill color={"blue"} className="inline mx-5" />
              No annual fee
            </li>
          </ul>
          <SecondaryButton>Join the waitlist</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;

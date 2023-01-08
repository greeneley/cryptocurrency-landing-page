import React from "react";
import CreditCardImage from "../../images/illustrations/credit-card.png";
function CreditCard(props) {
  return (
    <div className="container mx-auto my-10 justify-center">
      <div className="grid grid-cols-2">
        <div>
          <img src={CreditCardImage} alt="" />
        </div>
        <div>
          <h2>
            Introducing the NEFA <br /> Credit Card
          </h2>
          <p>
            Subject to cardholder and rewards terms which will be available at
            application.
          </p>
          <div className="border border-primary rounded-full">
            <p>Join the waitlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;

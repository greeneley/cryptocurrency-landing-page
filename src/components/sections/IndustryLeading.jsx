import React from "react";
import BankImage from "../../images/illustrations/banks.png";
import SecondaryButton from "../buttons/SecondaryButton";
import { BsCheckCircleFill } from "react-icons/bs";
function IndustryLeading(props) {
  return (
    <div className="container mx-auto my-10 justify-center">
      <div className="grid grid-cols-2 gap-10 items-center my-36">
        <div className="ml-14 text-center">
          <img src={BankImage} alt="" />
        </div>
        <div className="ml-14 w-5/6">
          <h2 className="font-semibold text-3xl leading-normal">
            Industry-leading security from <br /> day one
          </h2>
          <ul className="py-2 mt-5 w-5/6">
            <li className="py-2 w-auto">
              <BsCheckCircleFill
                color={"blue"}
                className="inline mr-6 font-medium"
              />
              Safety, security and compliance
              <p className="font-light mt-5">
                NEFA is a licensed New York trust company that undergoes regular
                bank exams and is subject to the cybersecurity audits conducted
                by the New York Department of Financial Services. Learn more
                about our commitment to security.
              </p>
            </li>
            <li className="py-2 w-auto">
              <BsCheckCircleFill
                color={"blue"}
                className="inline mr-6 font-medium"
              />
              Hardware security keys
              <p className="font-light mt-5">
                With NEFA you can secure your account with a hardware security
                key via WebAuthn.
              </p>
            </li>
            <li className="py-2 w-auto">
              <BsCheckCircleFill
                color={"blue"}
                className="inline mr-6 font-medium"
              />
              SOC Certifications
              <p className="font-light mt-5">
                NEFA is <span className="underline">SOC 1 Type 2</span> and{" "}
                <span className="underline">SOC 2 Type 2</span> compliant. We
                are the world’s first cryptocurrency exchange and custodian to
                complete these exams.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IndustryLeading;

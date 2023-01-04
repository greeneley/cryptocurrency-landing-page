import React from "react";
import partner1 from "../../images/partners/partner1.png";
import partner2 from "../../images/partners/partner2.png";
import partner3 from "../../images/partners/partner3.png";
import partner4 from "../../images/partners/partner4.png";
function PartnerSection(props) {
  return (
    <div className="px-6">
      <div className="rounded-3xl bg-gradient-to-b bg-[#F4F9FF]">
        <div className="container mx-auto py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Trusted Partners Worldwide
            </h2>
            <p className="text-gray">
              We're partners with countless major organisations around the globe
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-center gap-6">
              <img src={partner1} alt="" />
              <img src={partner2} alt="" />
              <img src={partner3} alt="" />
              <img src={partner4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;

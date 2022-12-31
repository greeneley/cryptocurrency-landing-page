import React from "react";
import emoji from "react-easy-emoji";
import { BsChevronRight } from "react-icons/bs";
function CryptocurrencySection(props) {
  return (
    <section className="-mt-2">
      <div className="container rounded-3xl bg-white py-8 px-4 shadow mx-auto w-5/6">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <div className="flex justify-between">
              <span className="font-semibold text-lg">
                {emoji("🔥 Trending", {
                  props: { className: "inline mr-2 text-normal" },
                })}
              </span>
              <a href="" className="text-primary">
                More <BsChevronRight className="inline ml-2" />
              </a>
            </div>
          </div>
          <div className="px-4">Hello</div>
          <div className="px-4">Hello</div>
        </div>
      </div>
    </section>
  );
}

export default CryptocurrencySection;

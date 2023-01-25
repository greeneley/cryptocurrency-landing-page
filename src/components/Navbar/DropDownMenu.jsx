import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";

function DropDownMenu({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative w-full group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="hover:text-primary cursor-pointer py-2 flex items-center justify-between">
        Product
        <BsChevronDown className="inline ml-2" />
      </span>
      <div
        className={classNames(
          "lg:absolute h-full shadow-lg rounded-lg bg-white",
          {
            "invisible opacity-0 h-0": !open,
            "visible opacity-100 h-full": open,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default DropDownMenu;

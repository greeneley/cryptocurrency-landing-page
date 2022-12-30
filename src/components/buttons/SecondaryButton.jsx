import React from "react";
import classNames from "classnames";

export default function SecondaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames([
    "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full px-10 py-4",
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

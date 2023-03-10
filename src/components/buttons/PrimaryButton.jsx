import React from "react";
import classNames from "classnames";

export default function PrimaryButton({
  children,
  className,
  onClick,
  ...props
}) {
  const cx = classNames([
    "bg-primary text-white rounded-full px-6 py-4",
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

import React from "react";

export default function PrimaryButton({ children, ...props }) {
  return <button className="bg-primary">{children}</button>;
}

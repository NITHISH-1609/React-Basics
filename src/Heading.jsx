import React from "react";
import { greetingx, colorx } from "./coloring";

let greeting = greetingx;
const customStyle = {
  color: colorx
};

function Header() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Header;

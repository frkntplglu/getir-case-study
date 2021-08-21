import * as React from "react";

function SvgRadiocheck(props) {
  return (
    <svg
      width={10}
      height={7}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 1L3.5 6 1 3.727"
        stroke="#1EA4CE"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRadiocheck;

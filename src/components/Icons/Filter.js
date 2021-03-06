import * as React from "react";

function FilterIcon(props) {
  return (
    <svg
      data-testid="icon"
      fill="#fff"
      name="filter"
      size="12"
      color="#FFF"
      width={props.width || "24"}
      height={props.height || "24"}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="style__Icon-sc-__sc-hqksj3-1 iBgDjm"
    >
      <path
        d="M31.869 2.301c-0.233-0.509-0.756-0.844-1.323-0.844h-29.088c-0.567 0-1.076 0.334-1.323 0.844-0.233 0.509-0.16 1.12 0.204 1.556l11.286 13.351v8.974c0 0.553 0.305 1.047 0.8 1.294l5.818 2.909c0.451 0.233 0.989 0.204 1.411-0.058 0.436-0.262 0.684-0.727 0.684-1.236v-11.882l11.286-13.351c0.407-0.436 0.48-1.047 0.247-1.556zM17.805 15.725c-0.218 0.262-0.349 0.596-0.349 0.945v10.064l-2.909-1.454v-8.61c0-0.349-0.116-0.669-0.349-0.945l-9.613-11.359h22.819l-9.599 11.359z"
        className="style__Path-sc-__sc-hqksj3-2 kqvXtw"
      ></path>
    </svg>
  );
}

export default FilterIcon;

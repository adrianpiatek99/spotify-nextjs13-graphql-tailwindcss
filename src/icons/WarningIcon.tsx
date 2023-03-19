import type { Ref, SVGProps } from "react";
import * as React from "react";
import { forwardRef } from "react";

const SvgWarningIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#warning-icon_svg__a)" fill="currentColor">
      <path d="M6.5 8.91a.675.675 0 0 0-.668.667c0 .364.305.668.668.668.35 0 .668-.304.652-.652A.652.652 0 0 0 6.5 8.91Z" />
      <path d="M12.684 11.277c.42-.724.422-1.587.005-2.309L8.504 1.721A2.274 2.274 0 0 0 6.503.558c-.84 0-1.588.436-2.002 1.16L.31 8.973a2.3 2.3 0 0 0 .008 2.323 2.287 2.287 0 0 0 1.996 1.146h8.36c.835 0 1.586-.435 2.009-1.165Zm-.909-.524c-.232.401-.644.639-1.104.639H2.312c-.454 0-.863-.233-1.09-.625a1.265 1.265 0 0 1-.003-1.275l4.19-7.253a1.24 1.24 0 0 1 1.094-.633c.456 0 .865.238 1.093.636l4.187 7.252c.225.39.222.86-.008 1.26Z" />
      <path d="M6.334 4.22c-.318.09-.516.379-.516.729l.046.636L6 7.982a.49.49 0 0 0 .5.47.5.5 0 0 0 .5-.486c0-.166 0-.318.016-.487.029-.515.061-1.031.09-1.547.016-.334.046-.668.062-1.002a.825.825 0 0 0-.062-.334.67.67 0 0 0-.772-.377Z" />
    </g>
    <defs>
      <clipPath id="warning-icon_svg__a">
        <path fill="#fff" d="M0 0h13v13H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgWarningIcon);
export default ForwardRef;

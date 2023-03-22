import type { Ref, SVGProps } from "react";
import * as React from "react";
import { forwardRef } from "react";

const SvgChevronIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" ref={ref} {...props}>
    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>
);
const ForwardRef = forwardRef(SvgChevronIcon);
export default ForwardRef;

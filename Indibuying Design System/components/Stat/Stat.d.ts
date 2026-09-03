import type * as React from "react";

export interface StatProps {
  /** The number. Numerals with a unit — "600+", "4–6 weeks", "$2.4M". */
  value?: React.ReactNode;
  /** Short sentence-case label under the number. */
  label?: React.ReactNode;
  align?: "left" | "center";
  /** `dark` inverts for use inside the ink CTA banner. */
  tone?: "default" | "dark";
  style?: React.CSSProperties;
}

export declare function Stat(props: StatProps): JSX.Element;

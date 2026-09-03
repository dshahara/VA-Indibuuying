import type * as React from "react";

export interface TagProps {
  /** `green` is the default. Category tones match the Card tints one-for-one. */
  tone?: "green" | "success" | "ink" | "neutral" | "warning" | "danger"
    | "jewellery" | "handicrafts" | "furniture" | "furnishings" | "apparel";
  /** Leading 6px dot in `currentColor` — use for live status, not decoration. */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;

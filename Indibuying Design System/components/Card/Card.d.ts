import type * as React from "react";

export interface CardProps {
  /** Heading, sentence case. */
  title?: React.ReactNode;
  /** Category tint. `none` is the white card; `dark` is the ink panel. */
  tint?: "none" | "jewellery" | "handicrafts" | "furniture" | "furnishings" | "apparel" | "dark";
  /** `standard` = 16px radius, 24px padding. `feature` = 28px radius, 32px padding. */
  shape?: "standard" | "feature";
  /** Adds a 2px lift and shadow on hover. Off by default — the system runs flat. */
  interactive?: boolean;
  /** Primary affordance — a Button or link. Every card should have one. */
  action?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;

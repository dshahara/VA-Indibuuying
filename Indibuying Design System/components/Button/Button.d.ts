import type * as React from "react";

export interface ButtonProps {
  /**
   * `primary` is the ink pill and the default on every surface.
   * `green` is reserved for the single highest-intent CTA on a page.
   * `onDark` is the white pill used inside the dark CTA banner.
   */
  variant?: "primary" | "green" | "secondary" | "onDark" | "ghost" | "link";
  /** `sm` renders 36px — desktop only. `md` and `lg` clear the 44px touch target. */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Sentence case label. Never ALL CAPS. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;

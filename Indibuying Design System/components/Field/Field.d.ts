import type * as React from "react";

export interface FieldProps {
  /** Sentence case label. */
  label?: React.ReactNode;
  /** Helper text below the control. */
  help?: React.ReactNode;
  /** Error message — replaces `help` and turns the 2px border red. */
  error?: React.ReactNode;
  as?: "input" | "textarea" | "select";
  /** Only used when `as` is `input`. */
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  /** Options when `as` is `select`. */
  options?: string[];
  rows?: number;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): JSX.Element;

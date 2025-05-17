import type { HTMLInputTypeAttribute } from 'react';

export type SlideTextProps = {
  errorMessage: string;
  isErrorShown: boolean;
  onChange: (value: string) => void;
  large?: boolean;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
};

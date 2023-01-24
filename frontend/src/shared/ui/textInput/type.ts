import { ChangeEvent } from 'react';

export type TextInputProps = {
  value: string;
  onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  className?: string | string[] | object | object[];
  placeholder?: string;
  border?: boolean;
  noBackground?: boolean;
  label?: string;
  labelRight?: string;
  error?: string;
  errorRight?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
};

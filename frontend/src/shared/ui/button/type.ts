import React from 'react';
import { ClassNameType } from '@/shared/type';

export type ButtonProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  buttonType?: 'button' | 'submit' | 'reset';
  type?: 'button' | 'text' | 'link' | 'outline';
  size?: 'normal' | 'lg' | 'sm' | 'xs';
  active?: boolean;
  wide?: boolean;
  disabled?: boolean;
  block?: boolean;
  circle?: boolean;
  square?: boolean;
  className?: ClassNameType;
  children: React.ReactNode;
  onClick: () => void;
};

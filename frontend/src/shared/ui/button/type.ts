import React from 'react';

export type ButtonProps = {
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  type?: 'button' | 'text' | 'link' | 'outline';
  size?: 'normal' | 'lg' | 'sm' | 'xs';
  active?: boolean;
  wide?: boolean;
  disabled?: boolean;
  block?: boolean;
  circle?: boolean;
  square?: boolean;
  className?: string | string[] | object | object[];
  children: React.ReactNode;
};

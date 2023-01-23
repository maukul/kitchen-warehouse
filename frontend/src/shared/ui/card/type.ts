import React from 'react';

export type CardProps = {
  imageUrl?: string;
  title?: string;
  border?: boolean;
  type?: 'normal' | 'compact' | 'side';
  classNameCard?: string | string[] | object | object[];
  classNameCardImage?: string | string[] | object | object[];
  classNameCardBody?: string | string[] | object | object[];
  classNameCardAction?: string | string[] | object | object[];
  childrenActions?: React.ReactNode;
  children: React.ReactNode;
};

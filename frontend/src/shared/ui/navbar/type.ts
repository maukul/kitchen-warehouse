import React from 'react';

import { ClassNameType } from '@/shared/type';

export type NavbarProps = {
  className?: ClassNameType;
  children?: React.ReactNode;
  classNameStart?: ClassNameType;
  childrenStart?: React.ReactNode;
  classNameCenter?: ClassNameType;
  childrenCenter?: React.ReactNode;
  classNameEnd?: ClassNameType;
  childrenEnd?: React.ReactNode;
};

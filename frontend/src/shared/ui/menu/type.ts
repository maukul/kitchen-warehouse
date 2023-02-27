import { ReactNode } from 'react';

import { ClassNameType } from '@/shared/type';

export const itemMenuType = {
  title: 'title',
  link: 'link',
} as const;

export type ItemMenuType = keyof typeof itemMenuType;

// type SubItemMenu = {
//   classNameSubItemMenu?: ClassNameType;
//   link: string;
//   label: string;
//   icon: string;
//   subItems: SubItemMenu[];
// };

type ItemMenu = {
  active?: boolean;
  bordered?: boolean;
  hoverBordered?: boolean;
  disabled?: boolean;
  type?: ItemMenuType;
  classNameItemMenu?: ClassNameType;
  icon?: string;
  link: string;
  label: string | ReactNode;
  // subItems: SubItemMenu[];
};

export type MenuProps = {
  open: boolean;
  roundedBox?: boolean;
  menuCompact?: boolean;
  menuHorizontal?: boolean;
  items: ItemMenu[];
  classNameMenu?: ClassNameType;
};

import { ReactNode } from 'react';

export type DrawerProps = {
  onClose: () => void;
  open: boolean;
  mobile?: boolean;
  childrenMenu?: ReactNode;
  children: ReactNode;
};

import { ClassNameType } from '@/shared/type';
import { ReactNode } from 'react';

type Item = {
  className?: ClassNameType;
  data: string | ReactNode;
};

type ItemRow = {
  trClassName?: ClassNameType;
  items: Item[];
};
type TheadItem = {
  className?: ClassNameType;
  label: string | ReactNode;
};

type Thead = {
  className?: ClassNameType;
  trClassName?: ClassNameType;
  items: TheadItem[];
};

export type TableProps = {
  className?: ClassNameType;
  thead?: Thead;
  tbodyClassName?: ClassNameType;
  itemsRow: ItemRow[];
};

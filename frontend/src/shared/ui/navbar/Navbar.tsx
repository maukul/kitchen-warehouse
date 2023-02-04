import { clsx } from 'clsx';

import type { NavbarProps } from './type';

export const Navbar = (props: NavbarProps) => {
  const {
    className,
    children,
    classNameStart,
    childrenStart,
    classNameCenter,
    childrenCenter,
    classNameEnd,
    childrenEnd,
  } = props;
  return (
    <div
      className={clsx({
        navbar: true,
        className,
      })}
    >
      {childrenStart && (
        <div
          className={clsx({
            'navbar-start': true,
            classNameStart,
          })}
        >
          {childrenStart}
        </div>
      )}
      {childrenCenter && (
        <div
          className={clsx({
            'navbar-center': true,
            classNameCenter,
          })}
        >
          {childrenCenter}
        </div>
      )}
      {childrenEnd && (
        <div
          className={clsx({
            'navbar-end': true,
            classNameEnd,
          })}
        >
          {childrenEnd}
        </div>
      )}
      {children}
    </div>
  );
};

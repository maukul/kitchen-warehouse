import { useEffect, useId, useRef } from 'react';
import { clsx } from 'clsx';

import { DrawerProps } from './type';

export const Drawer = (props: DrawerProps) => {
  const { open, childrenMenu, children, mobile = false, onClose } = props;
  const ref = useRef<HTMLLabelElement>(null);
  const id = useId();
  useEffect(() => {
    ref?.current?.click();
  }, [open]);
  return (
    <div
      className={clsx({
        drawer: true,
        'drawer-mobile': mobile,
      })}
    >
      <input
        id={id}
        defaultChecked={false}
        type="checkbox"
        name="drawer"
        className="drawer-toggle"
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          onClick={onClose}
          ref={ref}
          htmlFor={id}
          className="drawer-overlay"
        ></label>
        {childrenMenu}
      </div>
    </div>
  );
};

import { clsx } from 'clsx';

import { itemMenuType, MenuProps } from './type';

export const Menu = (props: MenuProps) => {
  const { classNameMenu, roundedBox, menuCompact, menuHorizontal, items } =
    props;
  return (
    <ul
      className={clsx({
        menu: true,
        'bg-base-100': true,
        'w-56': true,

        'rounded-box': roundedBox,
        'menu-compact': menuCompact,
        'menu-horizontal': menuHorizontal,

        classNameMenu,
      })}
    >
      {items.map(
        (
          {
            active,
            label,
            bordered,
            hoverBordered,
            disabled,
            type = 'link',
            classNameItemMenu,
          },
          key
        ) => (
          <li
            key={key}
            className={clsx({
              bordered: bordered,
              'hover-bordered': hoverBordered,
              disabled: disabled,
              'menu-title': type === itemMenuType.title,

              classNameItemMenu,
            })}
          >
            {type === itemMenuType.title && label}
            {type === itemMenuType.link && (
              <a
                className={clsx({
                  active: active,
                })}
              >
                {label}
              </a>
            )}
          </li>
        )
      )}
    </ul>
  );
};

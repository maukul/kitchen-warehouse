import { clsx } from 'clsx';

import type { ButtonProps } from './type';

export const Button = (props: ButtonProps) => {
  const {
    color,
    type = 'button',
    active = false,
    size = 'normal',
    wide = false,
    disabled = false,
    block = false,
    circle = false,
    square = false,
    className,
    children,
  } = props;
  return (
    <button
      className={clsx({
        btn: true,
        // colors
        'btn-primary': color === 'primary',
        'btn-secondary': color === 'secondary',
        'btn-accent': color === 'accent',
        'btn-info': color === 'info',
        'btn-success': color === 'success',
        'btn-warning': color === 'warning',
        'btn-error': color === 'error',

        // active
        'btn-active': active,

        // type
        'btn-ghost': type === 'text',
        'btn-link': type === 'link',
        'btn-outline': type === 'outline',

        // size
        'btn-lg': size === 'lg',
        'btn-sm': size === 'sm',
        'btn-xs': size === 'xs',

        // wide
        'btn-wide': wide,

        // block
        'btn-block': block,

        // circle
        'btn-circle': circle,

        // square
        'btn-square': square,

        className,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

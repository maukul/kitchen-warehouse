import { clsx } from 'clsx';
import { ChangeEvent } from 'react';

import type { TextInputProps } from './type';

export const TextInput = (props: TextInputProps) => {
  const {
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    border = false,
    noBackground = false,
    label = '',
    labelRight = '',
    error = '',
    errorRight = '',
    color,
    size = 'sm',
    disabled = false,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e?.target?.value ?? '', e);
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) =>
    onBlur(e?.target?.value ?? '', e);
  return (
    <div className="form-control w-full max-w-xs">
      {(label || labelRight) && (
        <label className="label">
          <span className="label-text">{label}</span>
          <span className="label-text-alt">{labelRight}</span>
        </label>
      )}
      <input
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={clsx({
          input: true,

          // border
          'input-bordered': border,

          // no background
          'input-ghost': noBackground,

          // color
          'input-primary': color === 'primary',
          'input-secondary': color === 'secondary',
          'input-accent': color === 'accent',
          'input-info': color === 'info',
          'input-success': color === 'success',
          'input-warning': color === 'warning',
          'input-error': color === 'error',

          // size
          'input-xs': size === 'xs',
          'input-sm': size === 'sm',
          'input-md': size === 'md',
          'input-lg': size === 'lg',

          className,
        })}
      />
      {(error || errorRight) && (
        <label className="label">
          <span className="label-text-alt">{error}</span>
          <span className="label-text-alt">{errorRight}</span>
        </label>
      )}
    </div>
  );
};

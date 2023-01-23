import { clsx } from 'clsx';

import type { CardProps } from './type';

export const Card = (props: CardProps) => {
  const {
    classNameCard,
    classNameCardImage,
    classNameCardBody,
    classNameCardAction,
    imageUrl,
    title,
    border = false,
    type = 'normal',
    childrenActions,
    children,
  } = props;
  return (
    <div
      className={clsx({
        card: true,
        'card-bordered': border,

        // type
        'card-normal': type === 'normal',
        'card-compact': type === 'compact',
        'card-side': type === 'side',

        classNameCard,
      })}
    >
      {imageUrl && (
        <figure
          className={clsx({
            classNameCardImage,
          })}
        >
          <img src={imageUrl} alt="Shoes" />
        </figure>
      )}
      <div
        className={clsx({
          'card-body': true,
          classNameCardBody,
        })}
      >
        {title && <h2 className="card-title">{title}</h2>}
        {children}
        {childrenActions && (
          <div
            className={clsx({
              'card-actions': true,
              classNameCardAction,
            })}
          >
            {childrenActions}
          </div>
        )}
      </div>
    </div>
  );
};

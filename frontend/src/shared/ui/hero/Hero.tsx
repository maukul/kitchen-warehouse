import { clsx } from 'clsx';

import type { HeroProps } from './type';

export const Hero = (props: HeroProps) => {
  const {
    classNameHero,
    classNameHeroOverlay,
    classNameHeroContent,
    imageUrl,
    children,
  } = props;
  return (
    <div
      className={clsx({
        hero: true,
        classNameHero,
      })}
      style={{ backgroundImage: imageUrl }}
    >
      {imageUrl && (
        <div
          className={clsx({
            'hero-overlay': true,
            classNameHeroOverlay,
          })}
        ></div>
      )}
      <div
        className={clsx({
          'hero-content': true,
          classNameHeroContent,
        })}
      >
        {children}
      </div>
    </div>
  );
};

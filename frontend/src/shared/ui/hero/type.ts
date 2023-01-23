import React from 'react';

export type HeroProps = {
  imageUrl?: string;
  classNameHero?: string | string[] | object | object[];
  classNameHeroOverlay?: string | string[] | object | object[];
  classNameHeroContent?: string | string[] | object | object[];
  children: React.ReactNode;
};

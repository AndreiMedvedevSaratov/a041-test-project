import React, { memo } from 'react';
import { KittenImageStyles } from './styles';
import kittenImage from '../../assets/img/kitten.png';

export const KittenImage = memo(() => {
  return (
    <div style={KittenImageStyles}>
      <img
        alt='kitten'
        style={KittenImageStyles}
        src={kittenImage}
      />
    </div>
  );
});

KittenImage.displayName = 'KittenImage';
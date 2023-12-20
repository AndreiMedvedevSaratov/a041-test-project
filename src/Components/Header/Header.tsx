import React from 'react';
import { Logo } from '../Logo/Logo';
import { HeaderSelect } from '../HeaderSelect/HeaderSelect';
import { headerWrapper } from './styles';

export const Header = () => {
  const marginLeft = { marginLeft: '1rem' };

  return (
    <div style={headerWrapper}>
      <Logo styles={marginLeft} />
      <HeaderSelect styles={marginLeft} />
    </div>
  );
};
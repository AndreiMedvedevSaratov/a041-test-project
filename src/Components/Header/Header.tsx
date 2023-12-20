import React from 'react';
import { Logo } from '../Logo/Logo';
import { HeaderSelect } from '../HeaderSelect/HeaderSelect';
import { useMediaQuery } from 'react-responsive';
import { headerWrapper, headerMobileWrapper } from './styles';

export const Header = () => {
  const marginLeft = { marginLeft: '1rem' };
  const isDesktop = useMediaQuery({ minWidth: 500 });
  const headerStyle: React.CSSProperties = isDesktop ? headerWrapper : headerMobileWrapper;

  return (
    <div style={headerStyle}>
      <Logo styles={marginLeft} />
      <HeaderSelect styles={marginLeft} />
    </div>
  );
};
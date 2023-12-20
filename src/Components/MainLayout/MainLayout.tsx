import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../Header/Header';
import { KittenImage } from '../KittenImage/KittenImage';
import { Info } from '../Info/Info';
// import { layout } from './styles';

export const MainLayout = () => {
  const { Content } = Layout;
  const isDesktop = useMediaQuery({ minWidth: 500 });

  return (
    <>
      <Layout>
        <Header />
        {isDesktop && <KittenImage />}
        <Content>
          <Outlet />
          <Info />
        </Content>
      </Layout>
    </>
  );
};

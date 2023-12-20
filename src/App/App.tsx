import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../store/store";
import { MainLayout } from '../Components/MainLayout/MainLayout';

export const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )
}
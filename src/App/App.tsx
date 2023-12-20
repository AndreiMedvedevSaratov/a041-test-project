import React from 'react';
import { Provider } from 'react-redux';
import { store } from "../store/store";
import { MainLayout } from '../Components/MainLayout/MainLayout';
import { ErrorBoundary } from 'react-error-boundary';

export const App = () => {
  const errorMessage = 'Возникла какая-то ошибка, проверьте';

  function fallbackRender() {
    return <div>{errorMessage}</div>
  }

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </ErrorBoundary>
  )
}
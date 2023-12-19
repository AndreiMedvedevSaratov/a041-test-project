import React from "react";
import { Provider } from 'react-redux';
import { store } from "../store/store";
import { Select } from "../Components/Select/Select";

export const App = () => {
  return (
    <Provider store={store}>
      <h1>a041-test-project - Currencies Academic Terms</h1>

      <Select />
    </Provider>
  )
}
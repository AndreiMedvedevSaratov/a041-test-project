import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrency, IInitialState } from '../../types/types';
import { fetchCurrencies } from '../utils/fetchCurrencies';

const initialState: IInitialState = {
  list: [],
  selectedId: '',
  selectedName: '',
  isLoading: true,
  isSuccess: false,
  isError: false,
  errorMessage: null,
}

const currencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setActiveCurrency(state, { payload }: PayloadAction<string>) {
      const { name } = state.list.find(({ id }) => id === payload) as ICurrency;
      state.selectedId = payload;
      state.selectedName = name;
    },
    clearError(state) {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      const selectedItem = 0;

      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.list = action.payload;
      state.selectedId = action.payload[selectedItem].id;
      state.selectedName = action.payload[selectedItem].name;
      state.errorMessage = null;
    })
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = null;
    })
    builder.addCase(fetchCurrencies.rejected, (state) => {
      state.list = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = 'Какая-то ошибка';
    })
  },
})

export const currenciesReducer = currencies.reducer;
export const { setActiveCurrency, clearError } = currencies.actions;

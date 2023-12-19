import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrencies } from "../../axios/getCurrencies";
import { ICurrency } from "../../types/types";

export const fetchCurrencies = createAsyncThunk<ICurrency[]>(
  'fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await getCurrencies();

      return data;
    } catch (e) {
      return rejectWithValue('Какая-то ошибка');
    }
  },
)
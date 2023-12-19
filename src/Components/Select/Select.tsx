import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchCurrencies } from "../../store/utils/fetchCurrencies";
import { setActiveCurrency } from "../../store/slice/currencies";

export const Select = () => {
  const { list, selectedId } = useAppSelector((store) => store.currencies);
  const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>(selectedId);
  const dispatch = useAppDispatch();

  const options = list.map((item) => (
    <option value={item.id} key={item.id}>
      {item.id}
    </option>
  ));

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    setSelectedCurrency(selectedValue);
    dispatch(setActiveCurrency(selectedValue));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <select
      value={selectedCurrency}
      onChange={handleChange}
      style={{ width: '50%', padding: '10px' }}
    >
      {options}
    </select>
  );
}
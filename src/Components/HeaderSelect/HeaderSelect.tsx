import React, { FC, useCallback, useEffect, useState } from "react";
import { Select } from 'antd';
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchCurrencies } from "../../store/utils/fetchCurrencies";
import { setActiveCurrency } from "../../store/slice/currencies";
import { selectStyles, menuStyles } from "./styles";
import PropTypes from 'prop-types';

interface HeaderSelectProps {
  styles?: React.CSSProperties;
}

export const HeaderSelect: FC<HeaderSelectProps> = ({ styles = {} }) => {
  const { list, selectedId } = useAppSelector((store) => store.currencies);
  const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();
  const { Option } = Select;

  const options = list.map((item) => (
    <Option value={item.id} key={item.id}>
      {item.id}
    </Option>
  ));

  const handleChange = useCallback((value: string) => {
    setSelectedCurrency(value);
    dispatch(setActiveCurrency(value));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  useEffect(() => {
    setSelectedCurrency(selectedId);
  }, [selectedId])

  return (
    <div style={{ ...styles }} >
      <Select
        value={selectedCurrency}
        onChange={handleChange}
        style={selectStyles as React.CSSProperties}
        dropdownRender={(menu) => <div style={menuStyles as React.CSSProperties}>{menu}</div>}
      >
        {options}
      </Select>
    </div>
  );
};

HeaderSelect.propTypes = {
  styles: PropTypes.object,
};

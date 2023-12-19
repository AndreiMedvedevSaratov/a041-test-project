import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchCurrencies } from "../../store/utils/fetchCurrencies";

export const Select = () => {
  const { list } = useAppSelector((store) => store.currencies);
  const dispatch = useAppDispatch();

  console.log(list);

  useEffect(() => {
    dispatch(fetchCurrencies())
  }, []);

  return (
    <p></p>
  )
}
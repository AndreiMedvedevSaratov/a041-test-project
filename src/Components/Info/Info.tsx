import React from "react";
import { useAppSelector } from "../../store/store";

export const Info = () => {
  const { selectedName } = useAppSelector((store) => store.currencies);

  return (
    <p>{selectedName}</p>
  );
}
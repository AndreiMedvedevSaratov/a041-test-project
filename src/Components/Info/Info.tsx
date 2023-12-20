import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { message, Spin } from 'antd';
import { clearError } from '../../store/slice/currencies';
import { mainStyles, spinStyles } from './styles';

export const Info = () => {
  const { selectedName, isLoading, errorMessage } = useAppSelector(
    (store) => store.currencies,
  );
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  const showMessage = () => {
    if (errorMessage) {
      message.error({
        content: errorMessage,
        onClose: handleClose,
      });
      return null;
    }
    return null;
  };

  return (
    <div style={{ ...mainStyles, zIndex: 2, position: 'relative' }}>
      {errorMessage && showMessage()}
      {isLoading ? (
        <Spin size="large" style={spinStyles} />
      ) : (
        <div style={{ ...spinStyles, textAlign: 'center' }}>
          {selectedName}
        </div>
      )}
    </div>
  );
};
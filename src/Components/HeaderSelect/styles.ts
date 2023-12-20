import { colors } from "../../App/styles";

export const selectStyles = {
  width: '6rem',
  marginBottom: '0.5rem',
  height: '1.5rem',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

  '.antSelectSelector': {
    width: '100%',
    height: '1rem',
    fontSize: '0.9rem',
    fontFamily: 'Kreon',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

    '&.ant-select-item-option-selected': {
      backgroundColor: colors.grey,
    },
  },
};

export const selectMobileStyles = {
  width: '15rem',
  marginBottom: '1.5rem',
  height: '3rem',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

  '.antSelectSelector': {
    width: '100%',
    height: '1.5rem',
    fontSize: '0.9rem',
    fontFamily: 'Kreon',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

    '&.ant-select-item-option-selected': {
      backgroundColor: colors.grey,
    },
  },
};

export const menuStyles = {
  '.ant-select-dropdown': {
    maxHeight: '30%',
    width: '6rem',
  },
};

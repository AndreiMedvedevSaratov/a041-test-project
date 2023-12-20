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
    '@media screen and (max-width: 500px)': {
      height: '100%',
    },
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

    '&.ant-select-item-option-selected': {
      backgroundColor: colors.grey,
    },
  },

  '@media screen and (max-width: 500px)': {
    height: '2rem',
    width: '50%',
  },
};

export const menuStyles = {
  '.ant-select-dropdown': {
    maxHeight: '30%',
    width: '6rem',
  },
};

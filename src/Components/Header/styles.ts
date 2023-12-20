import { colors } from "../../App/styles";

export const headerWrapper = {
  backgroundColor: colors.white,
  '@media screen and (max-width: 500px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

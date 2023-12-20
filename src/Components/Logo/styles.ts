import { colors } from "../../App/styles";

export const logoContainer: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: colors.white,
};

export const titleStyles: React.CSSProperties = {
  fontFamily: 'Kreon',
  fontSize: '3.5rem',
  fontWeight: 500,
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
  marginBottom: '0.5rem',
};

export const textStyles: React.CSSProperties = {
  fontSize: '0.6rem',
  fontFamily: 'Kreon',
  fontWeight: 400,
  marginLeft: '0.3rem',
  width: '3.2rem',
};

export const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '3.2rem',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};
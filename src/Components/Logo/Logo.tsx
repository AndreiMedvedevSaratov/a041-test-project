import React, { FC, memo } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  logoContainer, titleStyles, textStyles,
  wrapperStyles, textMobileStyles, titleMobileStyles
} from './styles';

interface LogoProps {
  styles?: React.CSSProperties;
}

export const Logo: FC<LogoProps> = memo(({ styles = {} }) => {
  const { Title, Text } = Typography;
  const title = 'CAT';
  const nameInArray = ['currencies', 'academic', 'terms'];

  const isDesktop = useMediaQuery({ minWidth: 500 });
  const textStyle: React.CSSProperties = isDesktop ? textStyles : textMobileStyles;
  const titleStyle: React.CSSProperties = isDesktop ? titleStyles : titleMobileStyles;

  const text = nameInArray.map((item) => (
    <Text key={item} style={textStyle}>
      {item}
    </Text>
  ));

  return (
    <div style={{ ...logoContainer, ...styles }}>
      <Title style={{ ...titleStyle }}>
        {title}
      </Title>
      <div style={{ ...wrapperStyles }}>
        {text}
      </div>
    </div>
  );
});

Logo.displayName = 'CatLogo';

Logo.propTypes = {
  styles: PropTypes.object,
};
import React, { FC, memo } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { logoContainer, titleStyles, textStyles, wrapperStyles } from './styles';

interface LogoProps {
  styles?: React.CSSProperties;
}

export const Logo: FC<LogoProps> = memo(({ styles = {} }) => {
  const { Title, Text } = Typography;
  const title = 'CAT';
  const nameInArray = ['currencies', 'academic', 'terms'];

  const text = nameInArray.map((item) => (
    <Text key={item} style={textStyles}>
      {item}
    </Text>
  ));

  return (
    <div style={{ ...logoContainer, ...styles }}>
      <Title style={{ ...titleStyles }}>
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
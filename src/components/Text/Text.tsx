import { useStyles } from '@/theme/hooks/useStyles';
import React from 'react';
import { Text as RNText } from 'react-native';
import { styles as textStyles } from './styles';
import { Props } from './types';

const Text: React.FC<Props> = ({
  children,
  variant = 'regular-primary-p',
  style,
  ...props
}) => {
  const styles = useStyles(textStyles);
  const styleArray = React.useMemo(() => {
    const textStyles = variant
      .split('-')
      .map(styleKey => styles[styleKey as keyof typeof styles]);
    return [...textStyles, style];
  }, [variant, style]);

  return (
    <RNText style={styleArray} {...props}>
      {children}
    </RNText>
  );
};

export default Text;

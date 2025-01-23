import React, { useMemo } from 'react';
import { metrics } from '@/theme';
import { useStyles } from '@/theme/hooks/useStyles';
import { isAndroid } from '@/utils/platform';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LoginHeaderProps } from '../../types';
import headerStyle from './styles';
import { Text } from '@/components';
import { Theme } from '@/theme/ThemeProvider/types';

const Header: React.FC<LoginHeaderProps> = ({
  title,
  LeftElement,
  RightElement,
  theme,
}) => {
  const styles = useStyles(headerStyle);
  const insets = useSafeAreaInsets();
  const containerMarginTop = useMemo(
    () => (isAndroid ? insets.top + metrics.getStatusBarHeight() : insets.top),
    [insets],
  );

  const titleStyle = useMemo(() => {
    return {
      ...styles.title,
      width:
        !LeftElement && !RightElement
          ? 350 * metrics.scaleCoefficient
          : 160 * metrics.scaleCoefficient,
    };
  }, [LeftElement, RightElement, theme]);

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: containerMarginTop,
        },
      ]}>
      {LeftElement && <View style={styles.leftElement}>{LeftElement}</View>}
      <Text variant={`medium-${theme as Theme.WINE}Four-h4`} style={titleStyle}>
        {title}
      </Text>
      {RightElement && <View style={styles.rightElement}>{RightElement}</View>}
    </View>
  );
};

export default Header;

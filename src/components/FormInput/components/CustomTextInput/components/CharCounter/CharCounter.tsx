import React from 'react';
import { View } from 'react-native';
import { DISABLED, TEXT_OPACITY } from '@/components/FormInput/constants';
import { Theme } from '@/theme/ThemeProvider/types';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';
import { Text } from '@/components';
import { buildStyles } from '@/theme';
import { useStyles } from '@/theme/hooks/useStyles';

interface CharCounterProps {
  value: string | undefined;
  maxLength: number;
  theme: Theme;
  disabled?: boolean;
}

const CharCounter: React.FC<CharCounterProps> = ({
  value,
  maxLength,
  theme,
  disabled = false,
}) => {
  const styles = useStyles(componentStyle);
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  return (
    <View style={styles.charCounterContainer}>
      <Text
        variant="medium-transparent-span"
        style={{
          color: disabled
            ? addAlpha(colors.theme[theme].four, DISABLED)
            : addAlpha(colors.theme[theme].four, TEXT_OPACITY),
        }}>
        {value?.length || 0}/{maxLength}
      </Text>
    </View>
  );
};

const componentStyle = buildStyles((_, helpers) => ({
  charCounterContainer: {
    position: 'absolute',
    bottom: 12 * helpers.metrics.scaleCoefficient,
    right: 16 * helpers.metrics.scaleCoefficient,
  },
}));

export default CharCounter;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { metrics, typography } from '@/theme';
import { DISABLED, TEXT_OPACITY } from '@/components/FormInput/constants';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';

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
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  return (
    <View style={styles.charCounterContainer}>
      <Text
        style={[
          styles.charCounter,
          {
            color: disabled
              ? addAlpha(colors.theme[theme].four, DISABLED)
              : addAlpha(colors.theme[theme].four, TEXT_OPACITY),
          },
        ]}>
        {value?.length || 0}/{maxLength}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  charCounterContainer: {
    position: 'absolute',
    bottom: 12 * metrics.scaleCoefficient,
    right: 16 * metrics.scaleCoefficient,
  },
  charCounter: {
    ...typography.caption,
  },
});

export default CharCounter;

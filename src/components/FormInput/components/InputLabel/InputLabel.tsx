import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { metrics, typography } from '@/theme';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';

interface InputLabelProps {
  label?: string;
  theme: Theme;
  disabled: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, theme, disabled }) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;

  if (!label) {
    return null;
  }

  return (
    <Text
      style={[
        styles.label,
        {
          color: disabled
            ? addAlpha(colors.theme[theme].four, 0.8)
            : colors.theme[theme].four,
        },
      ]}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    ...typography.bodySMedium,
    marginBottom: 8 * metrics.scaleCoefficient,
  },
});

export default InputLabel;

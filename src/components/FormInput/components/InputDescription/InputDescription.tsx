import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { typography } from '@/theme';
import { DISABLED } from '@/components/FormInput/constants';
import { Theme } from '@/core/@types/theme';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';

interface InputDescriptionProps {
  description?: string;
  theme: Theme;
  disabled: boolean;
  hasError?: boolean;
  isCustomValidating?: boolean;
}

const InputDescription: React.FC<InputDescriptionProps> = ({
  description,
  theme,
  disabled,
  hasError = false,
  isCustomValidating = false,
}) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;

  if (hasError || isCustomValidating || !description) {
    return null;
  }

  return (
    <Text
      style={[
        styles.description,
        {
          color: disabled
            ? addAlpha(colors.theme[theme].four, DISABLED)
            : addAlpha(colors.theme[theme].four, 0.8),
        },
      ]}>
      {description}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    ...typography.caption,
    letterSpacing: -0.1,
  },
});

export default InputDescription;

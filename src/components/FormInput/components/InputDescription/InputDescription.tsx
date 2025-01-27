import React from 'react';
import { DISABLED } from '@/components/FormInput/constants';
import { Theme } from '@/theme/ThemeProvider/types';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';
import { Text } from '@/components';
import { buildStyles } from '@/theme';
import { useStyles } from '@/theme/hooks/useStyles';

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
  const styles = useStyles(componentStyles);

  if (hasError || isCustomValidating || !description) {
    return null;
  }

  return (
    <Text
      variant="medium-transparent-span"
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

const componentStyles = buildStyles((_, helpers) => ({
  description: {
    letterSpacing: -0.1 * helpers.metrics.scaleCoefficient,
  },
}));

export default InputDescription;

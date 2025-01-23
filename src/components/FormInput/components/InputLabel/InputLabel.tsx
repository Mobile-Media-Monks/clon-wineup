import React from 'react';
import { buildStyles } from '@/theme';
import { Theme } from '@/theme/ThemeProvider/types';
import { addAlpha } from '@/utils/commons';
import { useThemeContext } from '@/theme/ThemeProvider';
import { Text } from '@/components';
import { useStyles } from '@/theme/hooks/useStyles';

interface InputLabelProps {
  label?: string;
  theme: Theme;
  disabled: boolean;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, theme, disabled }) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  const styles = useStyles(componentStyles);

  if (!label) {
    return null;
  }

  return (
    <Text
      variant="medium-transparent-p"
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

const componentStyles = buildStyles((_, helpers) => ({
  label: {
    marginBottom: 8 * helpers.metrics.scaleCoefficient,
  },
}));

export default InputLabel;

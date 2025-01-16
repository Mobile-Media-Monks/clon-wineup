import React from 'react';
import { TouchableOpacity } from 'react-native';
import { InputError } from '@/theme/svgs';
import { FormInputTypes } from '@/components/FormInput/enum';
import { Theme } from '@/core/@types/theme';
import { useThemeContext } from '@/theme/ThemeProvider';

interface ResetInputProps {
  variant: FormInputTypes;
  theme: Theme;
  value: string | undefined;
  resetAndFocusField: () => void;
  hasError?: boolean;
}

const ResetInput: React.FC<ResetInputProps> = ({
  variant,
  theme,
  value,
  resetAndFocusField,
  hasError = false,
}) => {
  const { theme: themeContext } = useThemeContext();
  const colors = themeContext?.colors;
  if (variant === FormInputTypes.SEARCH && !!value && value.length > 0) {
    return (
      <TouchableOpacity onPress={resetAndFocusField}>
        <InputError fill={colors.theme[theme].four} />
      </TouchableOpacity>
    );
  }

  if (variant === FormInputTypes.TEXT && hasError) {
    return (
      <TouchableOpacity onPress={resetAndFocusField}>
        <InputError fill={colors.theme[theme].four} />
      </TouchableOpacity>
    );
  }
  return null;
};

export default ResetInput;
